import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 px-24 mx-auto">
        <h2 className="text-4xl py-7">
          Products Coming Here: {products.length}
        </h2>
        <div className="grid grid-cols-3 gap-7">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>

      <div className="col-span-1 bg-[#FF99004D]">
        <h4 className="text-4xl pt-7 text-center">Order Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
