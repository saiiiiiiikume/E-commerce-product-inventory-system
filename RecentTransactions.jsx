import React from "react";
import { Table } from "antd";

const RecentTransactions = ({ transactions = [] }) => {
  const columns = [
    { title: "Product", dataIndex: "productName", key: "productName" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Quantity", dataIndex: "quantity", key: "quantity" },
    { title: "Date", dataIndex: "createdAt", key: "createdAt" },
  ];
  return <Table dataSource={transactions} columns={columns} rowKey="_id" pagination={false} />;
};

export default RecentTransactions;
