import { useEffect, useState } from "react";

import { Container, Spinner, Text, Flex } from "@chakra-ui/react";
import { Post } from "./models/post";
import NavBar from "./components/navbar/NavBar";
import PostDashboard from "./components/post/PostDashboard";
import agent from "./api/agent";
import { v4 as uuid } from "uuid";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSelectPost = (id: string) => {
    setSelectedPost(posts.find((x) => x.id === id));
  };

  const handleCancelSelectedPost = () => {
    setSelectedPost(undefined);
  };

  const handleOpenForm = (id?: string) => {
    id ? handleSelectPost(id) : handleCancelSelectedPost();
    setEditMode(true);
  };

  const handleCancelForm = () => {
    setEditMode(false);
  };

  function handleCreateOrEditPost(post: Post) {
    post.id
      ? setPosts([...posts.filter((x) => x.id !== post.id), post])
      : setPosts([...posts, { ...post, id: uuid() }]);
    setEditMode(false);
    setSelectedPost(post);
  }

  useEffect(() => {
    agent.Posts.list().then((res) => {
      setPosts(res);
      setLoading(false);
    });
  }, []);

  if (loading)
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
        <PostDashboard
          posts={posts}
          selectPost={handleSelectPost}
          selectedPost={selectedPost}
          cancelSelectedPost={handleCancelSelectedPost}
          openForm={handleOpenForm}
          closeForm={handleCancelForm}
          editMode={editMode}
          createOrEdit={handleCreateOrEditPost}
        />
      </Container>
    </>
  );
}

export default App;
