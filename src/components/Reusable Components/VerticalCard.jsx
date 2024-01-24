function VerticalCard() {
  return (
    <div className="flex gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="grid grid-rows-3 gap-4">
        <div className="group container relative mx-auto flex h-[250px] w-[250px] cursor-pointer items-center justify-center gap-3 shadow-lg sm:h-[317px] sm:w-[317px]">
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700">
            <a href="#">
              <figure>
                <img
                  src="/public/course image.svg"
                  className="h-52 w-full object-cover p-3"
                />
              </figure>
            </a>
            <div className="px-5">
              <a href="#">
                <h5 className="text mb-2 font-bold dark:text-left  ">
                  The Complete Nutrition Course
                </h5>
              </a>
              <p className="ratingcardtext mb-3 font-normal text-gray-700 dark:text-gray-400">
                Bekele Sewasew
              </p>
              <div className="flex items-center space-x-1">
                <div className="flex items-center">
                  <p className="ratingcardtext pt-1 font-semibold">4.95</p>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="me-1 h-3 w-3 text-primary lg:h-4 lg:w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center">
                  <p className="ratingcardtext pt-1 font-medium">(110,568)</p>
                </div>
              </div>
              <p className="phonetext my-3  dark:font-bold">Birr 1,500</p>
            </div>
          </div>

          <div className="hover-card invisible absolute right-0 z-10 -mx-2 h-auto w-full translate-x-full transform rounded-lg border border-primary bg-white p-4 text-gray-900 opacity-0 transition-opacity duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
            <div className="mb-auto">
              <h5 className="text mb-2 font-bold dark:text-left">
                The Complete Nutrition Course
              </h5>
              <div className="flex items-center space-x-1 text-justify">
                <span className="cardtext text-gray-500 dark:text-gray-400">
                  25 total hours
                </span>
                <span className="cardtext h-1 w-1 items-center justify-center rounded-full bg-gray-300 text-gray-500 dark:text-gray-400"></span>
                <span className="cardtext text-gray-500 dark:text-gray-400">
                  All levels
                </span>
                <span className="ratingcardtext badge badge-primary badge-outline badge-sm uppercase">
                  virtual
                </span>
              </div>
            </div>
            <div className="gap-1 text-xs sm:gap-2 sm:text-base">
              <p className="cardtext">
                Unlock optimal health with our Complete Nutrition Course for a
                holistic understanding of nutrition.
              </p>
              <ul className="cardtext space-y-1 text-left">
                <li className="flex space-x-3 rtl:space-x-reverse">
                  <svg
                    className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Acquire dietary insights for healthier choices and goal
                    achievement.
                  </span>
                </li>
                <li className="flex space-x-3 text-justify rtl:space-x-reverse">
                  <svg
                    className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="text-justify">
                    Explore nutrition science, including essential nutrients,
                    diets, and personalized meal planning.
                  </span>
                </li>
                <li className="flex space-x-3 rtl:space-x-reverse">
                  <svg
                    className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Learn to read food labels, understand nutritional needs, and
                    adopt sustainable habits for lifelong well-being.
                  </span>
                </li>
              </ul>
            </div>
            <div className="card-actions justify-end">
              <button className="buttontext btn btn-primary w-full">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VerticalCard;
