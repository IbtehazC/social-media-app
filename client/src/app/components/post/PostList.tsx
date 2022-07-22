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

interface Props {
  posts: Post[];
  selectPost: (id: string) => void;
}

export default function PostList({ posts, selectPost }: Props) {
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
            <Button
              colorScheme={"orange"}
              variant={"outline"}
              onClick={() => selectPost(post.id)}
            >
              View
            </Button>
          </Flex>
          <Divider orientation={"horizontal"} borderColor={"#FF8C32"} />
        </Box>
      ))}
    </Box>
  );
}
