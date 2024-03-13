import React from "react";

const Cart = ({ cartDetails }) => {
  return (
    <>
      {cartDetails.map((product) => (
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
            <span className="text-lg font-semibold mr-4">{product.price}</span>
            <div className="flex items-center">
              <button className="text-gray-600 focus:outline-none">-</button>
              <span className="mx-2">{product.qty}</span>
              <button className="text-gray-600 focus:outline-none">+</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
