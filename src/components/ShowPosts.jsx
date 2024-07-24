const ShowPosts = () => {
  const post = JSON.parse(localStorage.getItem("selectedPost"));
  console.log(post);
  return (
    <div className="flex flex-col flex-wrap items-center bg-white">
      <div className="md:w-1/2 sm:p-12 p-6 sm:my-6 my-3 ">
        <div className=" w-full">
          <h1 className="sm:text-4xl text-xl sm:mb-8 mb-6 ">{post.title}</h1>
          <div className="flex flex-row sm:justify-start justify-between text-black text-md items-center gap-8 mb-8">
            <div className="flex flex-row items-center gap-2">
              <img
                src={post.authorImage}
                alt="author image"
                className="w-10 h-10 rounded-full "
              />
              <p>{post.authorName}</p>
            </div>
            <p>{post.date}</p>
          </div>
          <div className="mb-4">
            <img
              src={post.imageUrl}
              alt="blog-img"
              className="rounded-lg w-[800px] h-[400px] object-cover"
            />
          </div>
          <div className="">
            <div
              dangerouslySetInnerHTML={{ __html: post.description }}
              className="[&>h1]:text-4xl [&>h2]:text-2xl [&>h3]:text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPosts;
