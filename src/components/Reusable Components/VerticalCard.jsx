import { useState } from "react";
import { Link } from "react-router-dom";
import CourseImage from "/public/course image.svg";
import coursesData from "../../data/courses.json";
import { useDispatch } from "react-redux";
import { add } from "../../features/cartSlice";

function VerticalCard() {
 
  const dispatch = useDispatch();
  const addToCart = (course) => {
    // dispatch an add action
    dispatch(add(course));
  };
  const handleClick = (course) => {};
  return (
    <>
      <div className="grid gap-4 gid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {coursesData.courses.map((course) => (
          <div key={course.id} className="grid grid-rows-3 gap-4">
            <div
              className="group container relative mx-auto flex h-[250px] w-[250px] cursor-pointer items-center justify-center gap-3 rounded-lg border border-secondary sm:h-[317px] sm:w-[317px]"
              onClick={() => handleClick(course)}
            >
              <Link to="/coursedescription">
                <div className="max-w-sm rounded-lg border-gray-200">
                  <a href="#">
                    <figure>
                      <img
                        src={CourseImage}
                        alt={course.title}
                        className="h-52 w-full object-cover p-4"
                      />
                    </figure>
                  </a>
                  <div className="px-5">
                    <a href="#">
                      <h5 className="text mb-2 font-bold dark:text-left  ">
                        {course.title}
                      </h5>
                    </a>
                    <p className="ratingcardtext mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {course.instructor}
                    </p>
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        <p className="ratingcardtext pt-1 font-semibold">
                          {course.rating}
                        </p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(Math.floor(course.rating))].map(
                          (_, index) => (
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
                          ),
                        )}
                      </div>
                      <div className="flex items-center">
                        <p className="ratingcardtext pt-1 font-medium">
                          {course.ratingsCount}
                        </p>
                      </div>
                    </div>
                    <p className="phonetext my-3  dark:font-bold">
                      Birr {course.price}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="hover-card invisible absolute right-0 z-10 -mx-2 h-auto w-full translate-x-full transform rounded-lg border border-secondary bg-white p-4 text-gray-900 opacity-0 transition-opacity duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                <div className="mb-auto">
                  <h5 className="text mb-2 font-bold dark:text-left">
                    {course.title}
                  </h5>
                  <div className="flex items-center space-x-1 text-justify">
                    <span className="cardtext text-gray-500 dark:text-gray-400">
                      {course.hours} total hours
                    </span>
                    <span className="cardtext h-1 w-1 items-center justify-center rounded-full bg-gray-300 text-gray-500 dark:text-gray-400"></span>
                    <span className="cardtext text-gray-500 dark:text-gray-400">
                      {course.difficulty}
                    </span>
                    <span className="ratingcardtext badge badge-primary badge-outline badge-sm uppercase">
                      {course.type}
                    </span>
                  </div>
                </div>
                <div className="gap-1 text-xs sm:gap-2 sm:text-base">
                  <p className="cardtext">{course.description}</p>
                  <ul className="cardtext space-y-1 text-left">
                    {course.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex space-x-3 rtl:space-x-reverse"
                      >
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
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-actions justify-end">
                  <button
                    className="buttontext btn btn-primary w-full"
                    onClick={() => addToCart(course)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default VerticalCard;
