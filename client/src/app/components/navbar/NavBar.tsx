import NavBarItems from "./NavBarItems";
import NavbarLogo from "./NavbarLogo";
import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      bg="#EEEEEE"
      color="#06113C"
    >
      <NavLink to="/">
        <NavbarLogo />
      </NavLink>
      <NavBarItems />
    </Flex>
  );
}
