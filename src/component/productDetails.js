import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addProductToCart } from "../store/cartSlice";
import { addProducts } from "../store/productSlice";

const ProductDetails = () => {
  const productDetails = useSelector((state) => state.product);
  const cartData = useSelector((state) => state.cart);
  console.log(cartData);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productDetails.length == 0) fetchProductData();
  }, []);

  const fetchProductData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    dispatch(addProducts(json));
  };

  const handleAddToCart = () => {
    if (cartData.find((item) => item.id == id)) {
      alert("Product is Alraedy in Cart");
    } else {
      const cartitem = productDetails.find((item) => item.id == id);
      const cartItemDetails = [...cartData, cartitem];
      const cartProduct = cartItemDetails.map((prod) => {
        return { id: prod.id, qty: 1 };
      });
      dispatch(addProductToCart(cartProduct));
    }
  };
  const productDeatilsData = productDetails.find((item) => item.id == id);
  if (!productDeatilsData) {
    return <h1>Loding.......</h1>;
  }
  return (
    <div>
      <div className="">
        <img className="w-40" src={productDeatilsData.image} />
        <p className="font-bold text-2xl">{productDeatilsData.title}</p>
        <p className="font-bold text-lg mt-2">Description :</p>
        <p className="w-7/12">{productDeatilsData.description}</p>
        <p className="my-2">Price : ${productDeatilsData.price}</p>
        <p>Rating : {productDeatilsData.rating.rate}</p>
        <button
          className="p-2 bg-green-200 rounded-md "
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
