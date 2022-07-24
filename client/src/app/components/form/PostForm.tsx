import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Textarea,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../stores/store";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default observer(function PostForm() {
  const { postStore } = useStore();
  const { loadPost, createPost, updatePost, loading, loadingInitial } =
    postStore;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    id: "",
    heading: "",
    description: "",
    createdAt: "",
    category: "",
    reacts: 0,
  });

  useEffect(() => {
    if (id)
      loadPost(id).then((post) => {
        setPost(post!);
      });
  }, [id, loadPost]);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (post.id.length === 0) {
      let newPost = {
        ...post,
        id: uuid(),
      };
      createPost(newPost).then(() => {
        navigate(`/posts/${newPost.id}`);
      });
    } else {
      updatePost(post).then(() => navigate(`/posts/${post.id}`));
    }
  };

  const handleFormInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  if (loadingInitial)
    return (
      <Flex h={"100vh"} justifyContent="center" alignItems="center" gap="4">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  return (
    <Box rounded={"lg"} boxShadow={"lg"} p={8} bg={"#EEEEEE"}>
      <Stack spacing={4}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <FormControl id="heading" isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              name="heading"
              type="text"
              variant={"filled"}
              bg={"#e7e7e7"}
              value={post.heading}
              onChange={handleFormInputChange}
            />
          </FormControl>
          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              variant={"filled"}
              bg={"#e7e7e7"}
              value={post.description}
              onChange={handleFormInputChange}
            />
          </FormControl>
          <FormControl id="createdAt" isRequired>
            <Input
              name="createdAt"
              type="date"
              variant={"filled"}
              bg={"#e7e7e7"}
              value={post.createdAt}
              onChange={handleFormInputChange}
            />
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              colorScheme={"orange"}
              size="lg"
              type="submit"
              isLoading={loading}
            >
              Done
            </Button>
            <Link to="/posts">
              <Button colorScheme={"red"} size="lg">
                Cancel
              </Button>
            </Link>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
});
