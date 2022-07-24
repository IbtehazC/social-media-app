import { Grid, GridItem, Flex, Spinner, Text } from "@chakra-ui/react";
import PostList from "./PostList";
import { useStore } from "../../stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export default observer(function PostDashboard() {
  const { postStore } = useStore();
  const { loadPosts, postRegistry } = postStore;

  useEffect(() => {
    if (postRegistry.size <= 1) loadPosts();
  }, [postRegistry, loadPosts]);

  if (postStore.loadingInitial)
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
    <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colSpan={8}>
        <PostList />
      </GridItem>
      <GridItem colSpan={4}>
        <h2>Post Filter</h2>
      </GridItem>
    </Grid>
  );
});
