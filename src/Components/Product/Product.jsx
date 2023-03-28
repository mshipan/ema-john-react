import React from "react";

const Product = (props) => {
  //   console.log(props.product);
  const { img, name, seller, quantity, price, ratings } = props.product;
  // receive handleAddToCart function from shop.jsx file
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-2xl border-2 border-slate-500 p-2">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body p-3">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-xl font-bold">Price: ${price}</p>
          <p className="text-lg">Manufacturer: {seller}</p>
          <p className="text-lg">Rating: {ratings} Star</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(props.product)}
              className="btn btn-block"
            >
              Add to Cart
              <i className="fa-solid fa-cart-shopping fa-spin ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
