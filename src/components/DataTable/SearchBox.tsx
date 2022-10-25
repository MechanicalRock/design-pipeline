import {
  IconButton, SxProps, TextField
} from "@mui/material";
import { Search as SearchIcon, Clear as ClearIcon } from "@mui/icons-material";
import React from "react";
import { styled } from "@mui/material/styles";

type Props = {
  searchText: string;
  setSearchText: (searchText: string) => void;
  sx?: SxProps;
};

const StyledTextField = styled(TextField)({
  m: "1em 0.5em 1.5em -0.7em",
  "& .MuiSvgIcon-root": { mr: 0.5 },
  "& .MuiInput-underline:before": {
    borderBottom: 1,
    borderColor: "divider",
  },
  "& input::placeholder": {
    color: "#606060",
    opacity: 1,
    fontSize: "0.8rem",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#E0E0E0 !important" },
    "&:hover fieldset": { borderColor: "#E0E0E0 !important" },
    "&.Mui-focused fieldset": { borderColor: "#E0E0E0 !important" },
  },
  "& .MuiOutlinedInput-input": { paddingLeft: "1rem" },
  width: "auto",
});

export function SearchBox({ searchText, setSearchText, sx }: Props) {
  return (
    <StyledTextField
      variant="outlined"
      value={searchText}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setSearchText(event.target.value)
      }
      placeholder="Search…"
      InputProps={{
        endAdornment: (
          <>
            {searchText.length > 0 ? (
              <IconButton
                title="Clear"
                aria-label="Clear"
                size="small"
                style={{ visibility: searchText ? "visible" : "hidden" }}
                onClick={() => setSearchText("")}
              >
                <ClearIcon
                  fontSize="small"
                  sx={{ color: "#606060" }}
                />
              </IconButton>
            ) : (
              <SearchIcon
                fontSize="small"
                sx={{ color: "#606060" }}
              />
            )}
          </>
        ),
        style: {
          fontSize: "0.8em",
          color: "#606060",
          height: "3rem",
        },
      }}
      sx={{
        width: {
          sx: 1,
          sm: "16em",
        },
        ...sx,
      }}
      data-testid="search-box"
    />
  );
}
