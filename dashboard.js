// pages/dashboard.js
import React from "react";
import InventoryStats from "@/components/Dashboard/InventoryStats";
import LowStockAlerts from "@/components/Dashboard/LowStockAlerts";
import RecentTransactions from "@/components/Dashboard/RecentTransactions";

export default function DashboardPage() {
  const sampleStats = { totalProducts: 150, lowStock: 5, totalValue: 34500 };
  const sampleLowStock = [
    { name: "Wireless Mouse", currentStock: 3 },
    { name: "Laptop Stand", currentStock: 7 },
  ];
  const sampleTransactions = [
    { _id: 1, productName: "Keyboard", type: "IN", quantity: 20, createdAt: "2025-10-06" },
    { _id: 2, productName: "Mouse", type: "OUT", quantity: 5, createdAt: "2025-10-05" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>📦 Inventory Dashboard</h1>
      <InventoryStats stats={sampleStats} />
      <div style={{ marginTop: 20 }}>
        <LowStockAlerts products={sampleLowStock} />
      </div>
      <div style={{ marginTop: 20 }}>
        <RecentTransactions transactions={sampleTransactions} />
      </div>
    </div>
  );
}