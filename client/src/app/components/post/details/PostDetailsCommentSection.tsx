import { Button, Flex, Stack, Textarea } from "@chakra-ui/react";
import React from "react";
import PostDetailsComments from "./comments/PostDetailsComments";

export default function PostDetailsCommentSection() {
  return (
    <Stack p={4}>
      <Textarea border="1px" placeholder="What are your thoughts?" />
      <Flex justifyContent="space-between">
        <div></div>
        <Button colorScheme="green" w={32} float="right">
          Comment
        </Button>
      </Flex>

      <PostDetailsComments />
    </Stack>
  );
}
