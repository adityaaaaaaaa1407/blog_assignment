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
      path: "/create-post",
      element: <CreatePost />,
    },
    {
      path: "/post",
      element: <ShowPosts />,
    },
  ]);
  return (
    <>
      <div className="bg-gray-900">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
