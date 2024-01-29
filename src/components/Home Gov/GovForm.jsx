import fom from "../../assets/form.png";

const GovForm = () => {
  return (
    <div>
      <p className="pt-30 flex px-60 py-6 text-center text-2xl font-semibold text-accent">
        {" "}
        Get In Touch With Our Team to Learn More{" "}
      </p>

      <div></div>
      <div className="">
        <div className="">
          <div
            id="contact"
            className="max-w[1040px] m-auto grid grid-cols-1 items-center justify-center gap-10 p-4 px-20 py-16 pr-60 md:grid-cols-2 md:pl-20 lg:pl-40"
          >
            <form
              action=""
              method="POST"
              encType="multipart/form-data"
              className="rounded bg-[#ddeef1] p-8"
            >
              <div className="grid w-full gap-x-10 gap-y-6 py-2 lg:grid-cols-2">
                <div className="z-5 relative py-1">
                  <input
                    type="text"
                    id="Name"
                    className="peer relative block w-full appearance-none rounded-lg border-2 border-b-2 border-gray-300 bg-transparent px-0 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Name"
                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm  text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                  >
                    {" "}
                    First Name<span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="z-5 relative py-1">
                  <input
                    type="text"
                    id="Name"
                    className="peer block w-full appearance-none rounded-lg border-2 border-b-2 border-gray-300 bg-transparent px-0 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Name"
                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm  text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                  >
                    {" "}
                    Last Name<span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="z-5 relative py-1">
                  <input
                    type="text"
                    id="Name"
                    className="peer block w-full appearance-none rounded-lg border-2 border-b-2 border-gray-300 bg-transparent px-0 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Phone"
                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                  >
                    {" "}
                    Phone<span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="z-5 relative py-1">
                  <input
                    type="text"
                    id="Email"
                    className="peer block w-full appearance-none rounded-lg border-2 border-b-2 border-gray-300 bg-transparent px-0 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Email"
                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                  >
                    Work Email<span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="z-5 relative py-1">
                  <input
                    type="text"
                    id="Name"
                    className="peer block w-full appearance-none rounded-lg border-2 border-b-2 border-gray-300 bg-transparent px-0 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Name"
                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                  >
                    {" "}
                    Organization Name<span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="z-5 relative py-1">
                  <input
                    type="text"
                    id="Name"
                    className="peer block w-full appearance-none rounded-lg border-2 border-b-2 border-gray-300 bg-transparent px-0 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Name"
                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                  >
                    {" "}
                    Job Title<span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="z-5 relative py-1">
                  <input
                    type="text"
                    id="Name"
                    className="peer block w-full appearance-none rounded-lg border-2 border-b-2 border-gray-300 bg-transparent px-0 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Name"
                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                  >
                    {" "}
                    Number of People to train{" "}
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
                <div className="z-5 relative py-1">
                  <input
                    type="text"
                    id="Name"
                    className="peer block w-full appearance-none rounded-lg border-2 border-b-2 border-gray-300 bg-transparent px-0 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Name"
                    className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                  >
                    {" "}
                    Country
                  </label>
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="py-2 text-sm uppercase">
                  {" "}
                  What Describes your needs?
                </label>
                <textarea
                  className="flex rounded-lg border-2 border-secondary p-3 focus:text-gray-400 "
                  rows={2}
                  type="text"
                  name="Subject"
                ></textarea>
              </div>
              <button className="hover:bg-green mt-4 w-full rounded-lg bg-primary p-4 text-white hover:font-semibold hover:text-white">
                SUMBIT
              </button>
            </form>
            <div>
              <figure>
                <img src={fom} className="h-full w-full" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovForm;
