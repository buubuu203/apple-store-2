import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/products";
import Button from "../components/Button";
import CustomerReviews from "../sections/CustomerReviews";
// import macM1 from '../assets/img/mac/macbook_air_m1_8gb_256gb_didongviet.webp'
const ProductPage = ({ updateCount }) => {
  const { id } = useParams();
  const colorRef = useRef("");
  const [product, setProduct] = useState(null);
  // // ref: https://bobbyhadz.com/blog/react-onclick-redirect
  const navigate = useNavigate();

  const navigateToType = () => {
    // navigate(`/${product.type}`, { replace: true });
  };

  const navigateHome = () => {
    navigate("/");
  };

  const addToCart = (prod) => {
    // lay data cua gio hang (localStorage chi luu data dang string)
    const cartJSONString = window.localStorage.getItem("cart");
    // Vi string JSON muon chuyen ve dang truoc do [1] thi dungf JSON.parse
    const cart = JSON.parse(cartJSONString);
    // Khoi tao san pham vua bam
    const productCart = {
      id: prod.id,
      thumbnail: prod.thumbnail,
      title: prod.title,
      price: prod.price,
      historyCost: prod.historyCost,
      // description: prod.description,
      cpu: prod.cpu,
      ram: prod.ram,
      resolution: prod.resolution,
      display: prod.display,
      batterylife: prod.batterylife,
      weight: prod.weight,
      size: prod.size,
      capacities: prod.capacities,
      color: colorRef.current,
      quantity: 1,
      total: prod.price,
    };
    // Tao mang moi
    const newCart = [...(cart || []), productCart];
    // Vi newCart la list nen phai JSON.stringify de thanh chuoi string
    // O day [1] o tren co nghia la dang list
    updateCount(newCart.length);
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  };

  useEffect(() => {
    getProductById(id).then(({ data }) => {
      setProduct(data);
    });
    if (window !== undefined)
      window?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }, []);
  return (
    <div>
      <section className="py-4 sm:px-8 sm:py-8 font-SFPro">
        <div className="container mx-auto px-4">
          <nav className="flex">
            <ol className="flex items-center">
              <li className="text-left">
                <div className="-m-1">
                  <Link
                    href=""
                    onClick={navigateHome}
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </div>
              </li>

              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <Link
                      href=""
                      onClick={navigateToType}
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      {" "}
                      {product?.type}{" "}
                    </Link>
                  </div>
                </div>
              </li>

              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <Link
                      href="#"
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      aria-current="page"
                    >
                      {" "}
                      {product?.title}{" "}
                    </Link>
                  </div>
                </div>
              </li>
            </ol>
          </nav>

          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full max-w-full object-cover"
                      src={product?.thumbnail}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start lg:flex-col">
                    <button
                      type="button"
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg text-center border-gray border-2"
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={product?.thumbnail}
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg text-center "
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={product?.thumbnail}
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg text-center "
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={product?.thumbnail}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                {product?.title}
              </h1>
              {/* Rating section */}
              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                  <svg
                    className="block h-4 w-4 align-middle text-yellow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="block h-4 w-4 align-middle text-yellow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  1,209 Đánh giá
                </p>
              </div>
              {/* Choose color section */}

              {/* Check color properties */}
              {product && product?.product_colors && (
                <div>
                  <h2 className="mt-8 text-base text-gray-900">Màu sắc</h2>
                  <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                    {product?.product_colors?.map(({ hex_code, name }) => (
                      <label
                        onClick={() => (colorRef.current = hex_code)}
                        className=""
                        key={hex_code}
                      >
                        <p
                          style={{ background: hex_code }}
                          className="transition-all text-white ease-linear duration-200 peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold"
                        >
                          {name}
                        </p>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10 flex flex-col  justify-between  border-t  py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end gap-8">
                  <h1 className="text-3xl font-bold">
                    {product?.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </h1>
                  {product?.historyCost !== null ? (
                    <h1 className="text-xl font-thin line-through text-gray">
                      {product?.historyCost.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </h1>
                  ) : null}
                </div>
              </div>

              {/* Add to cart btn */}
              {/* TODO: add to cart can be used, connect w the shopping cart page */}
              <div class="w-fit">
                <Button
                  onClick={() => addToCart(product)}
                  title="Thêm vào giỏ hàng"
                ></Button>
              </div>

              <ul className="mt-8 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      className=""
                    ></path>
                  </svg>
                  Miễn phí vận chuyển
                </li>

                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    ></path>
                  </svg>
                  Hủy bất cứ lúc nào
                </li>
              </ul>
            </div>

            <div className="col-span-full  border-t mt-4 pt-6 ">
              <p className="font-semibold text-2xl uppercase text-gray-dark">
                Thông tin chi tiết
              </p>

              <div className="flow-root  sm:mt-4">
                {product?.cpu && (
                  <div className="flex gap-4 mt-2">
                    <p className="font-medium">CPU:</p>
                    <p className="font-normal text-gray-dark">{product?.cpu}</p>
                  </div>
                )}
                {product?.ram && (
                  <div className="flex gap-4  mt-2">
                    <p className="font-medium">RAM:</p>
                    <p className="font-normal text-gray-dark">{product?.ram}</p>
                  </div>
                )}
                {product?.resolution && (
                  <div className="flex gap-4  mt-2">
                    <p className="font-medium">Độ phân giải:</p>
                    <p className="font-normal text-gray-dark">
                      {product?.resolution}
                    </p>
                  </div>
                )}
                {product?.display && (
                  <div className="flex gap-4  mt-2">
                    <p className="font-medium">Màn hình:</p>
                    <p className="font-normal text-gray-dark">
                      {product?.display}
                    </p>
                  </div>
                )}
                {product?.batterylife && (
                  <div className="flex gap-4  mt-2">
                    <p className="font-medium">Dung lượng pin:</p>
                    <p className="font-normal text-gray-dark">
                      {product?.batterylife}
                    </p>
                  </div>
                )}
                {product?.weight && (
                  <div className="flex gap-4  mt-2">
                    <p className="font-medium">Cân nặng:</p>
                    <p className="font-normal text-gray-dark">
                      {product?.weight}
                    </p>
                  </div>
                )}
                {product?.size && (
                  <div className="flex gap-4  mt-2">
                    <p className="font-medium">Kích thước:</p>
                    <p className="font-normal text-gray-dark">
                      {product?.size}
                    </p>
                  </div>
                )}
                {product?.capacities && (
                  <div className="flex gap-4  mt-2">
                    <p className="font-medium">Dung lượng:</p>
                    <p className="font-normal text-gray-dark">
                      {product?.capacities}
                    </p>
                  </div>
                )}
                {/* {
                                    product.doPhanGiai && (
                                        <div className='flex gap-4 mt-2'>
                                            <p className="font-medium">
                                                Độ phân giải:
                                            </p>
                                            <p className='font-normal text-gray-dark'>{product.doPhanGiai}</p>
                                        </div>
                                    )
                                }{
                                    product.kichThuocMan && (
                                        <div className='flex gap-4 mt-2'>
                                            <p className="font-medium">
                                                Kích thước màn hình:
                                            </p>
                                            <p className='font-normal text-gray-dark'> {product.kichThuocMan}</p>
                                        </div>
                                    )
                                }{
                                    product.DLpin && (
                                        <div className='flex gap-4 mt-2'>
                                            <p className="font-medium">
                                                Dung lượng pin:
                                            </p>
                                            <p className='font-normal text-gray-dark'>  {product.DLpin}</p>
                                        </div>
                                    )
                                }{
                                    product.trongLuong && (
                                        <div className='flex gap-4 mt-2'>
                                            <p className="font-medium">
                                                Trọng lượng:
                                            </p>
                                            <p className='font-normal text-gray-dark'>   {product.trongLuong}</p>
                                        </div>
                                    )
                                }
                                {
                                    product.kichThuoc && (
                                        <div className='flex gap-4 mt-2'>
                                            <p className="font-medium">
                                                Kích thước:
                                            </p>
                                            <p className='font-normal text-gray-dark'> {product.kichThuoc}</p>
                                        </div>
                                    )
                                } */}
              </div>
            </div>

            <div className="col-span-full  border-t mt-4 pt-6 ">
              <p className="font-semibold text-2xl uppercase text-gray-dark">
                Reviews
              </p>
              <CustomerReviews />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
