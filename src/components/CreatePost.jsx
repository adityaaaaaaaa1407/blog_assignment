/* eslint-disable react/no-unescaped-entities */

import ReactQuill from "@techstack/react-quill";
import "@techstack/react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

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
    navigate("/");
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: ["small", false, "large", "huge"] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      imageUrl: photo,
      authorImage: "https://avatars.githubusercontent.com/u/109952444?v=4",
      authorName: "anonymous",
      date: new Date().toLocaleDateString(),
      title: caption,
      category: category,
      description: description,
    };
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    storedPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(storedPosts));

    // Clear the form by resetting the state

    navigate("/");
  };

  const handleQuillChange = (content) => {
    setDescription(content);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <form
        className="bg-gray-800 p-6 rounded-lg w-full max-w-4xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-white text-2xl mb-4">Create Blog</h2>

        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="caption">
            Title
          </label>
          <textarea
            id="caption"
            className="w-full p-2 bg-gray-700 text-white rounded"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="description">
            Description
          </label>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={description}
            onChange={handleQuillChange}
            className="w-full h-full p-2 rounded-lg text-black bg-white"
          />
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
              <img src={photo} alt="Uploaded" className="max-w-full h-auto" />
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
            placeholder="Technology"
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
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
