import { useEffect } from "react";
import { Container, Spinner, Text, Flex } from "@chakra-ui/react";
import NavBar from "./components/navbar/NavBar";
import PostDashboard from "./components/post/PostDashboard";
import { useStore } from "./stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { postStore } = useStore();

  useEffect(() => {
    postStore.loadPosts();
  }, [postStore]);

  if (postStore.loadingInitial)
    return (
      <Flex h={"100vh"} justifyContent="center" alignItems="center" gap="4">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text color={"#06113C"}>Loading App</Text>
      </Flex>
    );

  return (
    <>
      <NavBar />
      <Container maxW={"container.xl"} marginTop={4}>
        <PostDashboard />
      </Container>
    </>
  );
}

export default observer(App);
