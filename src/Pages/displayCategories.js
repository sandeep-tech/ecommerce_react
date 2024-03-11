import React, { useState } from "react";
import Product from "../component/product";

const DisplayProduct = () => {
  const [productData, setProductData] = useState([]);

  return (
    <>
      <div className="flex flex-wrap">
        <Product productData={productData} />
      </div>
    </>
  );
};

export default DisplayProduct;
