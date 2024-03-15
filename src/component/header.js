import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartData = useSelector((state) => state.cart);

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
