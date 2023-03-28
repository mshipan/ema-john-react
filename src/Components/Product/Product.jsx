import React from "react";

const Product = (props) => {
  //   console.log(props.product);
  const { img, name, seller, price, ratings } = props.product;

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
            <button className="btn btn-block">
              Add to Cart
              <i class="fa-solid fa-cart-shopping fa-spin ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
