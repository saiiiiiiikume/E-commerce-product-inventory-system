import React from "react";
import { Card, Statistic, Row, Col } from "antd";

const InventoryStats = ({ stats }) => (
  <Row gutter={16}>
    <Col span={8}><Card><Statistic title="Total Products" value={stats.totalProducts || 0} /></Card></Col>
    <Col span={8}><Card><Statistic title="Low Stock" value={stats.lowStock || 0} /></Card></Col>
    <Col span={8}><Card><Statistic title="Inventory Value" value={stats.totalValue || 0} prefix="$" /></Card></Col>
  </Row>
);

export default InventoryStats;
