import React from "react";
import { Table } from "antd";

const StockTransactionGrid = ({ transactions = [] }) => {
  const columns = [
    { title: "Product", dataIndex: "productName" },
    { title: "Type", dataIndex: "type" },
    { title: "Quantity", dataIndex: "quantity" },
    { title: "Reason", dataIndex: "reason" },
    { title: "Date", dataIndex: "createdAt" },
  ];
  return <Table dataSource={transactions} columns={columns} rowKey="_id" />;
};

export default StockTransactionGrid;
