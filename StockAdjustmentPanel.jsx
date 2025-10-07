import React from "react";
import { Form, InputNumber, Select, Button } from "antd";

const StockAdjustmentPanel = ({ onAdjust }) => {
  const [form] = Form.useForm();
  return (
    <Form layout="inline" form={form} onFinish={onAdjust}>
      <Form.Item name="productId" label="Product" rules={[{ required: true }]}>
        <Select placeholder="Select product" options={[]} />
      </Form.Item>
      <Form.Item name="type" label="Type" rules={[{ required: true }]}>
        <Select options={[{ value: "IN" }, { value: "OUT" }, { value: "ADJUSTMENT" }]} />
      </Form.Item>
      <Form.Item name="quantity" label="Quantity" rules={[{ required: true }]}>
        <InputNumber min={1} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Adjust Stock</Button>
      </Form.Item>
    </Form>
  );
};

export default StockAdjustmentPanel;
