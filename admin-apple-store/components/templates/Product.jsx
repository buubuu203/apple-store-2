"use client";
import { createCategory, getAllNameCategories } from "@/apis/category";
import {
  createProduct,
  deleteProductById,
  getAllProductByCategoryId,
  getProductById,
  updateProductById,
} from "@/apis/products";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Modal } from "../moleculers";
import toast from "react-hot-toast";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
// const tabs = [
//   {
//     key: "all",
//     name: "Tất cả sản phẩm",
//   },
//   {
//     key: "MacBook",
//     name: "MacBook",
//   },
//   {
//     key: "iPhone",
//     name: "iPhone",
//   },
//   {
//     key: "iPad",
//     name: "iPad",
//   },
//   {
//     key: "Airpods",
//     name: "Airpods",
//   },
//   {
//     key: "Watch",
//     name: "Watch",
//   },
// ];

const Stock = () => {
  const tab = useSearchParams().get("tab");
  const [activeProduct, setActiveProduct] = useState(null);
  const [isAddNew, setIsAddNew] = useState(false);
  const [isAddNewCategory, setIsAddNewCategory] = useState(false);
  const [product, setProduct] = useState([]);
  const form = useForm({
    defaultValues: {
      title: "",
      price: 0,
      // quantity: 0,
      historyCost: 0,
      description: "",
      cpu: "",
      ram: 0,
      resolution: "",
      display: "",
      batterylife: 0,
      weight: 0,
      size: "",
      capacities: "",
      thumbnail: "",
    },
  });

  const formCreate = useForm({
    defaultValues: {
      title: "",
      price: 0,
      // quantity: 0,
      historyCost: 0,
      description: "",
      cpu: "",
      ram: 0,
      resolution: "",
      display: "",
      batterylife: 0,
      weight: 0,
      size: "",
      thumbnail: "",
      capacities: "",
      product_colors: [],
    },
  });
  const formCreateCategory = useForm({
    defaultValues: {
      name: "",
    },
  });

  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    getAllNameCategories().then((res) => {
      const data = res.data.map((item) => {
        return {
          id: item.id,
          name: item.name,
        };
      });

      setTabs(data);
    });
  }, []);

  useEffect(() => {
    getAllProductByCategoryId(tab).then((res) => {
      setProduct(res.data);
    });
  }, [tab]);
  const handleClose = () => {
    setActiveProduct(false);
  };

  const handleCloseAdd = () => {
    setIsAddNew(false);
    setIsAddNewCategory(false);
  };

  const onUpdate = (data) => {
    if (data.price < 0 || data.historyCost < 0) {
      toast.error("Lỗi giá kìa ba:((");
      return;
    }
    updateProductById(data.id, data)
      .then(() => {
        setActiveProduct(null);
        getAllProductByCategoryId(tab).then((res) => {
          setProduct(res.data);
          form.reset({});
        });
        toast.success("Thành công ròi!");
      })
      .catch(() => {
        toast.error("Ôi mẹ ơi. Lỗi tui lỗi tui:((");
      });
  };
  const getProductDetails = (id) => {
    getProductById(id)
      .then(({ data }) => {
        console.log("data", data);
        form.reset(data);
        setActiveProduct(data);
      })
      .catch(() => {
        setActiveProduct(null);
        toast.error("Ôi mẹ ơi. Lỗi tui lỗi tui:((");
      });
  };

  // const onDelete = (id) => {

  //   deleteProductById(id).then(() => {
  //     setActiveProduct(null);
  //     getAllProductByCategoryId(tab).then((res) => {
  //       setProduct(res.data);
  //       toast.success("Thành công ròi!");
  //     });
  //   });
  // };
  const onDelete = (id) => {
    // Hiển thị hộp thoại xác nhận
    const userConfirmed = window.confirm(
      "Bạn có chắc muốn xóa sản phẩm này không?"
    );

    // Nếu người dùng đã xác nhận
    if (userConfirmed) {
      deleteProductById(id)
        .then(() => {
          setActiveProduct(null);
          getAllProductByCategoryId(tab).then((res) => {
            setProduct(res.data);
            toast.success("Thành công rồi!");
          });
        })
        .catch((error) => {
          // Xử lý lỗi khi xóa sản phẩm
          console.error("Lỗi khi xóa sản phẩm:", error);
          toast.error("Đã xảy ra lỗi khi xóa sản phẩm!");
        });
    }
  };

  const onCreate = (data) => {
    console.log(data);
    const fillData = {
      category_id: +tab,
      historyCost: 10,
      description: "Updated product description",
      cpu: "Updated CPU",
      ram: 2,
      resolution: "Updated Resolution",
      display: 5,
      batterylife: 8000,
      weight: 2.5,
      size: 2,
      capacities: 257,
      deleted: 0,
      ...data,
    };
    createProduct(fillData).then(() => {
      setIsAddNew(false);
      getAllProductByCategoryId(tab).then((res) => {
        setProduct(res.data);
        formCreate.reset({});
      });
    });
  };

  const onCreateCategory = (data) => {
    console.log(data);

    createCategory(data).then(() => {
      setIsAddNewCategory(false);
      getAllProductByCategoryId(tab).then((res) => {
        setTabs(res.data);
        formCreateCategory.reset({});
      });
    });
  };

  return (
    <div className="flex flex-col w-full h-full gap-2">
      <Modal
        handleClose={handleClose}
        isOpen={!!activeProduct}
        title="Sửa sản phẩm"
      >
        <form
          className="space-y-6"
          action="#"
          onSubmit={form.handleSubmit(onUpdate)}
        >
          <div className="flex gap-3">
            <div className="h-64 w-[40%]">
              <Image
                src={activeProduct?.thumbnail}
                unoptimized
                width={10}
                height={100}
                alt=""
                className="w-full h-full object-contain"
              />
              <div>
                <label
                  htmlFor="thumbnail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image URL
                </label>
                <Controller
                  name="thumbnail"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>
              <div className="py-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Màu sản phẩm
                </label>
                <div className="flex gap-2 items-center flex-col">
                  {activeProduct?.product_colors?.map((item, index) => {
                    return (
                      <div className="flex items-center gap-4">
                        <Controller
                          name={`product_colors.${index}.hex_code`}
                          defaultValue={null}
                          control={form.control}
                          render={({ field }) => {
                            return (
                              <input
                                type="color"
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                              />
                            );
                          }}
                        />
                        <Controller
                          name={`product_colors.${index}.name`}
                          defaultValue={null}
                          control={form.control}
                          render={({ field }) => {
                            return (
                              <input
                                type="text"
                                {...field}
                                placeholder="Enter name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              />
                            );
                          }}
                        />
                        <Controller
                          name={`product_colors.${index}.quantity`}
                          defaultValue={null}
                          control={form.control}
                          render={({ field }) => {
                            return (
                              <input
                                type="number"
                                value={field.value}
                                onChange={(e) =>
                                  field.onChange(+e.target.value)
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              />
                            );
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              {/* Product title */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tên sản phẩm
                </label>
                <Controller
                  name="title"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>

              {/* Product historyCost */}
              <div>
                <label
                  htmlFor="historyCost"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Giá gốc
                </label>
                <Controller
                  name="historyCost"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="number"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Giá sản phẩm
                </label>
                <Controller
                  name="price"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="number"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>
              {/* Product description */}
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mô tả
                </label>
                <Controller
                  name="description"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>

              {/* CPU */}
              <div>
                <label
                  htmlFor="cpu"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  CPU
                </label>
                <Controller
                  name="cpu"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>

              {/* RAM */}
              <div>
                <label
                  htmlFor="ram"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  RAM
                </label>
                <Controller
                  name="ram"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="number"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>

              {/* resolution */}
              <div>
                <label
                  htmlFor="resolution"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Độ phân giải
                </label>
                <Controller
                  name="resolution"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>

              {/* Display */}
              <div>
                <label
                  htmlFor="display"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Màn hình
                </label>
                <Controller
                  name="display"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>

              {/* BatteryLife */}
              <div>
                <label
                  htmlFor="batterylife"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tuổi thọ pin
                </label>
                <Controller
                  name="batterylife"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="number"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>

              {/* Weight */}
              <div>
                <label
                  htmlFor="weight"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Trọng lượng
                </label>
                <Controller
                  name="weight"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="number"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>

              {/* Size */}
              <div>
                <label
                  htmlFor="size"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Kích thước
                </label>
                <Controller
                  name="size"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>

              {/* Capacities */}
              <div>
                <label
                  htmlFor="capacities"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dung lượng
                </label>
                <Controller
                  name="capacities"
                  defaultValue={""}
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-1">
            <button
              type="button"
              onClick={() => {
                onDelete(activeProduct.id);
              }}
              className="w-full text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Xóa
            </button>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-cente"
            >
              Cập nhật
            </button>
          </div>
        </form>
      </Modal>
      <div className="flex gap-4 bg-white rounded-lg overflow-hidden">
        <div className="bg-white text-sm font-medium text-center text-gray-500 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((item) => (
              <li className="mr-2" key={item.id}>
                <Link
                  href={`/admin/products?tab=${item.id}`}
                  className={clsx("inline-block p-4  rounded-t-l", {
                    "active text-blue-600 border-b-2 border-blue-600":
                      +tab === item.id,
                  })}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 pr-4 h-full flex justify-end items-center gap-2">
          <Modal
            handleClose={handleCloseAdd}
            isOpen={isAddNew}
            title="Tạo sản phẩm"
          >
            <form
              className="space-y-6"
              onSubmit={formCreate.handleSubmit(onCreate)}
            >
              <div className="flex">
                {/* <div className="w-1/2 h-64">
                  <Image
                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png"
                    unoptimized
                    width={10}
                    height={100}
                    objectFit="cover"
                    className="w-full h-full object-contain"
                  />
                </div> */}
                <div className="flex-1 flex flex-col gap-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Image URL
                    </label>
                    <Controller
                      name="thumbnail"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tên sản phẩm
                    </label>
                    <Controller
                      name="title"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="historyCost"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Giá gốc
                    </label>
                    <Controller
                      name="historyCost"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="number"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Giá sản phẩm
                    </label>
                    <Controller
                      name="price"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="number"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>
                  {/* Product description */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mô tả
                    </label>
                    <Controller
                      name="description"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>

                  {/* CPU */}
                  <div>
                    <label
                      htmlFor="cpu"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      CPU
                    </label>
                    <Controller
                      name="cpu"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>

                  {/* RAM */}
                  <div>
                    <label
                      htmlFor="ram"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      RAM
                    </label>
                    <Controller
                      name="ram"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="number"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>

                  {/* resolution */}
                  <div>
                    <label
                      htmlFor="resolution"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Độ phân giải
                    </label>
                    <Controller
                      name="resolution"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>

                  {/* Display */}
                  <div>
                    <label
                      htmlFor="display"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Màn hình
                    </label>
                    <Controller
                      name="display"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>

                  {/* BatteryLife */}
                  <div>
                    <label
                      htmlFor="batterylife"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tuổi thọ pin
                    </label>
                    <Controller
                      name="batterylife"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="number"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>

                  {/* Weight */}
                  <div>
                    <label
                      htmlFor="weight"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Trọng lượng
                    </label>
                    <Controller
                      name="weight"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="number"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>

                  {/* Size */}
                  <div>
                    <label
                      htmlFor="size"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Kích thước
                    </label>
                    <Controller
                      name="size"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>

                  {/* Capacities */}
                  <div>
                    <label
                      htmlFor="capacities"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Dung lượng
                    </label>
                    <Controller
                      name="capacities"
                      defaultValue={""}
                      control={formCreate.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>
                  <div className="py-4">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Màu sản phẩm
                    </label>
                    <div className="flex gap-2 items-center flex-col w-full">
                      {formCreate
                        .watch("product_colors")
                        ?.map((item, index) => {
                          return (
                            <div className="flex items-center gap-4">
                              <Controller
                                name={`product_colors.${index}.hex_code`}
                                defaultValue={null}
                                control={formCreate.control}
                                render={({ field }) => {
                                  return (
                                    <input
                                      type="color"
                                      value={field.value}
                                      onChange={(e) =>
                                        field.onChange(e.target.value)
                                      }
                                    />
                                  );
                                }}
                              />
                              <Controller
                                name={`product_colors.${index}.name`}
                                defaultValue={null}
                                control={formCreate.control}
                                render={({ field }) => {
                                  return (
                                    <input
                                      type="text"
                                      {...field}
                                      placeholder="Enter name"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    />
                                  );
                                }}
                              />
                              <Controller
                                name={`product_colors.${index}.quantity`}
                                defaultValue={null}
                                control={formCreate.control}
                                render={({ field }) => {
                                  return (
                                    <input
                                      type="number"
                                      value={field.value}
                                      onChange={(e) =>
                                        field.onChange(+e.target.value)
                                      }
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    />
                                  );
                                }}
                              />
                            </div>
                          );
                        })}
                      <button
                        type="button"
                        onClick={() => {
                          const currentProductColor =
                            formCreate.getValues("product_colors");
                          const newProductColor = {
                            id: 10,
                            name: "",
                            hex_code: "",
                            quantity: 1,
                          };
                          formCreate.setValue("product_colors", [
                            ...currentProductColor,
                            { ...newProductColor },
                          ]);
                          console.log("first", [
                            ...currentProductColor,
                            { ...newProductColor },
                          ]);
                        }}
                        className="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-cente"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-1">
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-cente"
                >
                  Tạo
                </button>
              </div>
            </form>
          </Modal>

          <button
            type="button"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
            onClick={() => setIsAddNew(true)}
          >
            Tạo sản phẩm
          </button>

          {/* Tạo loại sản phẩm */}
          <Modal
            handleClose={handleCloseAdd}
            isOpen={isAddNewCategory}
            title="Tạo loại sản phẩm"
          >
            <form
              className="space-y-6"
              onSubmit={formCreateCategory.handleSubmit(onCreateCategory)}
            >
              <div className="flex">
                <div className="flex-1 flex flex-col gap-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tên loại sản phẩm
                    </label>
                    <Controller
                      name="name"
                      defaultValue={""}
                      required
                      control={formCreateCategory.control}
                      render={({ field }) => {
                        return (
                          <input
                            type="text"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          />
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-1">
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-cente"
                >
                  Tạo
                </button>
              </div>
            </form>
          </Modal>

          <button
            type="button"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
            onClick={() => setIsAddNewCategory(true)}
          >
            Tạo loại sản phẩm
          </button>
        </div>
      </div>
      <div className="flex-1 w-full rounded-lg overflow-x-auto pb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {product.map((item) => (
            <div
              key={item}
              className="w-full bg-white rounded-lg h-82 flex flex-col p-4 gap-2 m-auto"
            >
              <div className="w-full h-[55%]">
                <Image
                  src={item.thumbnail}
                  unoptimized
                  width={10}
                  height={100}
                  alt=""
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="w-fit p-2 h-9 rounded-md  flex items-center text-black justify-center font-semibold text-sm">
                {item.title}
              </p>

              <div className="w-full text-white text-sm flex-1 flex gap-1 items-center justify-between">
                <p className="text-white bg-red-600 font-medium rounded-lg text-xs p-2">
                  Giá: {item.price.toLocaleString()}
                </p>
                <p className="text-white bg-gray-700 font-medium rounded-lg text-xs p-2">
                  {item?.historyCost ? (
                    <>Giá gốc: {item?.historyCost.toLocaleString()}</>
                  ) : (
                    <>Không có giảm giá</>
                  )}
                </p>
              </div>
              <div className="w-full text-white text-sm flex-1 flex items-center justify-between">
                {/* <div className="flex gap-1">
                  <p className="p-1 rounded-md border-2 border-black flex items-center text-black justify-center font-bold text-xs">
                    128GB
                  </p>
                  <p className="p-1 rounded-md border-2 border-black flex items-center text-black justify-center font-bold text-xs">
                    256GB
                  </p>
                  <p className="p-1 rounded-md border-2 border-black flex items-center text-black justify-center font-bold text-xs">
                    512GB
                  </p>
                </div> */}
                <button
                  type="button"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
                  onClick={() => getProductDetails(item.id)}
                >
                  Chỉnh sửa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stock;
