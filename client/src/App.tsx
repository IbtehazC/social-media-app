import { useEffect, useState } from "react";
import axios from "axios";

import { Heading, List, ListItem } from "@chakra-ui/react";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5130/api/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  return (
    <div>
      <Heading as="h2">My App</Heading>
      <List>
        {posts.map((post: any) => (
          <ListItem>{post.heading}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
