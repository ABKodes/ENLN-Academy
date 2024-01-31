const Support = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border-gray-20 mt-11  flex flex-col rounded-xl border-2">
        <p className="m-10 text-[35px] text-[#187498]">
          Need Help? We&apos;re Here for You!
        </p>
        <p className="m-10">
          Welcome to ENLN Academy, where learning meets convenience. If you have
          any questions or encounter any issues, our support team is ready to
          assist you.{" "}
        </p>

        <div className="mt-10 flex flex-col items-center justify-between px-32 md:flex-row">
          <div className="pb-10 lg:pb-52">
            <p className="mx-10 text-[30px] text-[#187498]">Send Us Email</p>
            <p className="mx-10 mb-10">enlnacadamy@gmail.com</p>

            <p className="mx-10 text-[30px] text-[#187498]">Call Us On</p>
            <p className="mx-10">+25144461636789</p>
          </div>
          <div>
            <form className="grid w-full gap-x-10 gap-y-4 py-2 pb-5">
              <div className="z-5 relative py-1">
                <input
                  type="text"
                  id="Name"
                  className="appearance-non peer relative block w-full min-w-[300px] border-2 border-b-2 border-gray-400 bg-transparent px-0 text-sm text-gray-200 focus:border-gray-600 focus:outline-none  focus:ring-0 dark:text-black dark:focus:border-gray-600"
                  placeholder=" "
                />
                <label
                  htmlFor="Name"
                  className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm  text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                >
                  Full Name<span className="text-red-500"> *</span>
                </label>
              </div>
              <div className="z-5 relative py-1">
                <input
                  type="text"
                  id="Email"
                  className="appearance-non peer relative block w-full min-w-[300px] border-2 border-b-2 border-gray-400 bg-transparent px-0 text-sm text-gray-200 focus:border-gray-600 focus:outline-none  focus:ring-0 dark:text-black dark:focus:border-gray-600"
                  placeholder=" "
                />
                <label
                  htmlFor="Email"
                  className="absolute top-2 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                >
                  Email<span className="text-red-500"> *</span>
                </label>
              </div>
              <div className="z-5 relative py-1">
                <input
                  type="text"
                  id="Subject"
                  className="appearance-non peer block w-full border-2 border-b-2 border-gray-300 bg-transparent px-0 text-sm text-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-400"
                  placeholder=" "
                />
                <label
                  htmlFor="Subject"
                  className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform pl-2 text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-400"
                >
                  Subject<span className="text-red-500"> *</span>
                </label>
              </div>
              <div className="flex flex-col py-2">
                <label className="py-2 text-sm uppercase">Message</label>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
