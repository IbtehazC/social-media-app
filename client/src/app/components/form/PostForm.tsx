import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { Post } from "../../models/post";

interface Props {
  post?: Post | undefined;
  closeForm: () => void;
  createOrEdit: (post: Post) => void;
  submitting: boolean;
}

export default function PostForm({
  closeForm,
  post: selectedPost,
  createOrEdit,
  submitting,
}: Props) {
  const initialState = selectedPost ?? {
    id: "",
    heading: "",
    description: "",
    createdAt: "",
    category: "",
    reacts: 0,
  };

  const [post, setPost] = useState(initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    createOrEdit(post);
  };

  const handleFormInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

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
              isLoading={submitting}
            >
              Done
            </Button>
            <Button colorScheme={"red"} size="lg" onClick={closeForm}>
              Cancel
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
}
