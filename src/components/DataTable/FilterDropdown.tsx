import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent
} from "@mui/material";
import React from "react";

type Props = {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (event: SelectChangeEvent<string[]>) => void;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export function FilterDropdown({
  label,
  options,
  selectedValues,
  onChange,
}: Props) {
  const [ paddingTop, setPaddingTop ] = React.useState(0.7);
  const [ paddingLeft, setPaddingLeft ] = React.useState(1);
  const MenuProps = React.useMemo(
    () => ({
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * (options.length + 1) + ITEM_PADDING_TOP,
          width: "16em",
        },
      },
    }),
    [options.length]
  );
  return (
    <FormControl
      sx={{
        width: "16em",
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "#E0E0E0 !important" },
          "&:hover fieldset": { borderColor: "#E0E0E0 !important" },
          "&.Mui-focused fieldset": { borderColor: "#E0E0E0 !important" },
        },
      }}
    >
      <InputLabel
        id={`${label.replaceAll(" ", "-").toLowerCase()}-label`}
        sx={{
          color: "#606060",
          fontSize: "0.8em",
          pt: paddingTop,
          pl: paddingLeft,
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId={`${label.replaceAll(" ", "-").toLowerCase()}-label`}
        id={`${label.replaceAll(" ", "-").toLowerCase()}`}
        multiple
        value={selectedValues}
        onChange={onChange}
        onFocus={() => {
          setPaddingTop(0);
          setPaddingLeft(2);
        }}
        onBlur={() => {
          setPaddingTop(0.65);
          setPaddingLeft(1);
        }}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => (
          <Box sx={{
            display: "flex", flexWrap: "wrap", gap: 0.5,
          }}
          >
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                size="small"
              />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {options.map((item) => (
          <MenuItem
            key={item}
            value={item}
          >
            <Checkbox checked={selectedValues.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
