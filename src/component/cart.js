import React from "react";

const Cart = ({
  cartDetails,
  deleteCartItem,
  deleteAll,
  incrementBtn,
  decrementBtn,
}) => {
  return (
    <>
      <button className="p-2 bg-red-300 rounded-lg mb-1" onClick={deleteAll}>
        Delete All
      </button>
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
            <div className="bg-yellow-300 w-20 pl-5 rounded-md cursor-pointer">
              <label onClick={() => deleteCartItem(product.id)}>
                <button>delete</button>
              </label>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-semibold mr-4">
              ${product.price * product.qty}
            </span>
            <div className="flex items-center">
              <button
                onClick={() => decrementBtn(product.id, product.qty)}
                className="text-gray-600 focus:outline-none px-2 font-bold bg-red-300 rounded-lg"
              >
                -
              </button>
              <span className="mx-2">{product.qty}</span>
              <button
                onClick={() => incrementBtn(product.id)}
                className="text-gray-600 focus:outline-none px-2 font-bold bg-green-300 rounded-lg"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
