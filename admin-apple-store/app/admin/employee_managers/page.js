"use client";

import { columnTableAccountManagers } from "@/components/makecolumns";
import { EmployeeManagers } from "@/components/templates";

const EmployeeManagersPage = () => {
    const columns = columnTableAccountManagers()
    const datasets = [
        {
            username: 'buubuu203',
            fullName: 'Châu Ngọc Bửu Đăng',
            region: 'Ho Chi Minh',
            addressCityProvince: 'Ho Chi Minh',
            phoneNumber: '0917192680',
            status: 'Đã nghỉ'
        },
        {
            username: 'buubuu203',
            fullName: 'Châu Ngọc Bửu Đăng',
            region: 'Ho Chi Minh',
            addressCityProvince: 'Ho Chi Minh',
            phoneNumber: '0917192680',
            status: 'Quản lý'
        },
        {
            username: 'buubuu203',
            fullName: 'Châu Ngọc Bửu Đăng',
            region: 'Ho Chi Minh',
            addressCityProvince: 'Ho Chi Minh',
            phoneNumber: '0917192680',
            status: 'Nhân viên'
        }
    ]
    const props = {
        columns,
        datasets
    }

    return <EmployeeManagers {...props} />
}

export default EmployeeManagersPage