"use client";
import { getAllUsers, updateUserbyId } from "@/apis/user";
import { columnTableAccountManagers } from "@/components/makecolumns";
import { AccountManagers } from "@/components/templates";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AccountManagersPage = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [datasets, setDatasets] = useState([]);
  const formUpdate = useForm();
  const handleClose = () => {
    setActiveUser(null);
  };
  const openModel = (data) => {
    setActiveUser(data);
    formUpdate.reset(data);
  };
  const refresh = () => {
    getAllUsers().then(({ data }) => {
      setDatasets(data.data);
    });
  };
  const columns = columnTableAccountManagers(openModel, refresh);

  const handleUpdate = (data) => {
    updateUserbyId(data.id, data)
      .then(() => {
        toast.success("Thành công ròi!");
      })
      .finally(() => {
        setActiveUser(null);
        formUpdate.reset({});
        refresh();
      });
  };

  useEffect(() => {
    getAllUsers().then(({ data }) => {
      setDatasets(data.data);
    });
  }, []);
  const props = {
    columns,
    datasets,
    activeUser,
    formUpdate,
    handleClose,
    handleUpdate,
  };

  return <AccountManagers {...props} />;
};

export default AccountManagersPage;
