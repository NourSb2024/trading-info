import { CustomCellRendererProps } from "@ag-grid-community/react";
import React from "react";
import AscendingIcon from "../../public/icons/ascending-icon";
import DescendingIcon from "../../public/icons/descending-icon";

export default (params: CustomCellRendererProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {params.value}
      {params.value > 0 ? <AscendingIcon /> : <DescendingIcon />}
    </div>
  );
};
