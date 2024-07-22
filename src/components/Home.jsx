const Home = () => {
  const handleClick = () => {
    window.location.href = "/post";
  };
  const posts = [
    {
      imageUrl: "/src/assets/mountain.avif",
      authorImage: "https://avatars.githubusercontent.com/u/109952444?v=4",
      authorName: "Tracey Wilson",
      date: "August 20, 2022",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
    },
    {
      imageUrl: "/src/assets/mountain.avif",
      authorImage: "https://avatars.githubusercontent.com/u/109952444?v=4",
      authorName: "Jason Francisco",
      date: "August 20, 2022",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
    },
    {
      imageUrl: "/src/assets/mountain.avif",
      authorImage: "https://avatars.githubusercontent.com/u/109952444?v=4",
      authorName: "Jason Francisco",
      date: "August 20, 2022",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
    },
    {
      imageUrl: "/src/assets/mountain.avif",
      authorImage: "https://avatars.githubusercontent.com/u/109952444?v=4",
      authorName: "Jason Francisco",
      date: "August 20, 2022",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
    },
    {
      imageUrl: "/src/assets/mountain.avif",
      authorImage: "https://avatars.githubusercontent.com/u/109952444?v=4",
      authorName: "Jason Francisco",
      date: "August 20, 2022",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
    },

    {
      imageUrl: "/src/assets/mountain.avif",
      authorImage: "https://avatars.githubusercontent.com/u/109952444?v=4",
      authorName: "Jason Francisco",
      date: "August 20, 2022",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
    },
    {
      imageUrl: "/src/assets/mountain.avif",
      authorImage: "https://avatars.githubusercontent.com/u/109952444?v=4",
      authorName: "Jason Francisco",
      date: "August 20, 2022",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
    },
    {
      imageUrl: "/src/assets/mountain.avif",
      authorImage: "https://avatars.githubusercontent.com/u/109952444?v=4",
      authorName: "Jason Francisco",

      date: "August 20, 2022",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
    },
    {
      imageUrl: "/src/assets/mountain.avif",
      authorImage: "https://avatars.githubusercontent.com/u/109952444?v=4",
      authorName: "Jason Francisco",
      date: "August 20, 2022",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
    },
    // Add more posts here
  ];
  return (
    <div>
      <h1
        className="text-3xl font-bold px-4 py-2 m-2 cursor-pointer "
        onClick={() => (window.location.href = "/")}
      >
        Blog Posts
      </h1>
      <div className=" ">
        <div className="px-2">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
            {posts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col flex-1 flex-wrap p-4 my-4 mx-2 border rounded-xl border-gray-600 object-cover h-auto cursor-pointer"
                onClick={handleClick}
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
                  <h2 className=" font-bold text-xl mb-2">{post.title}</h2>
                  <div className="flex flex-row justify-between text-gray-500 text-md items-center">
                    <img
                      src={post.authorImage}
                      alt="author-image"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <p className="  ">{post.authorName}</p>
                    <p>{post.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
