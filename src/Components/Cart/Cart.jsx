import React from "react";

const Cart = (props) => {
  // const Cart = ({cart}) => {} // another way of distructure
  // const cart = props.cart;
  const { cart } = props; //distructure
  // when use for in loop it returns index number of an object element
  // when use for of loop it returns value of those indexs
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="sticky top-0">
      <h4 className="text-4xl pt-7 text-center">Order Summary</h4>
      <div className="p-10 flex flex-col gap-5">
        <p className="text-2xl">Selected Items: {cart.length}</p>
        <p className="text-2xl">Total Price: ${totalPrice}</p>
        <p className="text-2xl">Total Shipping: ${totalShipping}</p>
        <p className="text-2xl">Tax (7%): ${tax.toFixed(2)}</p>
        <p className="text-2xl font-bold">Grand Total: ${grandTotal}</p>
      </div>
    </div>
  );
};

export default Cart;
