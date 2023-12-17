"use client";

import { getAllOrders } from "@/apis/orders";
import { columnTableInvoiceManagers } from "@/components/makecolumns";
import { InvoiceManagers } from "@/components/templates";
import { useEffect, useState } from "react";

const InvoiceManagersPage = () => {
  const columns = columnTableInvoiceManagers();
  const [datasets, setDatasets] = useState([]);
  // const datasets = [
  //     {
  //         username: 'buubuu203',
  //         fullName: 'Châu Ngọc Bửu Đăng',
  //         region: 'Ho Chi Minh',
  //         addressCityProvince: 'Ho Chi Minh',
  //         phoneNumber: '0917192680',
  //         status: 'Đang giao'
  //     },
  //     {
  //         username: 'buubuu203',
  //         fullName: 'Châu Ngọc Bửu Đăng',
  //         region: 'Ho Chi Minh',
  //         addressCityProvince: 'Ho Chi Minh',
  //         phoneNumber: '0917192680',
  //         status: 'Đang giao'
  //     },
  //     {
  //         username: 'buubuu203',
  //         fullName: 'Châu Ngọc Bửu Đăng',
  //         region: 'Ho Chi Minh',
  //         addressCityProvince: 'Ho Chi Minh',
  //         phoneNumber: '0917192680',
  //         status: 'Đang giao'
  //     }
  // ]

  useEffect(() => {
    getAllOrders().then(({ data }) => {
      setDatasets(data.orders);
    });
  }, []);
  const props = {
    columns,
    datasets,
  };

  return <InvoiceManagers {...props} />;
};

export default InvoiceManagersPage;
