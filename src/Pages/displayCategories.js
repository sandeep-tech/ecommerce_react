import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../component/product";
import { addProductToCart } from "../store/cartSlice";

const DisplayCategaries = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  const cartData = useSelector((state) => state.cart);
  const { category } = useParams();

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

  const data = productData.filter((item) => item.category == category);

  return (
    <>
      <div className="flex flex-wrap">
        <Product productData={data} handleAddToCart={handleAddToCart} />
      </div>
    </>
  );
};

export default DisplayCategaries;
