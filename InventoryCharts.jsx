import React from "react";
import { Card } from "antd";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const InventoryCharts = ({ data = [] }) => (
  <Card title="Category-wise Stock">
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="category" outerRadius={100}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658"][index % 3]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </Card>
);

export default InventoryCharts;
