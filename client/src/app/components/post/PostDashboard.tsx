import { Grid, GridItem } from "@chakra-ui/react";
import { Post } from "../../models/post";
import PostForm from "../form/PostForm";
import PostDetails from "./PostDetails";
import PostList from "./PostList";
import { useState } from "react";

interface Props {
  posts: Post[];
  selectedPost: Post | undefined;
  editMode: boolean;
  selectPost: (id: string) => void;
  cancelSelectedPost: () => void;
  openForm: (id?: string) => void;
  closeForm: () => void;
  createOrEdit: (post: Post) => void;
  deletePost: (id: string) => void;
  submitting: boolean;
}

export default function PostDashboard({
  posts,
  selectedPost,
  selectPost,
  cancelSelectedPost,
  openForm,
  closeForm,
  editMode,
  createOrEdit,
  deletePost,
  submitting,
}: Props) {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colSpan={8}>
        <PostList
          posts={posts}
          selectPost={selectPost}
          deletePost={deletePost}
          submitting={submitting}
        />
      </GridItem>
      <GridItem colSpan={4}>
        {selectedPost && !editMode && (
          <PostDetails
            post={selectedPost}
            openForm={openForm}
            cancelSelectedPost={cancelSelectedPost}
          />
        )}
        {editMode && (
          <PostForm
            closeForm={closeForm}
            createOrEdit={createOrEdit}
            post={selectedPost}
            submitting={submitting}
          />
        )}
      </GridItem>
    </Grid>
  );
}
