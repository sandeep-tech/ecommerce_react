// import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CartProduct = () => {
  const cartData = useSelector((state) => state.cart);

  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {cartData.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border border-gray-200 rounded-md p-4"
            >
              <div className="">
                <img
                  src={product.image}
                  className="w-16 h-16 object-cover rounded-full mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-4">
                  {product.price}
                </span>
                <div className="flex items-center">
                  <button className="text-gray-600 focus:outline-none">
                    -
                  </button>
                  <span className="mx-2">{}</span>
                  <button className="text-gray-600 focus:outline-none">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
export default CartProduct;
