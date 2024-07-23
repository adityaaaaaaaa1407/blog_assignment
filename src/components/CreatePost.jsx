/* eslint-disable react/no-unescaped-entities */
import ReactQuill from "@techstack/react-quill";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  // Retrieve data from localStorage when the component mounts
  useEffect(() => {
    const storedCaption = localStorage.getItem("caption");
    const storedDescription = localStorage.getItem("description");
    const storedPhoto = localStorage.getItem("photo");
    const storedCategory = localStorage.getItem("category");

    if (storedCaption) setCaption(storedCaption);
    if (storedDescription) setDescription(storedDescription);
    if (storedPhoto) setPhoto(storedPhoto);
    if (storedCategory) setCategory(storedCategory);
  }, []);

  // Save data to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem("caption", caption);
  }, [caption]);

  useEffect(() => {
    localStorage.setItem("description", description);
  }, [description]);

  useEffect(() => {
    localStorage.setItem("photo", photo);
  }, [photo]);

  useEffect(() => {
    localStorage.setItem("category", category);
  }, [category]);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleCancel = () => {
    // Redirect to Home page or another desired route

    navigate("/"); // Navigate to home page
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      imageUrl: photo,
      authorImage: "https://avatars.githubusercontent.com/u/109952444?v=4", // Change to dynamic author image if available
      authorName: "anonymous", // Change to dynamic author name if available
      date: new Date().toLocaleDateString(),
      title: caption,
      category: category,
      description: description,
    };
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    storedPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(storedPosts));
    setCaption("");
    setDescription("");
    setPhoto(null);
    setCategory("");
    navigate("/"); // Redirect to Home page
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <form
        className="bg-gray-800 p-6 rounded-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-white text-2xl mb-4">Create Blog</h2>

        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="caption">
            Title
          </label>
          <ReactQuill
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            theme="snow"
            placeholder="Enter the title"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="description">
            Description
          </label>
          <ReactQuill
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            theme="snow"
            placeholder="Enter the description"
            className="w-full p-10 bg-gray-700 text-white rounded"
          />
          {/* <textarea
            id="description"
            className="w-full p-10 bg-gray-700 text-white rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          /> */}
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2">Add Photos</label>
          <div className="border-2 border-dashed border-gray-600 p-4 rounded-lg text-center">
            <input
              type="file"
              accept=".svg,.png,.jpg"
              className="hidden"
              id="photo-upload"
              onChange={handlePhotoUpload}
            />
            <label
              htmlFor="photo-upload"
              className="cursor-pointer text-gray-400"
            >
              Drag photo here or{" "}
              <span className="text-blue-500">select from computer</span>
            </label>
          </div>
          {photo && (
            <div className="mt-4">
              <img src={photo} alt="Uploaded" className="max-w-full h-auto " />
            </div>
          )}
        </div>

        <div className="mb-8">
          <label className="block text-white mb-2" htmlFor="category">
            Add Category
          </label>
          <input
            id="category"
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Technology "
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-600 text-white px-4 py-2 rounded-lg"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleSubmit}
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
