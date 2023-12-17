"use client";

import { getAllOrders } from "@/apis/orders";
import { columnTableInvoiceManagers } from "@/components/makecolumns";
import { InvoiceManagers } from "@/components/templates";
import { useEffect, useState } from "react";

const InvoiceManagersPage = () => {
  const columns = columnTableInvoiceManagers();
  const [datasets, setDatasets] = useState([]);
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
