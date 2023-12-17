"use client";

import { getAllOrders } from "@/apis/orders";
import { columnTableSummary } from "@/components/makecolumns";
import { SummaryPage } from "@/components/templates";
import { useEffect, useState } from "react";

const SummaryManagersPage = () => {
  const columns = columnTableSummary();
  const [datasets, setDatasets] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    getAllOrders().then(({ data }) => {
      const orders = data.orders;

      // Calculate total revenue
      const totalRevenue = orders.reduce(
        (sum, order) => sum + order.total_money,
        0
      );
      setTotalRevenue(totalRevenue);

      setDatasets(orders);
    });
  }, []);

  const props = {
    columns,
    datasets,
    totalRevenue,
  };

  return <SummaryPage {...props} />;
};

export default SummaryManagersPage;
