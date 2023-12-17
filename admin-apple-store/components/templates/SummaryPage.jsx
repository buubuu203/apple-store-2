import React from "react";
import { Table } from "../atoms";

const SummaryPageTable = ({ columns, datasets, totalRevenue }) => {
  //TODO: Summary
  const formattedTotalRevenue = totalRevenue.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <div className="flex flex-col w-full h-full gap-2">
      <Table columns={columns} data={datasets} />
      <div className="text-center font-bold uppercase text-white bg-slate-800 py-2 rounded-lg">
        Total Revenue: {formattedTotalRevenue}
      </div>
    </div>
  );
};

export default SummaryPageTable;
