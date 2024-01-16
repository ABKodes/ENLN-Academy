import React,{useState} from 'react'

function Lessonsoftheweek() {
     const [isPriceDropdownOpen, setPriceDropdownOpen] = useState(false);
      const togglePriceDropdown = () => {
        setPriceDropdownOpen((prev) => !prev);
      };
  return (
    <div>
      <div className="relative inline-block  w-11/12 border border-black text-left lg:ml-5 lg:w-[50%]">
        <div
          onClick={togglePriceDropdown}
          className=" text inline-flex w-full justify-between bg-white px-4  py-2 font-bold  focus:outline-none"
        >
          <span > Fundamentals of Nutrition</span>
          <svg
            className=" h-2.5 w-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>

        {isPriceDropdownOpen && (
          <div className="relative mt-2  w-full origin-top-right rounded-md  bg-white   ring-0">
            <div className="my-5 flex w-full justify-center space-x-3 border-b border-black py-3">
              {" "}
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height={24}
                viewBox="0 0 16 16"
                width={24}
                className="css-f2w3r7 inline space-x-2"
                id="cds-react-aria-58"
              >
                <g
                  clipPath="url(#cds-react-aria-58_0)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="currentColor"
                >
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                  <path d="M5.5 3.59L12.431 8 5.5 12.41V3.59zm1 1.82v5.18L10.569 8 6.5 5.41z" />
                </g>
                <defs>
                  <clipPath id="cds-react-aria-58_0">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
              <span className="smalltext flex space-x-1">
                <p className="font-bold hover:underline">12h 35m</p>
                <p> of videos left </p>
              </span>
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height={24}
                viewBox="0 0 16 16"
                width={24}
                className="css-f2w3r7"
                id="cds-react-aria-59"
              >
                <g
                  clipPath="url(#cds-react-aria-59_0)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="currentColor"
                >
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                  <path d="M3.5 5h3.518l.018.001a1.58 1.58 0 011.463 1.463l.001.018V12l-1 .03A1.1 1.1 0 006.484 11H3.5V5zm1 1v4H6.53a2.1 2.1 0 01.97.306V6.521A.58.58 0 006.98 6H4.5z" />
                  <path d="M8.982 5H12.5v6H9.517a1.1 1.1 0 00-1.018 1.03L7.5 12V6.5H8l-.499-.036a1.58 1.58 0 011.463-1.463L8.982 5zM8.5 6.52v3.786a2.1 2.1 0 01.97-.305L9.485 10H11.5V6H9.02a.58.58 0 00-.52.52z" />
                </g>
                <defs>
                  <clipPath id="cds-react-aria-59_0">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
              <span className="smalltext flex space-x-1">
                <p className="font-bold hover:underline">12h 35m</p>
                <p>reading left </p>
              </span>
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height={24}
                viewBox="0 0 16 16"
                width={24}
                data-testid="quiz-icon"
                id="cds-react-aria-60"
                className="css-0"
              >
                <g
                  clipPath="url(#cds-react-aria-60_0)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="currentColor"
                >
                  <path d="M4.39 3.61h7.22v8.78H4.39V3.61zm1 1v6.78h5.22V4.61H5.39z" />
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                  <path d="M6.5 6.29h3v1h-3v-1zM6.5 8.71h3v1h-3v-1z" />
                </g>
                <defs>
                  <clipPath id="cds-react-aria-60_0">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
              <span className="smalltext flex space-x-1">
                <p className="font-bold hover:underline">10</p>
                <p>assessments </p>
              </span>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lessonsoftheweek