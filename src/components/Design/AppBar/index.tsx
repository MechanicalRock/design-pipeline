import {
  AppBar as MuiAppBar, Box, Toolbar
} from "@mui/material";

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar
        position="static"
        sx={{ background: "primary.main" }}
        data-testid="appBar"
      >
        <Toolbar>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              height: "2em",
            }}
          >
            <div style={{ display: "flex" }}>Component Library</div>
          </div>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
