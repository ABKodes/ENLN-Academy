import React, {useState} from 'react'
import CardDescription from './Card Description';

function VerticalCard() {
     const [isHovered, setHovered] = useState(false);
  return (
    <>
      <div className={`isHovered ? "flex flex-col lg:flex-row ":""`}>
        <div
          className="group card card-compact relative m-10 w-3/4 bg-base-100  shadow-xl lg:w-1/4"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <figure>
            <img
              src="/public/course image.svg"
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="text phonetext">The Complete Nutrition Course</h2>
            <p className="lg:cardtext phonecardtext  text-gray-500 dark:text-gray-400">
              Bekele Sewasew
            </p>
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                <p className="lg:ratingcardtext phoneratingcardtext ms-1 pt-1 font-semibold">
                  4.95
                </p>
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
                <p className="lg:ratingcardtext phoneratingcardtext pt-1 font-medium">
                  (110,568)
                </p>
              </div>
            </div>
            <h2 className="lg:text phonetext font-bold">Birr 1,500</h2>
          </div>
        </div>
        {isHovered && (
          <div className="">
            <CardDescription />
          </div>
        )}
      </div>
    </>
  );
}

export default VerticalCard