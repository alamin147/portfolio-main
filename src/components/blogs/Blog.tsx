import { useEffect, useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa6";
const Blog = () => {
  const [allBlog, setAllBlog]: any = useState();
  useEffect(() => {
    fetch(`https://server-mocha-tau.vercel.app/blog`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      // body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setAllBlog(result);
      });
  }, []);

  return (
    <div className="bg-slate-950">
      <div className="mx-auto container">
        <h1 className="py-10 gradient-text text-center text-3xl md:text-6xl font-bold">
          Blogs
        </h1>

        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
            {/* card */}
            {allBlog?.map((singleBlog: any) => {
              return (
                <div
                  key={singleBlog?._id}
                  className="rounded overflow-hidden shadow-lg flex flex-col"
                >
                  <div className="relative">
                    <img className="w-full max-h-52" src={singleBlog?.imgUrl} />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

                    <div className="bg-gradient-to-r from-indigo-950 to-indigo-800 border-0 py-3 px-5 font-bold hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-950 transition duration-200 ease-in-out rounded-full text-xs absolute top-0 left-0 mt-3 ms-2 text-white">
                      {singleBlog?.category}
                    </div>
                  </div>
                  <div className="px-6 py-4 mb-auto bg-gradient-to-r from-indigo-950 to-indigo-800 text-white">
                    <p className="font-medium text-lg  inline-block mb-2">
                      {singleBlog?.title}
                    </p>
                    <p className="text-white text-sm">{singleBlog?.des}</p>
                  </div>

                  <div className="px-6 py-3 flex flex-row items-center justify-between text-white bg-gradient-to-r from-indigo-950 to-indigo-800">
                    <span className="py-1 text-xs font-regular  mr-1 flex flex-row items-center">
                      <FaRegClock size="12" />
                      <span className="ml-1">6 mins ago</span>
                    </span>

                    <span className="py-1 text-xs font-regular  mr-1 flex flex-row items-center ">
                      <BiMessageRoundedDetail size="15" />
                      <span className="ml-1">39 Comments</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
