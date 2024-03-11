import React from "react";
import Categories from "./component/categories";
import DisplayProduct from "./Pages/displayProduct";
import Header from "./component/header";
import Store from "./store/store";
import { Provider } from "react-redux";
import CartProduct from "./Pages/cartProduct";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import ProductDetails from "./component/productDetails";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Main>
          <Header />
          <Categories />
          <Routes>
            <Route exact path="/" element={<DisplayProduct />} />
            <Route path="/categories/:category" element={<></>} />
            <Route exact path="/cart" element={<CartProduct />} />
            <Route
              exact
              path="/productdetails/:id"
              element={<ProductDetails />}
            />
          </Routes>
        </Main>
      </Provider>
    </>
  );
}

export default App;
