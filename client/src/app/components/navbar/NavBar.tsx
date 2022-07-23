import NavBarItems from "./NavBarItems";
import NavbarLogo from "./NavbarLogo";
import { Flex } from "@chakra-ui/react";

interface Props {
  openForm: () => void;
}

export default function NavBar({ openForm }: Props) {
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
      <NavbarLogo />
      <NavBarItems openForm={openForm} />
    </Flex>
  );
}
