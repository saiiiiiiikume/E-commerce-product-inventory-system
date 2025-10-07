import React from "react";
import { List, Tag } from "antd";

const LowStockAlerts = ({ products = [] }) => (
  <List
    size="small"
    bordered
    header={<strong>Low Stock Alerts</strong>}
    dataSource={products}
    renderItem={(item) => (
      <List.Item>
        {item.name} — <Tag color="red">{item.currentStock}</Tag> in stock
      </List.Item>
    )}
  />
);

export default LowStockAlerts;
