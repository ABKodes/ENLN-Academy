import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CourseImage from "/public/course image.svg";
import courseData from "../../data/courses.json"
function CourseHero(){
  return (
    <section className="bg-secondary">
      <div className="mx-auto grid h-[70vh] max-w-screen-xl px-4 lg:grid-cols-12 lg:gap-8  xl:gap-0">
        {courseData.courses
          .filter((course) => course.id === 1)
          .map((course) => (
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="herotext mb-4 max-w-2xl font-extrabold leading-none tracking-tight dark:text-primary">
                {course.title}
              </h1>
              <p className="smalltext max-w-2xl font-light text-gray-500 dark:text-primary md:text-lg lg:text-xl">
                {course.description}
              </p>
              <div className="flex items-center space-x-1 py-2">
                <div className="flex items-center">
                  <p className="text ms-1 pt-1 font-semibold dark:text-primary">
                    {course.rating}
                  </p>
                </div>
                <div className="flex items-center">
                  {[...Array(Math.floor(course.rating))].map((_, index) => (
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
                <div className="flex items-center space-x-1">
                  <p className="text pt-1 font-medium dark:text-primary">
                    {course.ratingsCount}
                  </p>
                  <span className="text pt-1  text-gray-500 dark:text-slate-700">
                    {course.hours} total hours
                  </span>
                  <span className="text h-1  w-1 items-center justify-center rounded-full bg-slate-700 pt-1 text-gray-500 dark:text-slate-700"></span>
                  <span className="text pt-1  text-gray-500 dark:text-slate-700">
                    {course.difficulty}
                  </span>
                  <span className="text pt-1  text-gray-500 dark:text-primary">
                    1,304,722 students
                  </span>
                </div>
              </div>
              <div>
                <span className="text mr-1 font-medium dark:text-primary">
                  Created by
                </span>
                <Link
                  className="text group relative transform cursor-pointer font-bold leading-5 text-primary duration-300 dark:text-primary md:my-0"
                  to="/instructor"
                >
                  {course.instructor}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
                </Link>
              </div>
              <span href="#" className="heading mr-2">
                 {course.price} ETB
              </span>
              <Link to="addtocart">
                {" "}
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="buttontext btn btn-primary mx-2 mt-6 w-full rounded-lg border-none px-8 py-2 tracking-wider duration-300 lg:w-auto "
                >
                  Add to Cart
                </motion.a>
              </Link>
            </div>
          ))}
        <div className="image-full hidden lg:col-span-5 lg:mt-0 lg:flex">
          <img src={CourseImage} alt="mockup" />
        </div>
      </div>
    </section>
  );
}
export default CourseHero;
