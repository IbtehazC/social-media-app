import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useStore } from "../../../stores/store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import PostDetailsInfo from "./PostDetailsInfo";
import PostDetailsCommentSection from "./PostDetailsCommentSection";
import PostDetailsSidebar from "./PostDetailsSidebar";

export default observer(function PostDetails() {
  const { postStore } = useStore();
  const { selectedPost: post, loadPost, loadingInitial } = postStore;

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadPost(id);
  }, [id, loadPost]);

  if (loadingInitial || !post)
    return (
      <Flex h={"100vh"} justifyContent="center" alignItems="center" gap="4">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text color={"#06113C"}>Loading Post</Text>
      </Flex>
    );

  return (
    <Flex gap={8} my={16}>
      <PostDetailsInfo post={post} />
      <PostDetailsSidebar />
    </Flex>
  );
});
