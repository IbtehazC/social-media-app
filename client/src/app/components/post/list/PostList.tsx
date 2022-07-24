import { Box, Heading } from "@chakra-ui/react";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import PostListItem from "./PostListItem";
import { Fragment } from "react";

export default observer(function PostList() {
  const { postStore } = useStore();
  const { groupedPosts } = postStore;

  return (
    <>
      {groupedPosts.map(([group, posts]) => (
        <Fragment key={group}>
          <Heading>{group}</Heading>
          <Box background="#EEEEEE" borderRadius="lg" p={4} boxShadow={"lg"}>
            {posts.map((post) => (
              <PostListItem key={post.id} post={post} />
            ))}
          </Box>
        </Fragment>
      ))}
    </>
  );
});
