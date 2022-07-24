import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function PostDetailsComments() {
  return (
    <>
      <Flex gap={2} alignItems="center" px={2} paddingTop={2}>
        <Avatar bg="teal.500" size="xs" />
        <Text color={"gray.500"} fontSize="xs">
          4 min ago
        </Text>
      </Flex>
      <Text px={2} color={"#06113C"}>This is a comment</Text>
      <Button colorScheme="messenger">Show more comments</Button>
    </>
  );
}
