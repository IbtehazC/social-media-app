import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <h1>Home Page</h1>
      <Link to="/posts">TO POSTS</Link>
    </Container>
  );
}
