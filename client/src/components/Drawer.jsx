// src/TopDrawer.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function TopDrawer({ count }) {
  const navigate = useNavigate();
  const [isSinged, setIsSinged] = useState(false);

  const handleLabelClick = () => {
    // Điều hướng đến component SignIn khi label được nhấp
    navigate("/SignIn");
  };

  useEffect(() => {
    const userJson = window.localStorage.getItem("_user");
    const user = JSON.parse(userJson);
    setIsSinged(!!user);
  }, []);

  // const handleCartClick = () => {
  //     navigate('/ShoppingCart');
  // }

  return (
    <div className="drawer font-SFPro">
      <input id="my-drawer" type="checkbox" className="drawer-toggle"></input>
      <div className="drawer-content hidden hover:text-gray lg:flex btn btn-ghost btn-circle">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="p-2 text-white drawer-button border-none cursor-pointer"
        >
          {/* <label tabIndex={0} className="btn btn-ghost btn-circle"> */}
          <div className="indicator relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {!!+count && (
              <p className="animate-fade absolute -top-3 -right-3 w-5 h-5 rounded-full p-1 flex items-center justify-center bg-blue text-xs">
                {count}
              </p>
            )}
          </div>
          {/* </label> */}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-200  text-gray-dark">
          <li
            className="text-xl text-black px-3
                    my-4 "
          >
            Túi của bạn đang trống.
          </li>
          {!isSinged && (
            <p className="text-base px-3 mb-5">
              <Link className="text-blue underline " onClick={handleLabelClick}>
                Đăng nhập
              </Link>{" "}
              để xem bạn có sản phẩm nào đã lưu không?
            </p>
          )}

          {/* Sidebar content here */}
          <li>
            {" "}
            <Link>Đơn hàng</Link>
          </li>
          <li>
            <Link>Mục đã lưu</Link>
          </li>
          <li>
            <Link>Tài khoản</Link>
          </li>
          {!isSinged && (
            <li>
              <Link onClick={handleLabelClick}>Đăng nhập</Link>
            </li>
          )}
          <li>
            <Link to="/ShoppingCart">Xem giỏ hàng</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopDrawer;
