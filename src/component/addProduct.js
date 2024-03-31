import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/productSlice";
import AddProductForm from "./addProductForm";

const initialState = {
  title: "",
  price: "",
  rating: "",
  description: "",
  category: "",
  image: "",
};

const AddProduct = () => {
  const [addProductFormDetails, setAddProductFormDetails] =
    useState(initialState);

  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setAddProductFormDetails({ ...addProductFormDetails, [name]: value });
  };

  const handleSubmit = async () => {
    const data = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addProductFormDetails),
    });
    if (data.status != 200) {
      alert("Api not Post");
      return;
    }
    const json = await data.json();
    // console.log(json);
    dispatch(addProducts([...productData, json]));
    setAddProductFormDetails(initialState);
    alert("Api post Successfully");
  };

  return (
    <>
      {/* {console.log(addProductFormDetails)} */}
      <AddProductForm
        handleChange={handleChange}
        value={addProductFormDetails}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default AddProduct;
