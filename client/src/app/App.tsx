import { Container } from "@chakra-ui/react";
import NavBar from "./components/navbar/NavBar";
import PostDashboard from "./components/post/dashboard/PostDashboard";
import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import PostForm from "./components/form/PostForm";
import PostDetails from "./components/post/details/PostDetails";

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Container maxW={"container.xl"} marginTop={4}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostDashboard />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          {["/posts/create", "/posts/:id/edit"].map((path) => (
            <Route key={location.key} path={path} element={<PostForm />} />
          ))}
        </Routes>
      </Container>
    </>
  );
}

export default observer(App);
