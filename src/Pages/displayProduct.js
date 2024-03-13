import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../component/product";
// import ProductDetails from "../component/productDetails";
import { addProductToCart } from "../store/cartSlice";
import { addProducts } from "../store/productSlice";

const DisplayProduct = () => {
  const { category } = useParams();
  // console.log(category);

  const cartData = useSelector((state) => state.cart);
  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    dispatch(addProducts(json));
  };

  const handleAddToCart = (id) => {
    const cartitem = productData.find((item) => item.id == id);
    const cartItemDetails = [...cartData, cartitem];
    const cartProduct = cartItemDetails.map((prod) => {
      return { id: prod.id, qty: 1 };
    });
    dispatch(addProductToCart(cartProduct));
  };

  // const moreDetailBtn = (id) => {
  //   const productDetail = productData.find((item) => item.id == id);
  //   setProductInfo(productDetail);
  // };

  return (
    <>
      <div className="flex flex-wrap">
        <Product
          productData={productData}
          handleAddToCart={handleAddToCart}
          // productInfo={productInfo}
          // moreDetailBtn={moreDetailBtn}
        />
      </div>
    </>
  );
};

export default DisplayProduct;
