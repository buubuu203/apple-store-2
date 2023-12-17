import { deleteUserbyId, getUserbyId } from "@/apis/user";
import toast from "react-hot-toast";
import { MdDelete, MdOutlineMode } from "react-icons/md";

export const columnTableAccountManagers = (openModel, refresh) => {
  return [
    {
      header: "EMAIL",
      accessorKey: "email",
      size: 120,
    },
    {
      header: "TÊN ĐẦY ĐỦ",
      accessorKey: "fullname",
      size: 120,
    },
    {
      header: "ĐỊA CHỈ",
      accessorKey: "address",
      size: 120,
    },
    // {
    //   header: "KHU VỰC",
    //   accessorKey: "region",
    //   size: 90,
    // },
    // {
    //   header: "TỈNH THÀNH",
    //   accessorKey: "addressCityProvince",
    //   size: 120,
    // },
    {
      header: "SỐ ĐIỆN THOẠI",
      accessorKey: "phone_number",
      size: 120,
    },
    {
      header: "TUỲ CHỌN",
      accessorKey: "actions",
      size: 124,
      cell: (info) => {
        return (
          <div className="flex items-center gap-4">
            <button
              type="button"
              class="inline-flex items-center py-2 px-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
              onClick={() => {
                getUserbyId(info.row.original.id).then(({ data }) => {
                  openModel(data.data);
                });
              }}
            >
              <MdOutlineMode size={18} />
            </button>
            <button
              type="button"
              class="inline-flex items-center py-2 px-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
              onClick={() => {
                deleteUserbyId(info.row.original.id).then(() => {
                  toast.success("Xóa gòi");
                  refresh();
                });
              }}
            >
              <MdDelete size={18} />
            </button>{" "}
          </div>
        );
      },
    },
  ];
};

export const columnTableInvoiceManagers = () => {
  return [
    {
      header: "EMAIL",
      accessorKey: "user.email",
      size: 120,
    },
    {
      header: "TÊN ĐẦY ĐỦ",
      accessorKey: "user.fullname",
      size: 120,
    },
    // {
    //   header: "KHU VỰC",
    //   accessorKey: "region",
    //   size: 90,
    // },
    // {
    //   header: "TỈNH THÀNH",
    //   accessorKey: "addressCityProvince",
    //   size: 120,
    // },
    {
      header: "SỐ ĐIỆN THOẠI",
      accessorKey: "user.phone_number",
      size: 120,
    },
    {
      header: "VAI TRÒ",
      accessorKey: "role_id",
      size: 120,
      cell: (info) => (
        <p
          type="button"
          class="inline-flex items-center py-1.5 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-full focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
        >
          {info?.getValue()}
        </p>
      ),
    },
    {
      header: "TUỲ CHỌN",
      accessorKey: "actions",
      size: 124,
      cell: () => (
        <button
          type="button"
          class="inline-flex items-center py-2 px-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
        >
          <MdOutlineMode size={18} />
        </button>
      ),
    },
  ];
};
