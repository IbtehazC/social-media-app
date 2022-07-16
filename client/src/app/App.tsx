import { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "@chakra-ui/react";
import { Post } from "./models/post";
import NavBar from "./components/navbar/NavBar";
import PostDashboard from "./components/post/PostDashboard";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

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

  useEffect(() => {
    axios.get<Post[]>("http://localhost:5130/api/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

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
        />
      </Container>
    </>
  );
}

export default App;
