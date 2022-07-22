import React from "react";
import { Stack, Button } from "@chakra-ui/react";

export default function NavBarItems() {
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
      <Button colorScheme="orange" size="md">
        Create Post
      </Button>
    </Stack>
  );
}
