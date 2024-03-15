import { useSelector, useDispatch } from "react-redux";
import Cart from "../component/cart";
import { deleteProductFromCart, updateProductToCart } from "../store/cartSlice";

const CartProduct = () => {
  const cartData = useSelector((state) => state.cart);
  const productData = useSelector((state) => state.product);
  const dispatch = useDispatch();

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

  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4"></div>
        {displayCart()}
      </div>
      <div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
export default CartProduct;
