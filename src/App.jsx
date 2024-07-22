import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import ShowPosts from "./components/ShowPosts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/post",
      element: <ShowPosts />,
    },
    {
      path: "/create-post",
      element: <CreatePost />,
    },
  ]);
  return (
    <>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
