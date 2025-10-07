import React from "react";
import { Modal, Button } from "antd";

const ExportModal = ({ open, onClose, onExport }) => (
  <Modal open={open} title="Export Data" onCancel={onClose} footer={null}>
    <Button type="primary" onClick={() => onExport("csv")}>Export CSV</Button>
    <Button style={{ marginLeft: 8 }} onClick={() => onExport("excel")}>Export Excel</Button>
  </Modal>
);

export default ExportModal;
