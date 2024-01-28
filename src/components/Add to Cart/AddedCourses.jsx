import React, { useState } from "react";

function AddedCourses() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Iphone 6S", quantity: 1, price: 400 },
    { id: 2, name: "Xiaomi Mi 20000mAh", quantity: 1, price: 40 },
    { id: 3, name: "Airpods", quantity: 1, price: 150 },
  ]);

  // Function to handle removing an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Function to handle increasing quantity of an item
  const increaseQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // Function to handle decreasing quantity of an item
  const decreaseQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="my-10 flex shadow-md">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="text-2xl font-semibold">Shopping Cart</h1>
            <h2 className="text-2xl font-semibold">{cartItems.length} Items</h2>
          </div>
          <div className="mb-5 mt-10 flex">
            <h3 className="w-2/5 text-xs font-semibold uppercase text-gray-600">
              Product Details
            </h3>
            <h3 className="w-1/5 text-center text-center text-xs font-semibold uppercase text-gray-600">
              Quantity
            </h3>
            <h3 className="w-1/5 text-center text-center text-xs font-semibold uppercase text-gray-600">
              Price
            </h3>
            <h3 className="w-1/5 text-center text-center text-xs font-semibold uppercase text-gray-600">
              Total
            </h3>
          </div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="-mx-8 flex items-center px-6 py-5 hover:bg-gray-100"
            >
              <div className="flex w-2/5">
                <div className="w-20">
                  <img
                    className="h-24"
                    src={`/public/course image.svg`}
                    alt=""
                  />
                </div>
                <div className="ml-4 flex flex-grow flex-col justify-between">
                  <span className="text-sm font-bold">{item.name}</span>
                  <span className="text-xs text-red-500">Apple</span>
                  <a
                    href="#"
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs font-semibold text-gray-500 hover:text-red-500"
                  >
                    Remove
                  </a>
                </div>
              </div>
              <div className="flex w-1/5 justify-center">
                <svg
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-3 fill-current text-gray-600"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <input
                  className="mx-2 w-8 border text-center"
                  type="text"
                  defaultValue={item.quantity}
                />
                <svg
                  onClick={() => increaseQuantity(item.id)}
                  className="w-3 fill-current text-gray-600"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="w-1/5 text-center text-sm font-semibold">
                ${item.price}.00
              </span>
              <span className="w-1/5 text-center text-sm font-semibold">
                ${item.price * item.quantity}.00
              </span>
            </div>
          ))}
          <a
            href="#"
            className="mt-10 flex text-sm font-semibold text-indigo-600"
          >
            <svg
              className="mr-2 w-4 fill-current text-indigo-600"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </a>
        </div>
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="border-b pb-8 text-2xl font-semibold">
            Order Summary
          </h1>
          <div className="mb-5 mt-10 flex justify-between">
            <span className="text-sm font-semibold uppercase">
              Items {cartItems.length}
            </span>
            <span className="text-sm font-semibold">
              $
              {cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0,
              )}
            </span>
          </div>
          <div>
            <label className="mb-3 inline-block text-sm font-medium uppercase">
              Shipping
            </label>
            <select className="block w-full p-2 text-sm text-gray-600">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="mb-3 inline-block text-sm font-semibold uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="w-full p-2 text-sm"
            />
          </div>
          <button className="bg-red-500 px-5 py-2 text-sm uppercase text-white hover:bg-red-600">
            Apply
          </button>
          <div className="mt-8 border-t">
            <div className="flex justify-between py-6 text-sm font-semibold uppercase">
              <span>Total cost</span>
              <span>
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0,
                ) + 10}
              </span>
            </div>
            <div className="mt-6 text-center">
              <button
                type="button"
                className="group inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out hover:bg-accent focus:shadow"
              >
                Checkout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4 h-6 w-6 transition-all group-hover:ml-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddedCourses;
