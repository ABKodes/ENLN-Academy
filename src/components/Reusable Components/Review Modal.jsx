import React, {useState} from 'react'
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { InputTextarea } from "primereact/inputtextarea";

function ReviewModal() {
     const [rating, setRating] = useState(0);
     const [hover, setHover] = useState(0);
      const [value, setValue] = useState('');
  return (
    <>
      <div className=" items-center  space-y-3 rounded-lg border border-gray-200 bg-white px-5 py-8 md:max-w-xl md:flex-row lg:w-5/12 ">
        <div className="items-center space-x-3 lg:flex">
          <img
            className="h-72 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/RatingImage.jpg"
            alt=""
          />
          <div className="flex flex-col items-center justify-between p-4 leading-normal lg:flex-col">
            <h5 className="heading  mb-2 tracking-tight ">Public Health</h5>
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
        <div className="flex flex-col  py-2">
          <div className="justify-content-center card flex">
            <InputTextarea
              autoResize
              value={value}
              onChange={(e) => setValue(e.target.value)}
              rows={5}
              cols={30}
              className='focus:ring-primary focus:outline-none rounded-lg'
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
        