import React from "react";
import { Form, Select, Input, Button } from "antd";

const AdvancedFilters = ({ onFilter }) => (
  <Form layout="inline" onFinish={onFilter}>
    <Form.Item name="category" label="Category">
      <Select options={[]} placeholder="Select category" />
    </Form.Item>
    <Form.Item name="brand" label="Brand">
      <Input placeholder="Enter brand" />
    </Form.Item>
    <Button type="primary" htmlType="submit">Filter</Button>
  </Form>
);

export default AdvancedFilters;
