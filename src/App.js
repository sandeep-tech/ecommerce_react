import React from "react";
import Categories from "./component/categories";
import DisplayProduct from "./Pages/displayProduct";
import Header from "./component/header";
import Store from "./store/store";
import { Provider } from "react-redux";
import CartProduct from "./Pages/cartProduct";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import ProductDetails from "./component/productDetails";
import DisplayCategaries from "./Pages/displayCategories";
import Order from "./Pages/order";
import AddProduct from "./component/addProduct";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Main>
          <Header />
          <Categories />
          <Routes>
            <Route exact path="/" element={<DisplayProduct />} />
            <Route
              path="/categories/:category"
              element={<DisplayCategaries />}
            />
            <Route exact path="/cart" element={<CartProduct />} />
            <Route
              exact
              path="/productdetails/:id"
              element={<ProductDetails />}
            />
            <Route exact path="/addproduct" element={<AddProduct />} />
            <Route exact path="/order" element={<Order />} />
          </Routes>
        </Main>
      </Provider>
    </>
  );
}

export default App;
