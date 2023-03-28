import React from "react";
import img from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <div className="bg-[#1C2B35]">
      <div className="px-44 mx-auto">
        <div className="py-5 flex items-center justify-between">
          <div>
            <img src={img} alt="" />
          </div>

          <div className="text-white text-xl">
            <ul className="flex gap-9">
              <li>
                <a href="/order">Order</a>
              </li>
              <li>
                <a href="/orderReview">Order Review</a>
              </li>
              <li>
                <a href="/manageInventory">Manage Inventory</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
