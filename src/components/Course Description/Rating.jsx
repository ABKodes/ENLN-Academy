import UpcomingEventImage from "/public/upcoming event.svg"
const Rating = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src= {UpcomingEventImage}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-dmserif text-3xl font-bold text-white">
              March
            </h1>
            <h1 className="font-dmserif text-3xl font-bold text-white">31</h1>
          </div>

          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolore adipisci placeat.
          </p>
          <button className="font-com rounded-full bg-neutral-900 px-3.5 py-2 text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rating;
