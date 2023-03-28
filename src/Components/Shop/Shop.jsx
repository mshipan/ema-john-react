import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 px-24 mx-auto">
        <h2 className="text-4xl py-7">
          Products Coming Here: {products.length}
        </h2>
        <div className="grid grid-cols-3 gap-7">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              // send handleAddToCart function to Product.jsx file
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
      </div>

      <div className="col-span-1 bg-[#FF99004D]">
        {/* Shopping Cart */}
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
