import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { getAllNameCategories } from "../api/category";

import TopDrawer from "./Drawer";
import { Link } from "react-router-dom";
const Navbar = ({ count }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // React state to manage visibility
  const [show, setShow] = useState();
  const [navLinks, setNavLinks] = useState([]);
  const [isSinged, setIsSinged] = useState(false);
  // function to toggle the boolean value
  function handleClick() {
    setShow(!show);
  }
  const handleSignOut = () => {
    window.localStorage.removeItem("_user");
    window.location.reload();
    setShow(false);
  };

  useEffect(() => {
    getAllNameCategories()
      .then(({ data }) => {
        console.log("data", data);
        setNavLinks(data);
      })
      .catch((e) => console.log("e", e));
  }, []);

  useEffect(() => {
    const userJson = window.localStorage.getItem("_user");
    const user = JSON.parse(userJson);
    setIsSinged(!!user);
  }, []);

  // const [searchQuery, setSearchQuery] = useState("");
  // const handleSearch = () => {
  //   // Chuyển hướng đến trang danh sách sản phẩm với truy vấn tìm kiếm
  //   window.location.href = `/searchlist?search=${encodeURIComponent(searchQuery)}`;
  // };

  return (
    <>
      <header className="sm:px-8 p-3 z-10 w-full font-SFPro bg-black text-white fixed">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="text-xl pr-2 font-normal">
            {/* <AiOutlineApple /> */}
            Apple Store
          </a>
          <ul className="flex-1 lg:flex justify-center items-center gap-16  hidden ">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={`/categories/${item?.id}`}
                  className=" cursor-pointer text-white hover:text-gray"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Tìm kiếm</button> */}

          {show && (
            <div>
              <ul className="flex-1 lg:flex justify-center items-center gap-16  hidden ">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={`/categories/${item?.id}`}
                      className=" cursor-pointer text-white hover:text-gray"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex">
            <div
              className=" lg:flex  relative hidden hover:text-gray w-fit btn btn-ghost btn-circle"
              onClick={handleClick}
            ></div>

            <TopDrawer count={count} />
          </div>

          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          ></div>
        </nav>

        <label
          htmlFor="my-drawer"
          className="absolute lg:hidden top-3 right-4 "
        >
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="fixed top-0 left-0 w-full h-full bg-black ease-in-out flex-col z-10 flex__center slide-bottom ">
              <IoCloseSharp
                fontSize={27}
                className="text-3xl text-white cursor-pointer absolute top-4 right-4"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="flex flex-col items-center gap-4 pt-64">
                {navLinks.map((item) => (
                  <li key={item.name} className="">
                    <a
                      href={`/categories/${item?.id}`}
                      className=" cursor-pointer text-white hover:text-gray"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                {isSinged && (
                  <li>
                    <Link onClick={handleSignOut}>Đăng xuất</Link>
                  </li>
                )}
              </ul>

              <div className="flex">
                <div
                  className=" lg:flex  relative hidden hover:text-gray w-fit btn btn-ghost btn-circle"
                  onClick={handleClick}
                ></div>

                <TopDrawer count={count} isVisible={toggleMenu} />
              </div>
            </div>
          )}
        </label>
      </header>
    </>
  );
};

export default Navbar;
