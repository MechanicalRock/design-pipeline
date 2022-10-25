import { styled } from "@mui/material/styles";

export const TextLink = styled("span")(({ theme }) => ({
  textDecoration: "underline",
  cursor: "pointer",
  color: theme.palette.secondary.main,
}));
