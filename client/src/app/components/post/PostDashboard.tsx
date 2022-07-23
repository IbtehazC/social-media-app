import { Grid, GridItem } from "@chakra-ui/react";
import PostForm from "../form/PostForm";
import PostDetails from "./PostDetails";
import PostList from "./PostList";
import { useStore } from "../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function PostDashboard() {
  const { postStore } = useStore();
  const { selectedPost, editMode } = postStore;

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colSpan={8}>
        <PostList />
      </GridItem>
      <GridItem colSpan={4}>
        {selectedPost && !editMode && <PostDetails />}
        {editMode && <PostForm />}
      </GridItem>
    </Grid>
  );
});
