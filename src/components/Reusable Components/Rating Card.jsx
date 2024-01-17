function Card({ imageSrc, name, content, timestamp }) {
  return (
    <div className="w-3/12 rounded-2xl bg-white px-10 py-8 shadow-lg transition duration-500 hover:shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="mt-4 flex items-center space-x-4 py-3">
          <div>
            <img className="h-24 w-24 rounded-full" src={imageSrc} alt="" />
          </div>
          <div className="text-sm font-semibold">
            <p className="text dark:font-bold">{name}</p>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((index) => (
                <svg
                  key={index}
                  className="ml-1 h-3 w-3 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <span className="text flex items-center justify-center font-normal dark:text-left dark:text-gray-600">
                {" "}
                {timestamp}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text mt-4 ">{content}</p>
      </div>
    </div>
  );
}

function RatingCard() {
  return (
    <div className="flex space-x-2 space-y-2">
      {[1].map((index) => (
        <Card
          key={index}
          imageSrc="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          name="John Lucas"
          content="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
          timestamp="5 min ago"
        />
      ))}
    </div>
  );
}

export default RatingCard;
