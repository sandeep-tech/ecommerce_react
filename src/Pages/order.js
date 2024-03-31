import React from "react";

const Order = () => {
  const localStorageData = JSON.parse(localStorage.getItem("order"));

  return localStorageData == null ? (
    <p className="font-bold text-2xl text-center">Your Order is Empty</p>
  ) : (
    <>
      {localStorageData.map(({ order, orderDetails }) => {
        return (
          <>
            <p className="font-bold text-2xl ">
              {orderDetails.formData.firstName} {orderDetails.formData.lastName}
            </p>
            {order.map((product) => {
              return (
                <>
                  <div className="flex w-12/12">
                    <div className="flex w-1/12">
                      <img className="w-24 py-3" src={product.image} />
                    </div>
                    <div className="my-10 ml-8 w-4/12">
                      <p className="font-bold">{product.category}</p>
                      <p>{product.title}</p>
                      <p> rating : {product.rating.rate}</p>
                    </div>
                    <div className="w-4/12 mt-8">
                      <p>$ {product.price}</p>
                    </div>
                    <div className="w-2/12 mt-8">
                      <p>Qty :{product.qty}</p>
                    </div>
                    <div className="w-1/12 mt-8">
                      <p>Total :$ {product.qty * product.price}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
};

export default Order;

// [
//     {orderDetails: {order form details}, order: [{product with qty},{product with qty}]},
//     {orderDetails: {}, order: [{},{}]},
//     {orderDetails: {}, order: [{},{}]},
// ]
