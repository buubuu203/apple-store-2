import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { onLogin } from "../../api/user";
import AppleIcon from "../../assets/apple.svg";

// TODO: đăng nhập đăng ký
const SignIn = ({ loginError }) => {
  const navigate = useNavigate();

  const handleLabelClick = () => {
    // Điều hướng đến component SignIn khi label được nhấp
    navigate("/");
  };
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleLogin = (data) => {
    console.log("data", data);
    onLogin(data)
      .then(({ data }) => {
        toast.success("Đăng nhập thành công.");
        window.localStorage.setItem("_user", JSON.stringify(data.user));
        navigate("/");
      })
      .catch((e) => {
        toast.error("Đăng nhập thất bại");
      });
    // if (userName.current.value === 'admin@gmail.com' && password.current.value === 'admin') {
    //     localStorage.setItem("userNameData", "admin@gmail.com")
    //     localStorage.setItem("passwordData", "admin")
    // }
  };
  return (
    <>
      <div className="m-5 text-gray" onClick={handleLabelClick}>
        <KeyboardDoubleArrowLeftIcon />
      </div>
      <Toaster />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-SFPro">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={AppleIcon} className="w-12 mx-auto" alt="Apple Icon" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng nhập vào Apple Store
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={form.handleSubmit(handleLogin)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <Controller
                  name="email"
                  control={form.control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      {...field}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6 pl-3"
                    />
                  )}
                />

                {loginError && <span className="error-text">{loginError}</span>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mật khẩu
                </label>
                <div className="text-sm">
                  <Link
                    href="#"
                    className="font-normal text-blue text-indigo-600 hover:text-indigo-500"
                  >
                    Bạn đã quên mật khẩu?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <Controller
                  name="password"
                  control={form.control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      {...field}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6 pl-3"
                    />
                  )}
                />
              </div>
            </div>

            <div className="">
              <button
                className="cursor-pointer bg-black gap-4 m-auto px-6 py-3 text-sm tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-2xl hover:bg-blue focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50 w-fit"
                type="submit"
              >
                Đăng nhập
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Bạn không có ID Apple?{" "}
            <Link
              to="/SignUp"
              className="font-normal leading-6 text-blue hover:text-indigo-500 hover:text-gray"
            >
              Tạo tài khoản của bạn ngay bây giờ.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
