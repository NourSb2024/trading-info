import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from "react";
import Header from "./header";
import ascendingDescendingCellRenderer from "@/cell-renderers/ascending-descending-cell-renderer";
import "../app/globals.scss";

export default function DataGridTableContainer() {
  const [rowData, setRowData] = useState();
  const [colDefs, setColDefs] = useState([
    { field: "broker" },
    { field: "closing_price", headerName: "Closing Price" },
    { field: "currency", valueFormatter: currencyFormatter },
    { field: "date" },
    { field: "high_price", headerName: "High Price" },
    { field: "low_price", headerName: "Low Price" },
    { field: "market" },
    {
      field: "net_change",
      headerName: "Net Change",
      cellRenderer: ascendingDescendingCellRenderer,
    },
    { field: "open_price", headerName: "Open Price" },
    { field: "price" },
    { field: "quantity" },
    { field: "status" },
    { field: "symbol" },
    { field: "transaction_type", headerName: "Transaction Type" },
  ]);

  useEffect(() => {
    fetch("data/trading-data.json")
      .then((response) => response.json())
      .then((data) => {
        setRowData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function currencyFormatter(params) {
    const currencySymbols = {
      USD: "$",
      GBP: "£",
      EUR: "€",
    };
    return currencySymbols[params.value] || params.value;
  }

  return (
    <div>
      <Header headerTitle="Data Ag-grid" />
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // the grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          rowHeight={50}
          headerHeight={50}
        />
      </div>
    </div>
  );
}
