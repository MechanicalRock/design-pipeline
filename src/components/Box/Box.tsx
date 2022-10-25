import { Box as MuiBox } from "@mui/material";
import { styled } from "@mui/material/styles";

const Box = styled(MuiBox)({
  padding: "1em",
  border: "1px solid #E0E0E0",
  borderRadius: 4,
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,

  "& .MuiTypography-overline": { color: "#767676" },
});

export { Box };
