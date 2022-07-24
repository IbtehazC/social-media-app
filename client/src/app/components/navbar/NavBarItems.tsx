import { Stack, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function NavBarItems() {
  return (
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/posts/create">
        <Button colorScheme="orange" size="md">
          Create Post
        </Button>
      </NavLink>
    </Stack>
  );
}
