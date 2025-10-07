import React from "react";
import { Modal, Form } from "antd";
import ProductForm from "./ProductForm/ProductForm";

const ProductModal = ({ open, onClose, onSubmit, initialValues }) => (
  <Modal open={open} onCancel={onClose} onOk={() => onSubmit()} width={700}>
    <Form initialValues={initialValues} layout="vertical">
      <ProductForm />
    </Form>
  </Modal>
);

export default ProductModal;
