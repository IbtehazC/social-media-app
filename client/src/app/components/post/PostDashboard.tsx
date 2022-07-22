import { Grid, GridItem } from "@chakra-ui/react";
import { Post } from "../../models/post";
import PostForm from "../form/PostForm";
import PostDetails from "./PostDetails";
import PostList from "./PostList";

interface Props {
  posts: Post[];
  selectedPost: Post | undefined;
  editMode: boolean;
  selectPost: (id: string) => void;
  cancelSelectedPost: () => void;
  openForm: (id?: string) => void;
  closeForm: () => void;
  createOrEdit: (post: Post) => void;
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
}: Props) {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colSpan={8}>
        <PostList posts={posts} selectPost={selectPost} />
      </GridItem>
      <GridItem colSpan={4}>
        {selectedPost && (
          <>
            {!editMode ? (
              <PostDetails
                post={selectedPost}
                openForm={openForm}
                cancelSelectedPost={cancelSelectedPost}
              />
            ) : (
              <PostForm
                closeForm={closeForm}
                post={selectedPost}
                createOrEdit={createOrEdit}
              />
            )}
          </>
        )}
      </GridItem>
    </Grid>
  );
}
