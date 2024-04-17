import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from "react";
import Header from "./header";

export default function DataGridTableContainer() {
  const [rowData, setRowData] = useState();
  const [colDefs, setColDefs] = useState([
    { field: "broker" },
    { field: "closing_price" },
    { field: "currency" },
    { field: "date" },
    { field: "high_price" },
    { field: "low_price" },
    { field: "market" },
    { field: "net_change" },
    { field: "open_price" },
    { field: "price" },
    { field: "quantity" },
    { field: "status" },
    { field: "symbol" },
    { field: "transaction_type" },
  ]);

  useEffect(() => {
    fetch("data/trading-data.json")
      .then((response) => response.json())
      .then((data) => {
        setRowData(data);
        console.log("toto", data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
