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
    fetch(`${import.meta.env.VITE_SERVER_URL}/blog`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => setAllBlog(result));
  }, []);
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isModalOpen]);
  const openModal = (blog: any) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);

    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);

    document.body.style.overflow = 'auto';
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      closeModal();
    }
  };

  return (
    <div className="bg-slate-950">
      <div className="mx-auto container">
        <h1 className="pt-24 pb-5 gradienttexts text-center text-3xl md:text-6xl font-bold">
          Blogs
        </h1>
         <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4"></div>
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
      {isModalOpen && selectedBlog && (
        <div
          className="text-white fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={handleOutsideClick}
        >
          <div className="relative mx-auto bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 rounded-xl shadow-2xl overflow-hidden w-full max-w-md md:max-w-3xl" onClick={(e) => e.stopPropagation()}>

            <div className="absolute top-4 right-4 z-20">
                <button
                onClick={closeModal}
                className="bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border border-white/30"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col max-h-[85vh] overflow-auto">
              {/* Image Section */}
              <div className="w-full relative">
                <div className="relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent z-10"></div>                  <img
                    src={selectedBlog.imgUrl}
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover  object-center"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-1 rounded-full text-xs font-bold inline-block">
                      {selectedBlog.category}
                    </div>
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="flex-grow p-6 flex flex-col">
                <h1 className="text-white text-2xl font-bold mb-4 leading-tight">
                  {selectedBlog.title}
                </h1>
                  <div className="flex flex-wrap items-center gap-2 mb-6 text-white/80 border-b border-white/10 pb-4">
                  <div className="flex items-center">
                    <FaRegClock size="14" className="mr-1.5" />
                    <span className="text-sm">{moment(selectedBlog.time).fromNow()}</span>
                  </div>
                  <div className="w-1.5 h-1.5 bg-white/30 rounded-full hidden"></div>
                  <div className="text-sm">
                    Category: <span className="text-purple-300">{selectedBlog.category}</span>
                  </div>
                </div>
                  <div className="max-w-none flex-grow overflow-y-auto pr-1" style={{ maxHeight: "40vh" }}>
                  <p className="text-white/90 leading-relaxed whitespace-pre-line text-base">
                    {selectedBlog?.des}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                  <div className="text-xs text-white/60">
                    Published: {moment(selectedBlog.time).format('MMMM D, YYYY')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
