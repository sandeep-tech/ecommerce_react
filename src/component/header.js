import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProducts } from "../store/productSlice";

const Header = () => {
  const cartData = useSelector((state) => state.cart);
  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productData.length == 0) {
      fetchProductData();
    }
  }, []);

  const fetchProductData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    dispatch(addProducts(json));
  };

  //
  return (
    <>
      <div className="flex justify-between">
        <div>
          <Link to="/">
            <img
              className="cursor-pointer"
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt="logo"
            />
          </Link>
        </div>
        <Link to="order">
          <div>Order</div>
        </Link>
        <Link to="addproduct">
          <div>addProduct</div>
        </Link>
        <div className="mr-10">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
            alt="cartlogo"
          />
          <Link to="/cart">
            <span className="font-bold text-lg">
              ({cartData?.length} items)Cart
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
