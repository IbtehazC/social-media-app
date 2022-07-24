import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Post } from "../models/post";

export default class PostStore {
  postRegistry = new Map<string, Post>();
  selectedPost: Post | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  get postsByDate() {
    return Array.from(this.postRegistry.values()).sort(
      (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
    );
  }

  loadPosts = async () => {
    this.loadingInitial = true;
    try {
      const posts = await agent.Posts.list();
      runInAction(() => {
        posts.forEach((post) => {
          this.setPost(post);
        });
      });
      this.setLoadingInitial(false);
    } catch (err) {
      console.log(err);
      this.setLoadingInitial(false);
    }
  };

  loadPost = async (id: string) => {
    let post = this.getPost(id);
    if (post) {
      this.selectedPost = post;
      return post;
    } else {
      this.loadingInitial = true;
      try {
        post = await agent.Posts.details(id);
        console.log(post);
        runInAction(() => {
          if (post === undefined) {
            this.selectedPost = undefined;
            this.setLoadingInitial(false);
            return;
          }
          this.setPost(post);
          this.selectedPost = post;
        });
        this.setLoadingInitial(false);
        return post;
      } catch (err) {
        console.log(err);
        this.setLoadingInitial(false);
      }
    }
  };

  private setPost = (post: Post) => {
    post.createdAt = post.createdAt.split("T")[0];
    this.postRegistry.set(post.id, post);
  };

  private getPost = (id: string) => {
    return this.postRegistry.get(id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createPost = async (post: Post) => {
    this.loading = true;
    try {
      await agent.Posts.create(post);

      runInAction(() => {
        this.postRegistry.set(post.id, post);
        this.selectedPost = post;
        this.editMode = false;
        this.loading = false;
      });
    } catch (err) {
      console.log(err);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  updatePost = async (post: Post) => {
    this.loading = true;
    try {
      await agent.Posts.update(post);
      runInAction(() => {
        this.postRegistry.set(post.id, post);
        this.selectedPost = post;
        this.editMode = false;
        this.loading = false;
      });
    } catch (err) {
      console.log(err);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  deletePost = async (id: string) => {
    this.loading = true;
    try {
      await agent.Posts.delete(id);
      runInAction(() => {
        this.postRegistry.delete(id);
        this.loading = false;
      });
    } catch (err) {
      console.log(err);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
