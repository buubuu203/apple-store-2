import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { giaohangnhanh, giaohangtietkiem } from "../assets/img";
import Button from "../components/Button";
import { createOrders } from "../api/orders";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
const Provinces = [
  "An Giang",
  "Bà Rịa - Vũng Tàu",
  "Bạc Liêu",
  "Bắc Kạn",
  "Bắc Giang",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Dương",
  "Bình Định",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cao Bằng",
  "Cần Thơ",
  "Đà Nẵng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tây",
  "Hà Tĩnh",
  "Hải Dương",
  "Hải Phòng",
  "Hòa Bình",
  "Hồ Chí Minh",
  "Hậu Giang",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lào Cai",
  "Lạng Sơn",
  "Lâm Đồng",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên – Huế",
  "Tiền Giang",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
];

const CheckOut = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const form = useForm({
    defaultValues: {
      email: "",
      phone_number: "",
    },
  });

  const resetCart = () => {
    // window.localStorage.removeItem('cart')
    // navigate('/')
    const currentDate = new Date();

    // Format the date as "YYYY-MM-DD"
    const formattedDate =
      currentDate.getFullYear() +
      "-" +
      ("0" + (currentDate.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + currentDate.getDate()).slice(-2);

    const orders = products.map((product) => {
      return {
        user_id: form.getValues("user_id"),
        note: "This is a new order",
        order_date: formattedDate,
        status: 1,
        total_money: +product?.total * +product.quantity,
        selected: 1,
        product_id: product.id,
      };
    });
    createOrders(orders)
      .then(() => {
        // window.localStorage.removeItem("cart");
        // navigate("/");
        const result = window.confirm("Are you sure you want to proceed?");
        if (result) {
          window.localStorage.removeItem("cart");
          toast.success("Đặt hàng thành công");
          navigate("/");
        }
      })
      .catch(() => {
        toast.error("Lỗi đặt hàng");
      });
    console.log(orders);
  };

  useEffect(() => {
    // lay data cua gio hang (localStorage chi luu data dang string)
    const cartJSONString = window.localStorage.getItem("cart");
    // Vi string JSON muon chuyen ve dang truoc do [1] thi dungf JSON.parse
    const cart = JSON.parse(cartJSONString);
    const totalPrice = cart?.reduce((total, product) => {
      return total + +product?.total * +product.quantity;
    }, 0);
    setTotalPrice(totalPrice);
    setProducts(cart);
  }, []);

  useEffect(() => {
    const userJson = window.localStorage.getItem("_user");
    const _user = JSON.parse(userJson);
    const formUser = {
      user_id: _user.id,
      email: _user.email,
      fullname: _user.fullname,
    };
    form.reset(formUser);
  }, [form]);

  return (
    <div>
      <div class="font-SFPro flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <Link to="/" class="text-2xl font-bold text-black">
          Apple Store
        </Link>
      </div>
      <Toaster />
      <div class="font-SFPro grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
          {/* TODO: backend link giua shopping cart va payment */}
          <p class="text-xl font-medium">Sản phẩm đã chọn</p>
          <p class="text-gray-400">
            Kiểm tra các mục của bạn. Và lựa chọn phương thức vận chuyển phù
            hợp.
          </p>
          <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {products?.map((product) => {
              return (
                <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                  <img
                    class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={product?.thumbnail}
                    alt={product?.name}
                  />
                  <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">{product?.title}</span>
                    {/* ten bien the - color; gb (backend) */}
                    <span class="float-right font-bold text-gray-dark">
                      Ram: {product?.ram} GB
                    </span>
                    <p class="text-sm font-bold">
                      {" "}
                      Giá {(+product?.price).toLocaleString()} VND
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p class="mt-8 text-lg font-medium">Phương thức vận chuyển</p>
          <form class="mt-5 grid gap-6">
            <div class="relative">
              <input
                class="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_1"
              >
                <img class="w-14 object-contain" src={giaohangnhanh} alt="" />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">Giao hàng nhanh</span>
                  <p class="text-slate-500 text-sm leading-6">
                    Thời gian dự tính: 1-3 ngày
                  </p>
                </div>
              </label>
            </div>
            <div class="relative">
              <input
                class="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2"
              >
                <img
                  class="w-14 object-contain"
                  src={giaohangtietkiem}
                  alt=""
                />
                <div class="ml-5">
                  <span class="mt-2 font-semibold">Giao hàng tiết kiệm</span>
                  <p class="text-slate-500 text-sm leading-6">
                    Thời gian dự tính: 1-3 ngày
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium">Chi tiết thanh toán</p>
          <p class="text-gray-400">
            Hoàn tất đơn đặt hàng của bạn bằng cách cung cấp chi tiết thanh toán
            của bạn.
          </p>
          <div class="">
            <label for="email" class="mt-4 mb-2 block text-sm font-medium">
              Email
            </label>
            <div class="relative">
              <Controller
                name="email"
                defaultValue=""
                control={form.control}
                render={({ field }) => {
                  return (
                    <input
                      type="text"
                      {...field}
                      class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="your.email@gmail.com"
                    />
                  );
                }}
              />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              for="card-holder"
              class="mt-4 mb-2 block text-sm font-medium"
            >
              Họ và tên
            </label>
            <div class="relative">
              <Controller
                name="fullname"
                defaultValue=""
                control={form.control}
                render={({ field }) => {
                  return (
                    <input
                      type="text"
                      {...field}
                      class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your full name here"
                    />
                  );
                }}
              />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">
              Chi tiết thẻ
            </label>
            <div class="flex gap-2">
              <div class="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                  name="card-no"
                  class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    class="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="credit-expiry"
                class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
              />
              <input
                type="text"
                name="credit-cvc"
                class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="CVC"
              />
            </div>
            <label
              for="billing-address"
              class="mt-4 mb-2 block text-sm font-medium"
            >
              Địa chỉ thanh toán
            </label>
            <div class="flex gap-2 flex-col sm:flex-row">
              <div class="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Số nhà, đường, phường/xã, quận/huyện"
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    class="h-4 w-4 object-contain"
                    src="https://flagpack.xyz/_nuxt/82862d96f28cd0c385b2afb862be8393.svg"
                    alt=""
                  />
                </div>
              </div>
              <select
                type="text"
                name="billing-state"
                class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                {Provinces.map((item) => (
                  <option value={item}>{item}</option>
                ))}

                <option value="Hồ Chí Minh">Hải Phòng</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div>

            {/* <!-- Total --> */}
            <div class="mt-6 border-t border-b py-2">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Tổng phụ</p>
                <p class="font-semibold text-gray-900">
                  {totalPrice?.toLocaleString()}
                </p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Phí vận chuyển</p>
                <p class="font-semibold text-gray-900">0.000 đ</p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Tổng cộng</p>
              <p class="text-2xl font-semibold text-gray-900">
                {totalPrice?.toLocaleString()} đ
              </p>
            </div>
          </div>
          <Button
            title="Place Order"
            onClick={resetCart}
            class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
