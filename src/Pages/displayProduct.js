import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../component/product";
import ProductDetails from "../component/productDetails";
import { addProductToCart } from "../store/cartSlice";
import { addProducts } from "../store/productSlice";

const DisplayProduct = () => {
  const [productInfo, setProductInfo] = useState([]);

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
    // setProductData(json);
  };

  const handleAddToCart = (id) => {
    const cartitem = productData.find((item) => item.id == id);
    const cartItemDetails = [...cartData, cartitem];
    dispatch(addProductToCart(cartItemDetails));
  };

  const moreDetailBtn = (id) => {
    const productDetail = productData.find((item) => item.id == id);
    setProductInfo(productDetail);
  };

  return (
    <>
      {/* {console.log(productInfo)} */}
      <div className="flex flex-wrap">
        <Product
          productData={productData}
          handleAddToCart={handleAddToCart}
          productInfo={productInfo}
          moreDetailBtn={moreDetailBtn}
        />
      </div>
    </>
  );
};

export default DisplayProduct;
