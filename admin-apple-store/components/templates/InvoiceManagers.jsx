"use client";
import { Table } from "../atoms";
//TODO: lấy ra các đơn hàng từ CSDL, thêm cột status = hoàn thành
const InvoiceManagers = ({ columns, datasets }) => {
	return (
		<div className="flex flex-col w-full h-full gap-2">
			<Table columns={columns} data={datasets} />
		</div>
	);
};

export default InvoiceManagers;
