const HorizontalCard = () => {
  return (
    <>
    <div className="flex w-4/6 overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
      <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage:
            "url('/public/course image.svg')",
        }}
      ></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold ">
          Backpack
        </h1>

        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
        </p>

        <div className="mt-2 flex items-center">
          <svg
            className="h-5 w-5 fill-current text-gray-700 dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="h-5 w-5 fill-current text-gray-700 dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="h-5 w-5 fill-current text-gray-700 dark:text-gray-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="h-5 w-5 fill-current text-gray-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>

          <svg
            className="h-5 w-5 fill-current text-gray-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <h1 className="text-lg font-bold  md:text-xl">
            $220
          </h1>
          <button className="transform rounded bg-gray-800 px-2 py-1 text-xs font-bold uppercase text-white transition-colors duration-300 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default HorizontalCard;
