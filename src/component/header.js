import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const cartData = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const handlebtn = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-between">
        <div>
          <img
            className="cursor-pointer"
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="logo"
            onClick={handlebtn}
          />
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
