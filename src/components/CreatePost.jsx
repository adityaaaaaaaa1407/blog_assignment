/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [category, setCategory] = useState("");

  const handlePhotoUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
          <textarea
            id="description"
            className="w-full p-10 bg-gray-700 text-white rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            onClick={() => console.log("Cancel")}
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
