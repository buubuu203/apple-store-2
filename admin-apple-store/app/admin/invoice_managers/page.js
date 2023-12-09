"use client";

import { columnTableInvoiceManagers } from "@/components/makecolumns"
import { InvoiceManagers } from "@/components/templates"

const InvoiceManagersPage = () => {
    const columns = columnTableInvoiceManagers()
    const datasets = [
        {
            username: 'buubuu203',
            fullName: 'Châu Ngọc Bửu Đăng',
            region: 'Ho Chi Minh',
            addressCityProvince: 'Ho Chi Minh',
            phoneNumber: '0917192680',
            status: 'Đang giao'
        },
        {
            username: 'buubuu203',
            fullName: 'Châu Ngọc Bửu Đăng',
            region: 'Ho Chi Minh',
            addressCityProvince: 'Ho Chi Minh',
            phoneNumber: '0917192680',
            status: 'Đang giao'
        },
        {
            username: 'buubuu203',
            fullName: 'Châu Ngọc Bửu Đăng',
            region: 'Ho Chi Minh',
            addressCityProvince: 'Ho Chi Minh',
            phoneNumber: '0917192680',
            status: 'Đang giao'
        }
    ]
    const props = {
        columns,
        datasets
    }

    return <InvoiceManagers {...props} />
}

export default InvoiceManagersPage