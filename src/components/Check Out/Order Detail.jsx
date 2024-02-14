import CourseImage from "/public/course image.svg"
import { useSelector } from "react-redux";
import teleBirr from "/public/telebirr.svg"
import chapa from "/public/chapa.svg"
import { Link } from "react-router-dom";
function OrderDetail() {
  const courses = useSelector((state) => state.courses);
  // Function to calculate the total cost of items in the cart
  const calculateTotalCost = () => {
    let totalCost = 0;
    courses.forEach((item) => {
      totalCost += item.price;
    });
    return totalCost;
  };

  return (
    <>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32"></div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Detail</p>
          <p className="text-gray-400">
            Check your items and select a suitable payment option.
          </p>
          {courses.map((item) => (
            <div
              key={item.id}
              className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6"
            >
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img
                  className="m-2 h-28 w-28 rounded-md  object-cover object-center"
                  src={CourseImage}
                  alt=""
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.title}</span>
                  <span className="float-right text-gray-400">
                    {item.instructor}
                  </span>
                  <p className="text-lg font-bold">{item.price} ETB</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <div className="mt-6 flex items-center justify-between border-b-2 p-3">
              <p className="text-xl font-medium text-gray-900">Courses</p>
              <p className="justify-center text-xl font-semibold text-gray-900">
                {courses.length}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between border-b-2 p-3">
              <p className="text-xl font-medium text-gray-900">Sub Total</p>
              <p className="text-xl font-semibold text-gray-900">
                {calculateTotalCost()} ETB
              </p>
            </div>
          </div>
          <div className="m-3 flex-col items-center justify-center space-x-4 md:flex md:flex-row">
            <Link>
              <img src={chapa} alt="Chapa" className=" h-16 w-36 border p-3" />
            </Link>
            <Link>
              {" "}
              <img src={teleBirr} alt="Tele Birr" className="w-36 border " />
            </Link>
          </div>
          <button className="mb-8 mt-4 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderDetail