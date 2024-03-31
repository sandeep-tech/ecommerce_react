import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../component/product";
import { addProductToCart } from "../store/cartSlice";
import { addProducts } from "../store/productSlice";

const DisplayProduct = () => {
  const { category } = useParams();

  const cartData = useSelector((state) => state.cart);
  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    if (cartData.find((item) => item.id == id)) {
      alert("Product is Alraedy in Cart");
    } else {
      const cartitem = productData.find((item) => item.id == id);
      const cartItemDetails = [...cartData, cartitem];
      const cartProduct = cartItemDetails.map((prod) => {
        return { id: prod.id, qty: 1 };
      });
      dispatch(addProductToCart(cartProduct));
    }
  };

  return (
    <>
      <div className="flex flex-wrap">
        <Product productData={productData} handleAddToCart={handleAddToCart} />
      </div>
    </>
  );
};

export default DisplayProduct;
