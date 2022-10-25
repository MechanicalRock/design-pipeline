import { LinearProgress } from "@mui/material";
import {
  DataGridPro,
  DataGridProProps,
  LicenseInfo
} from "@mui/x-data-grid-pro";
import { DataTableWrapper } from "./DataTableWrapper";

LicenseInfo.setLicenseKey(
  `${process.env.NEXT_PUBLIC_MUI_DATA_GRID_PRO_LICENSE}`
);

type Props = DataGridProProps & {
  showCellOutline?: boolean;
};

function DataTable(props: Props) {
  return (
    <DataTableWrapper showCellOutline={props.showCellOutline}>
      <div style={{
        display: "flex", width: "100%",
      }}
      >
        <div style={{ flexGrow: 1 }}>
          <DataGridPro
            autoHeight
            components={{
              LoadingOverlay: () => {
                return (
                  <LinearProgress
                    color="secondary"
                    sx={{
                      opacity: 0.8,
                      height: "1px",
                    }}
                  />
                );
              },
            }}
            {...props}
          />
        </div>
      </div>
    </DataTableWrapper>
  );
}

export { DataTable };
