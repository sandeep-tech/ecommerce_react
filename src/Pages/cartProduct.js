// import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "../component/cart";

const CartProduct = () => {
  const cartData = useSelector((state) => state.cart);
  const productData = useSelector((state) => state.product);

  const displayCart = () => {
    const cartDetails = cartData.map((item) => {
      const data = productData.find((prod) => prod.id == item.id);
      return { ...data, qty: item.qty };
    });
    return <Cart cartDetails={cartDetails} />;
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4"></div>
        {displayCart()}
      </div>
      <div>
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
