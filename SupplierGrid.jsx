import React from "react";
import { Table } from "antd";

const SupplierGrid = ({ suppliers = [] }) => {
  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Phone", dataIndex: "phone" },
    { title: "City", dataIndex: ["address", "city"] },
  ];
  return <Table dataSource={suppliers} columns={columns} rowKey="_id" />;
};

export default SupplierGrid;
