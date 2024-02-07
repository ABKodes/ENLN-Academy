import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import CourseInstructor from "/public/course instructor.avif"
function Instructor() {
  return (
    <div className=" flex w-7/12 flex-col rounded-xl  bg-white p-4  md:p-6">
      <div className="flex items-center gap-x-4">
        <img
          className="h-20 w-20 rounded-full"
          src={CourseInstructor}
          alt="Image Description"
        />
        <div className="grow">
          <h3 className="text">Bekele Sewasew</h3>
          <p className="cardtext uppercase dark:text-gray-500">Founder / CEO</p>
          <div className="mt-3 space-x-1">
            <a
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-secondary text-sm font-semibold text-secondary hover:bg-secondary hover:text-primary disabled:pointer-events-none disabled:opacity-50 "
              href="#"
            >
              <FaXTwitter />
            </a>
            <a
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-secondary text-sm font-semibold text-secondary hover:bg-secondary hover:text-primary disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              <FaLinkedinIn />
            </a>

            <a
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-secondary text-sm font-semibold text-secondary hover:bg-secondary hover:text-primary disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <p className="text mt-3">
        John is a software engineer with over 10 years of experience in
        developing web and mobile applications. He is skilled in JavaScript,
        React, and Node.js. John is a software engineer with over 10 years of
        experience in developing web and mobile applications. He is skilled in
        JavaScript, React, and Node.js.
      </p>
      {/* End Social Brands */}
    </div>
  );
}

export default Instructor;
