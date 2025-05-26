import moment from "moment";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaBookOpen } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

const Blog = () => {
  // type tblog = {
  //   _id: string|null;
  //   imgUrl: string|null;
  //   title: string|null;
  //   category: string|null;
  //   time: Date|null;
  //   des: string|null;
  //   shortDes?: string|null;
  // };
  const [allBlog, setAllBlog]: any = useState([]);
  const [selectedBlog, setSelectedBlog]: any = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`https://admin-server-portfolio.vercel.app/blog`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => setAllBlog(result));
  }, []);

  const openModal = (blog: any) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="bg-slate-950">
      <div className="mx-auto container">
        <h1 className="pt-24 pb-5 gradienttexts text-center text-3xl md:text-6xl font-bold">
          Blogs
        </h1>
        <p className=" text-white text-center">
          Dive into the articles where I share knowledge, experiences, and the
          latest trends in the industry.
        </p>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
            <Fade cascade damping={0.1}>
              {allBlog?.map((singleBlog: any) => (
                <div
                  key={singleBlog?._id}
                  className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer max-w-sm"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={singleBlog?.imgUrl}
                      alt={singleBlog?.title}
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    <div className="bg-gradient-to-r from-indigo-950 to-indigo-800 border-0 py-2 px-4 font-bold rounded-full text-xs absolute top-3 left-3 text-white">
                      {singleBlog?.category}
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gradient-to-r from-indigo-950 to-indigo-800 text-white flex-grow">
                    <p className="font-medium text-lg mb-2">
                      {singleBlog?.title}
                    </p>
                    <p className="text-white text-sm">
                      {singleBlog?.shortDes?.length > 120
                        ? `${singleBlog.shortDes.substring(0, 120)}....`
                        : singleBlog?.shortDes}
                    </p>
                  </div>
                  <div className="px-6 py-3 flex flex-row items-center justify-between text-white bg-gradient-to-r from-indigo-950 to-indigo-800">
                    <span className="py-1 text-xs flex flex-row items-center">
                      <FaRegClock size="12" />
                      <span className="ml-1">
                        {moment(singleBlog?.time).fromNow()}
                      </span>
                    </span>
                    <span
                      onClick={() => openModal(singleBlog)}
                      className="py-1 text-xs flex flex-row items-center"
                    >
                      <FaBookOpen size="15" />
                      <span className="ml-1">Read More</span>
                    </span>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedBlog && (
        <div className="text-white fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative mx-auto bg-gradient-to-r from-indigo-950 to-indigo-800  rounded-lg shadow-lg overflow-hidden max-w-lg sm:max-w-2xl md:max-w-5xl lg:max-w-6xl p-4">
            <button
              onClick={closeModal}
              className="absolute -top-1 -right-1 text-red-500 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-xl transition duration-300"
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row gap-6  max-w-4xl">
              <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
                <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                  <img
                    src={selectedBlog.imgUrl}
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* <div className="relative h-52 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={selectedBlog?.imgUrl}
                    alt={selectedBlog?.title}
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </div> */}
              </div>
              <div className="flex-grow">
                <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
                  {selectedBlog.title}
                </h1>
                <div className="flex items-center gap-2 mb-4 text-white">
                  <p>Category: {selectedBlog.category}</p>
                  <FaRegClock size="16" />
                  <p>{moment(selectedBlog.time).fromNow()}</p>
                </div>
                <p className="mt-0 md:mt-8 text-white">{selectedBlog?.des}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
