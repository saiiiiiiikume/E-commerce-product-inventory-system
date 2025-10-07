import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function ProductGrid({ rowData = [], onEdit }) {
  const columnDefs = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "SKU", field: "sku" },
    { headerName: "Category", field: "category" },
    { headerName: "Price", field: "price", valueFormatter: p => `$${p.value}` },
    { headerName: "Stock", field: "currentStock" },
  ];
  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} pagination />
    </div>
  );
}
