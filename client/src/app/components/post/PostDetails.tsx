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
import { useStore } from "../../stores/store";

export default function PostDetails() {
  const { postStore } = useStore();
  const { selectedPost: post, openForm, cancelSelectedPost } = postStore;

  if (!post) return <Spinner />;

  return (
    <Box
      width={"100%"}
      rounded={"md"}
      background="#EEEEEE"
      borderRadius="lg"
      boxShadow={"lg"}
    >
      <Image
        src={
          "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
        borderTopRadius="lg"
      />
      <Box p={4}>
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
        <Stack my={6} direction={"row"} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Reacts: {post.reacts}</Text>
            <Text color={"gray.500"} fontSize="xs">
              {post.createdAt.toString()}
            </Text>
          </Stack>
        </Stack>
        <Flex justify={"space-between"} gap={2}>
          <Button
            colorScheme={"blue"}
            variant={"outline"}
            w={"100%"}
            onClick={() => openForm(post.id)}
          >
            Edit
          </Button>
          <Button
            colorScheme={"red"}
            w={"100%"}
            variant={"outline"}
            onClick={() => cancelSelectedPost()}
          >
            Cancel
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
