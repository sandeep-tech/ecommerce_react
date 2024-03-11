import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categoriesApi, setCategoriesApi] = useState([]);

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  const fetchCategoriesData = async () => {
    const data = await fetch("https://fakestoreapi.com/products/categories");
    const json = await data.json();
    setCategoriesApi(json);
  };

  return (
    <>
      <div className="flex">
        {categoriesApi.map((item) => {
          return (
            <ul>
              <li className="p-3">
                <Link to={`/categories/${item}`}>{item}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};
export default Categories;
