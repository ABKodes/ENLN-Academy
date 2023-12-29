import React from 'react'

function CardDescription() {
  return (
    <>
      <div className="card w-1/4 bg-base-100 shadow-xl ">
        <div className="card-body ">
          <h2 className="text">The Complete Nutrition Course</h2>
          <div className="flex ">
            <span className="flex items-center space-x-2">
              {" "}
              <p className="cardtext text-gray-500 dark:text-gray-400">
                25 Total Hours
              </p>
              <p className="cardtext text-gray-500 dark:text-gray-400 ">
                . All levels
              </p>
              <span className="badge badge-primary badge-outline">
                VIRTUAL
              </span>
            </span>
          </div>
          <p className="cardtext">
            Unlock the secrets to optimal health with our Complete Nutrition
            Course, designed for individuals seeking a holistic understanding of
            nutrition.
          </p>
          <div className="cardtext flex items-center">
            <ul className="list-none">
              <li className="flex">
                <svg
                  className="mr-1 h-7 w-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="pt-1">
                  Gain practical knowledge to make informed dietary choices and
                  achieve your health goals.
                </span>
              </li>
              <li className="flex">
                <svg
                  className="mr-1 h-7 w-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="pt-1">
                  Explore the science of nutrition, covering essential
                  nutrients, dietary patterns, and personalized meal planning.
                </span>
              </li>
              <li className="flex">
                <svg
                  className="mr-1 h-7 w-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="pt-1">
                  Acquire the skills to decipher food labels, assess nutritional
                  needs, and implement sustainable lifestyle changes for
                  lifelong well-being.
                </span>
              </li>
            </ul>
          </div>
          <div className="card-actions  justify-end">
            <button className="btn btn-primary buttontext w-full">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDescription