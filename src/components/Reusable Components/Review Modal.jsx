import React, {useState} from 'react'
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function ReviewModal() {
     const [rating, setRating] = useState(0);
     const [hover, setHover] = useState(0);
  return (
    <>
      <div className=" items-center space-y-3 rounded-lg border border-gray-200 bg-white     px-5 py-8 shadow md:max-w-xl md:flex-row">
        <div className="flex items-center space-x-3">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/RatingImage.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="heading  mb-2 tracking-tight ">
              Public Health
            </h5>
            <div className="flex">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                  <FaStar
                    key={index}
                    className="star"
                    color={
                      ratingValue <= (hover || rating) ? "#025464" : "#e4e5e9"
                    }
                    size={25}
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                );
              })}
            </div>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Tap the stars to rate.
            </p>
          </div>
        </div>
        <div className="flex flex-col px-5 py-2">
          <div>
            <textarea
              placeholder="Write your review(optional) "
              className="mt-2  block h-32  w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 placeholder-gray-400/70 dark:border-gray-600 dark:text-gray-800 dark:placeholder-gray-500 "
              defaultValue={""}
            />
          </div>
          <div className="navbar-start w-full space-x-2 py-3 lg:mr-7">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="btn btn-primary btn-sm w-1/4 lg:btn-md"
            >
              Send
            </motion.a>
            <p className="cardtext pt-5">
              By clicking Send button, I agree that my feedback may be viewed by
              the Coursera community, in compliance with the ENLN Terms of Use
              and My Profile privacy settings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewModal