const Study = () => {
  return (
    <div className="custom-gradient">
      <div className="mx-auto container pb-10">
        <h1 className="py-10 gradient-text text-center text-3xl md:text-6xl font-bold">
          Education
        </h1>

        <div className="flex items-center justify-center pb-10">
          <div className=" text-white p-4 rounded-lg w-full max-w-md transition duration-300 ease-in-out transform hover:shadow-lg hover:shadow-indigo-600/60    bg-gradient-to-r from-indigo-950 to-indigo-800">
          
            <div className="text-purple-400 text-lg font-bold">2022 - 2025</div>
            <div className="mt-1 text-gray-400">B.Sc in</div>
            <div className="mt- text-2xl font-bold">Computer Science and Engineering</div>
            
            <div className="mt-1 text-gray-400">Daffodil International University</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Study;
