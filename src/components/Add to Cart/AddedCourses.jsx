import { useState } from "react";
import { Link } from "react-router-dom";
import CourseImage from "/public/course image.svg"
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../features/cartSlice";

function AddedCourses() {
  const courses = useSelector((state) => state.courses);

  const dispatch = useDispatch();
  // Function to handle removing an item from the cart
  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  // Function to calculate the total cost of items in the cart
  const calculateTotalCost = () => {
    let totalCost = 0;
    courses.forEach((item) => {
      totalCost += item.price;
    });
    return totalCost;
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="mx-auto my-10 flex lg:flex-row flex-col w-11/12">
        <div className="lg:w-3/4 w-full bg-white lg:px-10  py-10">
          <div className="flex justify-between border-b pb-8 w-full">
            <h1 className="heading font-semibold">Add to Cart</h1>
            <h2 className="text font-semibold dark:text-2xl">
              {courses.length} Items
            </h2>
          </div>
          <div className="justify-items mb-5 mt-10 flex">
            <h3 className="lg:w-2/5 w-full text-lg font-semibold uppercase text-gray-600">
              Product Details
            </h3>
            <h3 className="lg:w-1/5 w-full text-center text-lg font-semibold uppercase text-gray-600">
              Price
            </h3>
          </div>
          {courses.map((item) => (
            <div key={item.id} className="-mx-8 flex items-center px-6 py-5">
              <div className="flex w-2/5">
                <div className="w-24">
                  <img className="h-24" src={CourseImage} alt="" />
                </div>
                <div className="ml-4 flex flex-grow flex-col space-y-1">
                  <span className="text-sm font-bold">{item.title}</span>
                  <span className="text-xs">{item.instructor}</span>
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center">
                      <p className="ratingcardtext pt-1 font-semibold">
                        {item.rating}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(Math.floor(item.rating))].map((_, index) => (
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
                      <p className="ratingcardtext pt-1 font-medium">
                        ({item.ratingsCount})
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <span className="lg:w-1/5 w-3/5 text-center text-sm font-semibold">
                 {item.price}.00 ETB
              </span>
              <div className="flex lg:w-1/5 justify-end">
                <button
                  className="group relative transform cursor-pointer leading-5 text-primary duration-300 hover:text-red-500 dark:text-primary md:my-0"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-red-500 underline transition-transform group-hover:scale-x-100"></span>
                </button>
              </div>
            </div>
          ))}
          <Link to="/individualhomepage">
            <button className="group relative flex transform cursor-pointer leading-5 text-primary duration-300 hover:text-primary dark:text-primary md:my-0">
              <svg
                className="mr-2 w-4 fill-current text-primary"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary underline transition-transform group-hover:scale-x-100"></span>
            </button>
          </Link>
        </div>
        <div id="summary" className="lg:w-1/4 w-full px-8 py-10">
          <div className="mt-8">
            <div className="py- text-sm font-semibold">
              <span className="uppercase">Total cost</span>
              <p className="subheading mt-6 dark:text-4xl">
                 {calculateTotalCost()} ETB
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link to="/checkout">
                {" "}
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out hover:bg-accent focus:shadow"
                >
                  Checkout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-4 h-6 w-6 transition-all group-hover:ml-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddedCourses;
