import { useEffect, useState } from "react";

import { Container, Spinner, Text, Flex } from "@chakra-ui/react";
import { Post } from "./models/post";
import NavBar from "./components/navbar/NavBar";
import PostDashboard from "./components/post/PostDashboard";
import agent from "./api/agent";
import { v4 as uuid } from "uuid";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const handleSelectPost = (id: string) => {
    setSelectedPost(posts.find((x) => x.id === id));
  };

  const handleCancelSelectedPost = () => {
    setSelectedPost(undefined);
  };

  const handleOpenForm = (id?: string) => {
    id ? handleSelectPost(id) : handleCancelSelectedPost();
    setEditMode(true);
  };

  const handleCancelForm = () => {
    setEditMode(false);
  };

  function handleCreateOrEditPost(post: Post) {
    setSubmitting(true);
    if (post.id) {
      agent.Posts.update(post).then(() => {
        setPosts([...posts.filter((x) => x.id !== post.id), post]);
        setSelectedPost(post);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      post.id = uuid();
      agent.Posts.create(post).then(() => {
        setPosts([...posts, post]);
        setSelectedPost(post);
        setEditMode(false);
        setSubmitting(false);
      });
    }
  }

  const handleDeletePost = (id: string) => {
    setSubmitting(true);
    agent.Posts.delete(id).then(() => {
      setPosts([...posts.filter((x) => x.id !== id)]);
      setSubmitting(false);
    });
  };

  useEffect(() => {
    agent.Posts.list().then((res) => {
      let posts: Post[] = [];
      res.forEach((post) => {
        post.createdAt = post.createdAt.split("T")[0];
        posts.push(post);
      });
      setPosts(res);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <Flex h={"100vh"} justifyContent="center" alignItems="center" gap="4">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text color={"#06113C"}>Loading App</Text>
      </Flex>
    );

  return (
    <>
      <NavBar openForm={handleOpenForm} />
      <Container maxW={"container.xl"} marginTop={4}>
        <PostDashboard
          posts={posts}
          selectPost={handleSelectPost}
          selectedPost={selectedPost}
          cancelSelectedPost={handleCancelSelectedPost}
          openForm={handleOpenForm}
          closeForm={handleCancelForm}
          editMode={editMode}
          createOrEdit={handleCreateOrEditPost}
          deletePost={handleDeletePost}
          submitting={submitting}
        />
      </Container>
    </>
  );
}

export default App;
