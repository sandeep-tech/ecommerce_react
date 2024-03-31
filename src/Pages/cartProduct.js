import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Cart from "../component/cart";
import Form from "../component/form";
import { deleteProductFromCart, updateProductToCart } from "../store/cartSlice";

const CartProduct = () => {
  const cartData = useSelector((state) => state.cart);
  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // FORM SECTION
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
  });

  // const [blankFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   address: "",
  //   phone: "",
  //   email: "",
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // FORM SECTION END

  const deleteAll = () => {
    dispatch(deleteProductFromCart([]));
  };

  const deleteCartItem = (id) => {
    const filterCart = cartData.filter((item) => item.id != id);
    dispatch(deleteProductFromCart(filterCart));
  };

  const incrementBtn = (id) => {
    const cartIncreamentQtyDetails = cartData.map((item) => {
      if (item.id == id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    dispatch(updateProductToCart(cartIncreamentQtyDetails));
  };

  const decrementBtn = (id, qty) => {
    if (qty == 1) {
      alert("Action not possible");
      return;
    }
    const cartDecreamentQtyDetails = cartData.map((item) => {
      if (item.id == id) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });

    dispatch(updateProductToCart(cartDecreamentQtyDetails));
  };

  const handleCheckout = () => {
    if (cartData.length == 0) {
      alert(" Your Cart is Empty , Please Order Something");
      return;
    }
    const itemData = cartData.map((item) => {
      const data = productData.find((prod) => prod.id == item.id);
      return { ...data, qty: item.qty };
    });
    // console.log([{ orderDetails: {}, order: itemData }]);
    const loaclData = JSON.parse(localStorage.getItem("order"));
    if (loaclData == null) {
      localStorage.setItem(
        "order",
        JSON.stringify([{ orderDetails: { formData }, order: itemData }])
      );
    } else {
      localStorage.setItem(
        "order",
        JSON.stringify([
          ...loaclData,
          { orderDetails: { formData }, order: itemData },
        ])
      );
    }
    dispatch(updateProductToCart([]));
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      email: "",
    });
    alert("Order Place successfully");
  };
  const displayCart = () => {
    const cartDetails = cartData.map((item) => {
      const data = productData.find((prod) => prod.id == item.id);
      return { ...data, qty: item.qty };
    });
    return (
      <Cart
        cartDetails={cartDetails}
        deleteCartItem={deleteCartItem}
        deleteAll={deleteAll}
        incrementBtn={incrementBtn}
        decrementBtn={decrementBtn}
      />
    );
  };

  return cartData.length == 0 ? (
    <p className="font-bold text-2xl text-center">Your Cart is Empty</p>
  ) : (
    <>
      {/* {console.log("abc", formData)} */}
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        <Form handleChange={handleChange} formData={formData} />
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4"></div>
        {displayCart()}
      </div>
      <div>
        <div className="flex justify-end mt-4">
          {cartData.length == 0 ? (
            ""
          ) : (
            <button
              onClick={handleCheckout}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default CartProduct;
