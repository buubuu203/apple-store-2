"use client";
import { useState } from "react";
import { Table } from "../atoms";
import { Modal } from "../moleculers";
import { Controller } from "react-hook-form";
//FIXME: Không phải lấy dữ liệu cứng từ page.js mà lấy từ DB lên
//TODO: Có thể thêm, xóa, sửa 1 acc của user bất kỳ

const AccountManagers = ({
  columns,
  datasets,
  handleClose,
  activeUser,
  handleUpdate,
  formUpdate,
}) => {
  return (
    <div className="flex flex-col w-full h-full gap-2 pb-12">
      <Modal
        handleClose={handleClose}
        isOpen={activeUser}
        title="Sửa tài khoản"
        size="md"
      >
        <form
          className="space-y-2"
          onSubmit={formUpdate.handleSubmit(handleUpdate)}
        >
          <div className="flex gap-2">
            <div>
              <label
                htmlFor="text"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <Controller
                name="email"
                defaultValue=""
                control={formUpdate.control}
                render={({ field }) => (
                  <input
                    type="text"
                    name="text"
                    placeholder=""
                    {...field}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                )}
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tên đầy đủ
              </label>
              <Controller
                name="fullname"
                defaultValue=""
                control={formUpdate.control}
                render={({ field }) => (
                  <input
                    type="text"
                    name="text"
                    {...field}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                )}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <label
              htmlFor="text"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              SĐT
            </label>
            <Controller
              name="phone_number"
              defaultValue=""
              control={formUpdate.control}
              render={({ field }) => (
                <input
                  type="text"
                  name="text"
                  {...field}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              )}
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cập nhật
          </button>
        </form>
      </Modal>
      <Table columns={columns} data={datasets} />

      {/* Nút "Thêm Nhân Viên" ở góc dưới cùng bên phải */}
      <button
        type="button"
        className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Thêm Nhân Viên
      </button>
    </div>
  );
};

export default AccountManagers;
