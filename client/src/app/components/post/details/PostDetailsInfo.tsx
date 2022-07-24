import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Spinner,
  Avatar,
} from "@chakra-ui/react";
import { Post } from "../../../models/post";
import { Link } from "react-router-dom";
import PostDetailsCommentSection from "./PostDetailsCommentSection";

interface Props {
  post: Post;
}

export default function PostDetailsInfo({ post }: Props) {
  return (
    <Box
      boxSize="max-content"
      rounded={"md"}
      background="#EEEEEE"
      borderRadius="lg"
      boxShadow={"lg"}
    >
      <Stack>
        <Flex gap={2} alignItems="center" p={2}>
          <Avatar bg="teal.500" size="xs" />
          <Text color={"gray.500"} fontSize="xs">
            {post.createdAt}
          </Text>
        </Flex>
        <Stack px={2}>
          <Heading fontSize={"2xl"} color={"#06113C"}>
            {post.heading}
          </Heading>
          <Text color={"#06113C"}>{post.description}</Text>
        </Stack>
      </Stack>
      <Image
        maxBlockSize="xl"
        src={
          "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
      />
      <Box p={2}>
        <Stack direction={"row"} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Reacts: {post.reacts}</Text>
          </Stack>
        </Stack>
        <Flex py={2} justify={"space-between"} gap={2}>
          <Link to={`/posts/${post.id}/edit`}>
            <Button colorScheme={"blue"} variant={"outline"}>
              Edit
            </Button>
          </Link>
          <Link to="/posts">
            <Button colorScheme={"red"} w={"100%"} variant={"outline"}>
              Cancel
            </Button>
          </Link>
        </Flex>
      </Box>
      <PostDetailsCommentSection />
    </Box>
  );
}
