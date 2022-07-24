import {
  Box,
  Text,
  Stack,
  Heading,
  Divider,
  Button,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../models/post";
import { useStore } from "../../../stores/store";

interface Props {
  post: Post;
}

export default function PostListItem({ post }: Props) {
  const { postStore } = useStore();
  const { deletePost, loading } = postStore;

  const [target, setTarget] = useState("");

  const handlePostDelete = (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    setTarget(e.currentTarget.name);
    deletePost(id);
  };

  return (
    <Box key={post.id} width={"100%"} rounded={"md"} p={2} overflow={"hidden"}>
      <Stack>
        <Flex py={2} alignItems="center" gap={4}>
          <Avatar bg="teal.500" />
          <Stack>
            <Heading fontSize={"xl"} color={"#06113C"}>
              username
            </Heading>
            <Text color={"gray.500"} fontSize="xs">
              {post.createdAt}
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Stack py={2} direction={"column"} spacing={0} fontSize={"sm"}>
        <Heading fontSize={"xl"} color={"#06113C"}>
          {post.heading}
        </Heading>
        <Text fontSize="lg" color={"#06113C"}>
          {post.description}
        </Text>
      </Stack>
      <Flex my={2} direction={"row"} align={"center"} justify={"space-between"}>
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>Reacts: {post.reacts}</Text>
        </Stack>
        <Flex gap={8}>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={(e) => handlePostDelete(e, post.id)}
            isLoading={loading && target === post.id}
          >
            Like
          </Button>
          <Link to={`/posts/${post.id}`}>
            <Button colorScheme="orange" variant="outline">
              View
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Divider orientation="horizontal" borderColor="#FF8C32" />
    </Box>
  );
}
