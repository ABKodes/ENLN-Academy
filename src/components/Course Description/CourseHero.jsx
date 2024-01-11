function CourseHero() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8  xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="herotext mb-4 max-w-2xl font-extrabold leading-none tracking-tight dark:text-primary">
            The Complete Nutrition Course
          </h1>
          <p className="smalltext mb-6 max-w-2xl font-light text-gray-500 dark:text-primary md:text-lg lg:mb-8 lg:text-xl">
            Unlock the secrets to optimal health with our Complete Nutrition
            Course, designed for individuals seeking a holistic understanding of
            nutrition.
          </p>
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              <p className="text ms-1 pt-1 font-semibold dark:text-primary">
                4.95
              </p>
            </div>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="me-1 h-3 w-3 text-primary lg:h-6 lg:w-6"
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
              <p className="text pt-1 font-medium dark:text-primary">
                (110,568)
              </p>
            </div>
          </div>
          <a
            href="#"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
          >
            Get started
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div className="image-full hidden lg:col-span-5 lg:mt-0 lg:flex">
          <img src="/public/course image.svg" alt="mockup" />
        </div>
      </div>
    </section>
  );
}
export default CourseHero