import React from "react";
import { Box } from "@mui/material";
import { COLOURS } from "../../styles/ThemeConfig/colourPalette";
import { styled } from "@mui/material/styles";

const GridOverlay = styled("div")({
  flexGrow: 1,
  "& .MuiDataGrid-overlay": { top: "calc(50% + 4em) !important" },
});

const BoxWrapper = styled(Box)({
  "&[data-celloutline=false]": {
    "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus & .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus":
      { outline: "none !important" },
  },
  "&[data-celloutline=true]": {
    "& .MuiDataGrid-cell": {
      borderRight: "1px solid #e0e0e0",

      "&:hover": {
        color: COLOURS.primary.main,
        outline: "1px solid #00000050",
        outlineOffset: "-1px",
      },
      "&:last-child": { borderRight: "0" },
    },
  },
  "& .row-clickable [role=row]": { cursor: "pointer" },
  "& .MuiDataGrid-columnSeparator": { visibility: "hidden" },
});

export const DataTableWrapper: React.FC<{ showCellOutline?: boolean }> = ({
  children,
  showCellOutline,
}) => {
  return (
    <BoxWrapper data-celloutline={!!showCellOutline}>
      <div
        style={{
          display: "flex", width: "100%",
        }}
        data-testid="data-table"
      >
        <GridOverlay>{children}</GridOverlay>
      </div>
    </BoxWrapper>
  );
};
