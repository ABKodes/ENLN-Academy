import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
function RatingCard() {
  return (
    <>
      <div className="w-7/12">
        {/* Title */}
        <div className="">
          <h2 className="heading md:leading-tight">Rating</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4  md:p-6">
            <div className="flex items-center gap-x-4">
              <img
                className="h-20 w-20 rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="grow">
                <h3 className="font-medium text-gray-800">Bekele Sewasew</h3>
                <div className="flex items-center">
                  <svg
                    className="me-1 h-4 w-4 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="me-1 h-4 w-4 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="me-1 h-4 w-4 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="me-1 h-4 w-4 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="me-1 h-4 w-4 text-secondary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    15
                  </p>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    days
                  </p>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    ago
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-gray-500">
              John is a software engineer with over 10 years of experience in
              developing web and mobile applications. He is skilled in
              JavaScript, React, and Node.js. John is a software engineer with
              over 10 years of experience in developing web and mobile
              applications. He is skilled in JavaScript, React, and Node.js.
            </p>
            {/* End Social Brands */}
          </div>
          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4  md:p-6">
            <div className="flex items-center gap-x-4">
              <img
                className="h-20 w-20 rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                alt="Image Description"
              />
              <div className="grow">
                <h3 className="font-medium text-gray-800">Bekele Sewasew</h3>
                <div className="flex items-center">
                  <svg
                    className="me-1 h-4 w-4 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="me-1 h-4 w-4 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="me-1 h-4 w-4 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="me-1 h-4 w-4 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="me-1 h-4 w-4 text-secondary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    15
                  </p>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    days
                  </p>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    ago
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-gray-500">
              John is a software engineer with over 10 years of experience in
              developing web and mobile applications. He is skilled in
              JavaScript, React, and Node.js. John is a software engineer with
              over 10 years of experience in developing web and mobile
              applications. He is skilled in JavaScript, React, and Node.js.
            </p>
            {/* End Social Brands */}
          </div>
        </div>
        {/* End Grid */}
      </div>
      <>
        <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
  <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
    {/* Card slider */}
    <section className="px-12">
      <div className="max-w-lg mx-auto relative">
        <input
          id="article-01"
          type="radio"
          name="slider"
          className="sr-only peer/01"
        />
        <input
          id="article-02"
          type="radio"
          name="slider"
          className="sr-only peer/02"
        />
        <input
          id="article-03"
          type="radio"
          name="slider"
          className="sr-only peer/03"
          defaultChecked=""
        />
        <input
          id="article-04"
          type="radio"
          name="slider"
          className="sr-only peer/04"
        />
        <input
          id="article-05"
          type="radio"
          name="slider"
          className="sr-only peer/05"
        />
        <div
          className="
                  absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  peer-focus-visible/01:[&_article]:ring
                  peer-focus-visible/01:[&_article]:ring-indigo-300
                  peer-checked/01:relative
                  peer-checked/01:z-50
                  peer-checked/01:translate-x-0
                  peer-checked/01:scale-100
                  peer-checked/01:[&>label]:pointer-events-none
                  peer-checked/02:-translate-x-20
                  peer-checked/02:scale-[83.75%]
                  peer-checked/02:z-40
                  peer-checked/03:-translate-x-40
                  peer-checked/03:z-30
                  peer-checked/04:-translate-x-40                    
                  peer-checked/04:opacity-0
                  peer-checked/05:-translate-x-40
              "
        >
          <label className="absolute inset-0" htmlFor="article-01">
            <span className="sr-only">Focus on the big picture</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <img
                className="inline-flex rounded-full shadow mb-3"
                src="./icon.svg"
                width={44}
                height={44}
                alt="Icon"
              />
              <h1 className="text-xl font-bold text-slate-900">
                Focus on the big picture
              </h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text, and a search for more
                variants will uncover many web sites still in their infancy.
              </p>
              <p>
                All the generators tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
              </p>
            </div>
            <footer className="text-right">
              <a
                className="text-sm font-medium text-indigo-500 hover:underline"
                href="#0"
              >
                Read more -&gt;
              </a>
            </footer>
          </article>
        </div>
        <div
          className="
                  absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  peer-focus-visible/02:[&_article]:ring
                  peer-focus-visible/02:[&_article]:ring-indigo-300                        
                  peer-checked/01:translate-x-20
                  peer-checked/01:scale-[83.75%]
                  peer-checked/01:z-40
                  peer-checked/02:relative
                  peer-checked/02:z-50
                  peer-checked/02:translate-x-0
                  peer-checked/02:scale-100
                  peer-checked/02:[&>label]:pointer-events-none
                  peer-checked/03:-translate-x-20
                  peer-checked/03:scale-[83.75%]
                  peer-checked/03:z-40
                  peer-checked/04:-translate-x-40
                  peer-checked/04:z-30
                  peer-checked/05:-translate-x-40 
                  peer-checked/05:opacity-0
              "
        >
          <label className="absolute inset-0" htmlFor="article-02">
            <span className="sr-only">Focus on the big picture</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <img
                className="inline-flex rounded-full shadow mb-3"
                src="./icon.svg"
                width={44}
                height={44}
                alt="Icon"
              />
              <h1 className="text-xl font-bold text-slate-900">
                Focus on the big picture
              </h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text, and a search for more
                variants will uncover many web sites still in their infancy.
              </p>
              <p>
                All the generators tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
              </p>
            </div>
            <footer className="text-right">
              <a
                className="text-sm font-medium text-indigo-500 hover:underline"
                href="#0"
              >
                Read more -&gt;
              </a>
            </footer>
          </article>
        </div>
        <div
          className="
                  absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  peer-focus-visible/03:[&_article]:ring
                  peer-focus-visible/03:[&_article]:ring-indigo-300                          
                  peer-checked/01:translate-x-40
                  peer-checked/01:z-30
                  peer-checked/02:translate-x-20
                  peer-checked/02:scale-[83.75%]
                  peer-checked/02:z-40
                  peer-checked/03:relative
                  peer-checked/03:z-50
                  peer-checked/03:translate-x-0
                  peer-checked/03:scale-100
                  peer-checked/03:[&>label]:pointer-events-none
                  peer-checked/04:-translate-x-20
                  peer-checked/04:scale-[83.75%]
                  peer-checked/04:z-40
                  peer-checked/05:-translate-x-40
                  peer-checked/05:z-30                  
              "
        >
          <label className="absolute inset-0" htmlFor="article-03">
            <span className="sr-only">Focus on the big picture</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <img
                className="inline-flex rounded-full shadow mb-3"
                src="./icon.svg"
                width={44}
                height={44}
                alt="Icon"
              />
              <h1 className="text-xl font-bold text-slate-900">
                Focus on the big picture
              </h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text, and a search for more
                variants will uncover many web sites still in their infancy.
              </p>
              <p>
                All the generators tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
              </p>
            </div>
            <footer className="text-right">
              <a
                className="text-sm font-medium text-indigo-500 hover:underline"
                href="#0"
              >
                Read more -&gt;
              </a>
            </footer>
          </article>
        </div>
        <div
          className="
                  absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  peer-focus-visible/04:[&_article]:ring
                  peer-focus-visible/04:[&_article]:ring-indigo-300                          
    
                  peer-checked/01:translate-x-40 
                  peer-checked/01:opacity-0
                  
                  peer-checked/02:translate-x-40
                  peer-checked/02:z-30
                  
                  peer-checked/03:translate-x-20
                  peer-checked/03:scale-[83.75%]
                  peer-checked/03:z-40
    
                  peer-checked/04:relative
                  peer-checked/04:z-50
                  peer-checked/04:translate-x-0
                  peer-checked/04:scale-100
                  peer-checked/04:[&>label]:pointer-events-none
                  
                  peer-checked/05:-translate-x-20
                  peer-checked/05:scale-[83.75%]
                  peer-checked/05:z-40
              "
        >
          <label className="absolute inset-0" htmlFor="article-04">
            <span className="sr-only">Focus on the big picture</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <img
                className="inline-flex rounded-full shadow mb-3"
                src="./icon.svg"
                width={44}
                height={44}
                alt="Icon"
              />
              <h1 className="text-xl font-bold text-slate-900">
                Focus on the big picture
              </h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text, and a search for more
                variants will uncover many web sites still in their infancy.
              </p>
              <p>
                All the generators tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
              </p>
            </div>
            <footer className="text-right">
              <a
                className="text-sm font-medium text-indigo-500 hover:underline"
                href="#0"
              >
                Read more -&gt;
              </a>
            </footer>
          </article>
        </div>
        <div
          className="
                  absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                  peer-focus-visible/05:[&_article]:ring
                  peer-focus-visible/05:[&_article]:ring-indigo-300                          
                  peer-checked/01:translate-x-40 
                  peer-checked/02:translate-x-40 
                  peer-checked/02:opacity-0
                  peer-checked/03:translate-x-40
                  peer-checked/03:z-30
                  peer-checked/04:translate-x-20
                  peer-checked/04:scale-[83.75%]
                  peer-checked/04:z-40
                  peer-checked/05:relative
                  peer-checked/05:z-50
                  peer-checked/05:translate-x-0
                  peer-checked/05:scale-100
                  peer-checked/05:[&>label]:pointer-events-none
              "
        >
          <label className="absolute inset-0" htmlFor="article-05">
            <span className="sr-only">Focus on the big picture</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <img
                className="inline-flex rounded-full shadow mb-3"
                src="./icon.svg"
                width={44}
                height={44}
                alt="Icon"
              />
              <h1 className="text-xl font-bold text-slate-900">
                Focus on the big picture
              </h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text, and a search for more
                variants will uncover many web sites still in their infancy.
              </p>
              <p>
                All the generators tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
              </p>
            </div>
            <footer className="text-right">
              <a
                className="text-sm font-medium text-indigo-500 hover:underline"
                href="#0"
              >
                Read more -&gt;
              </a>
            </footer>
          </article>
        </div>
      </div>
    </section>
    {/* End: Card slider */}
  </div>
</main>

      </>
    </>
  );
}

export default RatingCard;
