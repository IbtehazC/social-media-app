import {
  Box,
  Text,
  Stack,
  Heading,
  Divider,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Post } from "../../models/post";
import { SyntheticEvent, useState } from "react";

interface Props {
  posts: Post[];
  selectPost: (id: string) => void;
  deletePost: (id: string) => void;
  submitting: boolean;
}

export default function PostList({
  posts,
  selectPost,
  deletePost,
  submitting,
}: Props) {
  const [target, setTarget] = useState("");

  const handlePostDelete = (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    setTarget(e.currentTarget.name);
    deletePost(id);
  };

  return (
    <Box background="#EEEEEE" borderRadius="lg" p={4} boxShadow={"lg"}>
      {posts.map((post) => (
        <Box
          key={post.id}
          width={"100%"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Stack>
            <Text
              color={"#FF8C32"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              Post
            </Text>
            <Heading fontSize={"2xl"} color={"#06113C"}>
              {post.heading}
            </Heading>
            <Text color={"#06113C"}>{post.description}</Text>
          </Stack>
          <Flex
            my={6}
            direction={"row"}
            align={"center"}
            justify={"space-between"}
          >
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>Reacts: {post.reacts}</Text>
              <Text color={"gray.500"} fontSize="xs">
                {post.createdAt.toString()}
              </Text>
            </Stack>
            <Flex gap={8}>
              <Button
                colorScheme={"orange"}
                onClick={() => selectPost(post.id)}
              >
                View
              </Button>
              <Button
                colorScheme={"red"}
                onClick={(e) => handlePostDelete(e, post.id)}
                isLoading={submitting && target === post.id}
              >
                Delete
              </Button>
            </Flex>
          </Flex>
          <Divider orientation={"horizontal"} borderColor={"#FF8C32"} />
        </Box>
      ))}
    </Box>
  );
}
