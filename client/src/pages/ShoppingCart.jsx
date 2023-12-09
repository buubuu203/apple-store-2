import Checkbox from "@mui/material/Checkbox";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const ShoppingCart = () => {
  // Initial quantity
  const [products, setProducts] = useState([]); // Initial quantity
  const [totalPrice, setTotalPrice] = useState(0);

  const updateQuantity = (id, quantity) => {
    const newProducts = [...products];
    const product = newProducts.find((prod) => prod?.id === id);
    product.quantity = +quantity;
    setProducts(newProducts);
    const totalPrice = newProducts.reduce((total, product) => {
      return total + +product?.total * +product.quantity;
    }, 0);
    setTotalPrice(totalPrice);
    window.localStorage.setItem("cart", JSON.stringify(newProducts));
  };
  const incrementQuantity = (id, quantity) => {
    updateQuantity(id, quantity + 1);
  };

  const decrementQuantity = (id, quantity) => {
    let currentQuantity = quantity - 1;
    if (currentQuantity < 1) {
      currentQuantity = 1;
    }
    updateQuantity(id, currentQuantity);
  };

  const removeProductById = (id, color) => {
    const currProducts = products.filter((prod) => {
      return !(prod?.id === id && prod?.color === color);
    });

    window.localStorage.setItem("cart", JSON.stringify(currProducts));
    setProducts(currProducts);
    if (!currProducts.length) navigate("/");
  };

  // useEffect(() => {
  //     // Filter out currency symbol and convert to a number
  //     const priceWithoutCurrency = parseFloat(Macbook[1].price.replace('$', ''));
  //     setTotalPrice(priceWithoutCurrency * quantity * 1000000);
  // }, [quantity]);
  useEffect(() => {
    // lay data cua gio hang (localStorage chi luu data dang string)
    const cartJSONString = window.localStorage.getItem("cart");
    // Vi string JSON muon chuyen ve dang truoc do [1] thi dungf JSON.parse
    const cart = JSON.parse(cartJSONString);
    const totalPrice = cart.reduce((total, product) => {
      return total + +product?.total * +product.quantity;
    }, 0);
    setTotalPrice(totalPrice);
    setProducts(cart);
  }, []);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const navigate = useNavigate();

  const handleLabelClick = () => {
    // Điều hướng đến component SignIn khi label được nhấp
    navigate("/CheckOut");
  };
  return (
    <div className="font-SFPro">
      <div className="fixed top-0 w-full h-full bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden">
        <div className="w-full absolute right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700">
          <div
            className="flex sm:items-end lg:flex-row flex-col sm:justify-end bg-[url('./assets/img/shoppingCart/wallpapers.webp')] bg-left-bottom"
            id="cart"
          >
            <div
              className="lg:w-1/2 md:w-8/12 w-full  lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto"
              id="scroll"
            >
              <Link
                to="/"
                className="text-base pl-2 leading-none dark:hover:text-gray-200"
              >
                {" "}
                <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  Back
                </div>
              </Link>
              <table className="w-full my-4">
                <thead>
                  <tr className="mr-2">
                    <th className="text-left font-semibold">
                      <Checkbox {...label} size="small" defaultChecked />
                    </th>
                    <th className="text-left font-semibold">Sản phẩm</th>
                    <th className="text-center font-semibold">Giá</th>
                    <th className="text-center font-semibold">SL</th>
                    <th className="text-center font-semibold">Tổng</th>
                    <th className="text-center font-semibold">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product) => (
                    <tr>
                      <td className="py-4 text-sm">
                        <Checkbox {...label} size="small" defaultChecked />
                      </td>
                      <td className="py-4 text-sm">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16"
                            src={product?.thumbnail}
                            alt="product img"
                          />
                          <span className="font-medium hidden sm:flex text-sm  sm:flex-wrap max-w-xs">
                            {product?.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 text-sm">
                        {(+product?.price).toLocaleString()}
                      </td>
                      <td className="py-4 text-sm">
                        <div className="flex items-center">
                          <button
                            className="rounded-md px-2 py-1 mr-2"
                            onClick={() =>
                              decrementQuantity(product?.id, product?.quantity)
                            }
                          >
                            -
                          </button>
                          <span className="text-center">
                            {product?.quantity}
                          </span>
                          <button
                            className="rounded-md px-2 py-1 ml-2"
                            onClick={() =>
                              incrementQuantity(product?.id, product?.quantity)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 text-sm">
                        {(+product?.total * product.quantity).toLocaleString(
                          "en-GB"
                        )}{" "}
                        đ
                      </td>
                      <td className="py-4 text-sm text-right">
                        <DeleteIcon
                          onClick={() =>
                            removeProductById(product?.id, product?.color)
                          }
                          className="w-4 h-4 hover:cursor-pointer hover:opacity-75"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="lg:w-96 md:w-8/12 w-full bg-black dark:bg-gray-900 h-full text-white">
              <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 gap-4 overflow-y-auto">
                {/* Tổng kết giỏ hàng */}
                <h2 className="text-lg font-semibold mb-4">Tổng cộng</h2>
                <div className="flex justify-between mb-2">
                  <span>Tổng tiền hàng</span>
                  <span>{totalPrice.toLocaleString("en-GB")} đ</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Thuế</span>
                  <span>0 đ</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Giá vận chuyển</span>
                  <span>0 đ</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Tổng cộng</span>
                  <span className="font-semibold">
                    {totalPrice.toLocaleString("en-GB")} đ
                  </span>
                </div>
                <button
                  className="bg-white gap-4  px-6 py-3 text-base tracking-wide text-black transition-colors duration-300 transform bg-blue-500 rounded-2xl hover:bg-blue hover:text-white focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50 w-fit mx-auto"
                  onClick={handleLabelClick}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
