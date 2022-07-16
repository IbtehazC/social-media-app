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
  post: Post;
  closeForm: () => void;
}

export default function PostForm({ closeForm, post: selectedPost }: Props) {
  const initialState = selectedPost ?? {
    id: "",
    heading: "",
    description: "",
    createdAt: "",
    category: "",
    reacts: "",
  };

  const [post, setPost] = useState(initialState);

  const handleFormInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  return (
    <Box rounded={"lg"} boxShadow={"lg"} p={8} bg={"#EEEEEE"}>
      <Stack spacing={4}>
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
        <Stack spacing={10} pt={2}>
          <Button colorScheme={"orange"} size="lg" onClick={() => closeForm()}>
            Done
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
