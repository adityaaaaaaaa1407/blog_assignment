/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");

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
        className="bg-gray-800 p-8 rounded-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-white text-2xl mb-4">Create Post</h2>

        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="caption">
            Caption
          </label>
          <textarea
            id="caption"
            className="w-full p-2 bg-gray-700 text-white rounded"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
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

        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="location">
            Add Location
          </label>
          <input
            id="location"
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="tags">
            Add Tags (separated by comma ",")
          </label>
          <input
            id="tags"
            type="text"
            className="w-full p-2 bg-gray-700 text-white rounded"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-600 text-white px-4 py-2 rounded"
            onClick={() => console.log("Cancel")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
