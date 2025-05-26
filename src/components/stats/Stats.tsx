const Stats = () => {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold">2 </dt>
          <dd className="font-light text-white dark:text-white">
            Years Learning experience
          </dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold">6</dt>
          <dd className="font-light text-gray-500 dark:text-white">
            Projects
          </dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold">2.5</dt>
          <dd className="font-light text-white dark:text-white">
          Years Problem solving experience
          </dd>
        </div>
      </dl>
    </div>
  );
};
export default Stats;
