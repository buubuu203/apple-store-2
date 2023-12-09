import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../api/user";
const SignUp = () => {
  const navigate = useNavigate();

  const handleLabelClick = () => {
    // Điều hướng đến component SignIn khi label được nhấp
    navigate("/");
  };
  // Check Password

  const handleCheckPassword = (password1, password2) => {
    if (password1 === password2) {
      return false;
    } else {
      return true;
    }
  };
  const checkPhoneNumber = (phone) => {
    // phone la string nghe bubu
    const reg = /((84|0[3|5|7|8|9])+([0-9]{8})\b)|(1[8|9]00)+([0-9]{4}\b)/g;
    return !!reg.test(phone);
  };
  const checkEmail = (email) => {
    // Biểu thức chính quy để kiểm tra địa chỉ email
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    return emailRegex.test(email);
  };

  // Sử dụng hàm kiểm tra địa chỉ email

  const form = useForm({
    defaultValues: {
      fullname: "",
      phone_number: "",
      email: "",
      password: "",
      confirm_password: "",
      role_id: 1,
      deleted: 0,
    },
  });
  const onSubmit = (data) => {
    if (checkEmail(data.mail)) {
      toast.error("Email không hợp lệ");
      return;
    }
    // if (checkPhoneNumber(data.phone_number)) {
    //   toast.error("Số điện thoại không hợp lệ");
    //   return;
    // }

    // if (!handleCheckPassword(data.password, data.confirm_password)) {
    //   toast.error("Mật khẩu không khớp");
    //   return;
    // }
    createUser(data)
      .then(() => {
        toast.success("Đăng ký thành công");
        navigate("/SignIn");
      })
      .catch(() => {
        toast.error("Đăng ký thất bại");
      });
    return true;
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 font-SFPro">
        <div className="flex justify-center min-h-screen">
          <Toaster />
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')",
            }}
          >
            <div className="m-5 text-white" onClick={handleLabelClick}>
              <KeyboardDoubleArrowLeftIcon />
            </div>
          </div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold  capitalize dark:text-white">
                Tạo ID Apple
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Chỉ cần có một ID Apple để truy cập vào tất cả dịch vụ của
                Apple.
              </p>

              <form
                className="grid grid-cols-1 gap-4 md:gap-6 mt-8 md:grid-cols-2"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {/* <div className=''>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Họ</label>
                                <input type="text" placeholder="John" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div> */}

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Họ và tên
                  </label>
                  <Controller
                    name="fullname"
                    control={form.control}
                    defaultValue=""
                    render={({ field }) => {
                      return (
                        <input
                          type="text"
                          placeholder="Snow"
                          {...field}
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      );
                    }}
                  />
                </div>
                {/* /TODO: kiểm tra SĐT (vì trong DB xài varchar) */}
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Số điện thoại
                  </label>
                  <Controller
                    name="phone_number"
                    control={form.control}
                    defaultValue=""
                    render={({ field }) => {
                      return (
                        <input
                          type="text"
                          {...field}
                          placeholder="XXX-XX-XXXX-XXX"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      );
                    }}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email
                  </label>
                  <Controller
                    name="email"
                    control={form.control}
                    defaultValue=""
                    render={({ field }) => {
                      return (
                        <input
                          type="email"
                          {...field}
                          placeholder="johnsnow@example.com"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      );
                    }}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Mật khẩu
                  </label>
                  <Controller
                    name="password"
                    control={form.control}
                    defaultValue=""
                    render={({ field }) => {
                      return (
                        <input
                          type="password"
                          {...field}
                          placeholder="Nhập mật khẩu"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      );
                    }}
                  />
                </div>

                <div>
                  {/* <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Xác nhận mật khẩu
                  </label> */}
                  {/* <Controller
                    name="confirm_password"
                    control={form.control}
                    defaultValue=""
                    render={({ field }) => {
                      return (
                        <input
                          {...field}
                          type="password"
                          placeholder="Nhập lại mật khẩu"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-gray focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      );
                    }}
                  /> */}
                </div>

                <div className="text-gray-dark col-span-2">
                  Bạn đã có tài khoản.
                  <Link
                    to="/SignIn"
                    onClick={() => {
                      <span className="loading loading-ring loading-lg"></span>;
                    }}
                    className="hover:text-gray text-blue  m-auto items-center"
                  >
                    {" "}
                    Đăng nhập ngay
                  </Link>
                </div>
                <div class="justify-self-start">
                  <button
                    className="cursor-pointer bg-black gap-4 m-auto px-6 py-3 text-sm tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-2xl hover:bg-blue focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50 w-fit"
                    type="submit"
                  >
                    Đăng ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
