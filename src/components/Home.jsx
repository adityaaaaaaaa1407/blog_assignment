import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleClick = (post) => {
    // Store the selected post in localStorage (or use a state management solution)
    localStorage.setItem("selectedPost", JSON.stringify(post));
    navigate("/post");
  };
  const handleBlog = () => {
    navigate("/create-post");
  };
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="flex flex-row flex-1 justify-between items-center">
        <h1
          className="sm:text-3xl text-xl font-bold sm:px-4 px-2 sm:py-2 py-1 m-2 cursor-pointer text-white"
          onClick={() => navigate("/")}
        >
          Blog Posts
        </h1>
        <div className="flex flex-row items-center gap-3 sm:text-xl text-md sm:px-4 px-2 sm:py-2 py-1 m-2 font-bold text-white cursor-pointer">
          <h1 onClick={handleBlog} className="">
            Create Blog
          </h1>
          <FaEdit />
        </div>
      </div>
      <div className="px-2">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 flex-wrap p-4 my-4 mx-2 border rounded-xl bg-white border-gray-600 object-cover h-auto cursor-pointer"
              onClick={() => handleClick(post)}
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="rounded-lg mb-4"
              />
              <div className="flex flex-col">
                <p className="text-blue-700 text-md font-bold mb-4 ml-4">
                  {post.category}
                </p>
                <h2 className="font-bold text-xl mb-2">{post.title}</h2>
                <div className="flex flex-row justify-between text-gray-500 text-md items-center">
                  <img
                    src={post.authorImage}
                    alt="author-image"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <p className="">{post.authorName}</p>
                  <p>{post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
