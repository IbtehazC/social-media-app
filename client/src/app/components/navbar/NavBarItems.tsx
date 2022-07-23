import React from "react";
import { Stack, Button } from "@chakra-ui/react";

interface Props {
  openForm: () => void;
}

export default function NavBarItems({ openForm }: Props) {
  return (
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <a href="/">Home</a>
      <a href="#how">Somewhere</a>
      <Button colorScheme="orange" size="md" onClick={openForm}>
        Create Post
      </Button>
    </Stack>
  );
}