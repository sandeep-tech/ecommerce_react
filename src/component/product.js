import React from "react";
import { Link } from "react-router-dom";

const Product = ({ productData, handleAddToCart, moreDetailBtn }) => {
  return (
    <>
      {productData.map((productItem) => {
        return (
          <div
            key={productItem.id}
            className="w-44 h-[350px] bg-slate-400 p-2 m-2"
          >
            <img
              className="w-full h-32"
              src={productItem.image}
              alt="product Images"
            />
            <p className="font-bold text-sm">Title : {productItem.title}</p>
            <p>Price : ${productItem.price}</p>
            <button
              className="p-2 bg-green-200 rounded-md "
              onClick={() => handleAddToCart(productItem.id)}
            >
              Add to Cart
            </button>
            <Link to={"productdetails/" + productItem.id}>
              <button className="p-2 m-2 bg-pink-400 rounded-xl w-full">
                More info..
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Product;
