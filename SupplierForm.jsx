import React from "react";
import { Form, Input, Button } from "antd";

const SupplierForm = ({ onSubmit, initialValues = {} }) => {
  const [form] = Form.useForm();
  return (
    <Form layout="vertical" form={form} initialValues={initialValues} onFinish={onSubmit}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Phone"><Input /></Form.Item>
      <Button type="primary" htmlType="submit">Save</Button>
    </Form>
  );
};

export default SupplierForm;
