import React from "react";
import { Dropdown, Button, Menu } from "antd";

const BulkOperations = ({ onBulkAction }) => {
  const menu = (
    <Menu
      items={[
        { key: "priceUpdate", label: "Bulk Price Update" },
        { key: "categoryChange", label: "Change Category" },
      ]}
      onClick={(e) => onBulkAction(e.key)}
    />
  );
  return (
    <Dropdown overlay={menu}>
      <Button>Bulk Operations</Button>
    </Dropdown>
  );
};

export default BulkOperations;
