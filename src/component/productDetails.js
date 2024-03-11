import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const productDetails = useSelector((state) => state.product);

  const productDeatilsData = productDetails.find((item) => item.id == id);
  //   console.log(productDeatilsData);

  return (
    <div>
      <div className="">
        <img className="w-40" src={productDeatilsData.image} />
        <p className="font-bold text-2xl">{productDeatilsData.title}</p>
        <p className="font-bold text-lg mt-2">Description :</p>
        <p className="w-7/12">{productDeatilsData.description}</p>
        <p className="my-2">Price : ${productDeatilsData.price}</p>
        <p>Rating : {productDeatilsData.rating.rate}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
