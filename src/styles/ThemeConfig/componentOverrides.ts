import { Components } from "@mui/material/styles";
import { colourPalette } from "./colourPalette";

export const componentOverrides: Components = {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: "LeagueGothic";
        src: url("/fonts/LeagueGothic-Regular.otf");
        font-style: normal;
        font-weight: normal;
        font-display: swap;
      }
      html: {
        scrollBehavior: "smooth";
      }
      body: {
        padding: 0;
        margin: 0;
        fontFamily: "sans-serif";
      }
      strong: {
        fontFamily: "sans-serif";
      }
      a: {
        color: "inherit";
        textDecoration: "none";

        "&:hover, &:focus": {
          textDecoration: "underline";
        }
      }
      ul: {
        '&[data-bullet="false"]': {
          listStyle: "none";
          padding: 0,
        }
      }
      p.MuiTypography-body1 {
        margin-bottom: 1.5rem;
      }
      input:-webkit-autofill: {
        boxShadow: "0 0 0 50px white inset";
        margin: "0.1em";
        textFillColor: ${colourPalette.text.primary},
      }
      input:-internal-autofill-selected: {
        box-shadow: 0 0 0px 1000px #ffffff inset;
        z-index: 0;
      }
      [color=white] {
        color: #FFF;
      }
      ul {
        margin: 1rem 0;
        text-align: left;
      }
    `,
  },
  MuiLink: { defaultProps: { underline: "hover" } },
  MuiMobileStepper: {
    styleOverrides: {
      root: {
        margin: "2em -1.5em -1em",
        borderRadius: "0 0 1em 1em",
      },
    },
  },
  MuiTypography: { defaultProps: { variantMapping: { body2: "span" } } },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: colourPalette.primary.main,
        padding: "1em",
        fontSize: "0.8em",
      },
      arrow: { color: colourPalette.primary.main },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        minWidth: "none",
      },
      sizeLarge: {
        height: "3rem",
        fontSize: "1.125em",
      },
      contained: {
        backgroundColor: colourPalette.primary.main,
        color: "#FFF",

        "&.white": {
          backgroundColor: "#FFF",
          color: colourPalette.primary.main,
        },
      },
      containedSecondary: {
        backgroundColor: colourPalette.secondary.main,
        color: "#FFF",
      },
    },
  },
  MuiListItemText: { styleOverrides: { root: { "& > span": { fontSize: "0.875rem" } } } },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: "2em",
        alignItems: "center",
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: "0.2em",
        transition: "background-color 0.2s",

        "&:focus, &:hover": {
          borderRadius: "0.2em",
          backgroundColor: "#506E84",
        },

        "& .MuiBadge-root": {
          width: "100%",
          "& .MuiBadge-badge": {
            top: "50%",
            right: "0.5em",
            fontSize: "0.9em",
            padding: "0.5em",
            fontWeight: "bold",
            height: "2em",
            width: "2em",
            borderRadius: "50%",
          },
        },

        "& button": { padding: 0 },
      },
    },
  },
  MuiRadio: { styleOverrides: { root: { "& .MuiSvgIcon-root": { color: colourPalette.primary.main } } } },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        "&.with-card span:nth-child(2)": {
          width: "100%",
          marginBottom: "0.5em",
        },
      },
    },
  },
  MuiTable: { styleOverrides: { root: { borderColor: "pink" } } },
  MuiTab: {
    styleOverrides: {
      root: {
        color: colourPalette.primary.main,
        textTransform: "none",
        fontSize: "1rem",
        letterSpacing: "0.044em",
        marginRight: "0.625em",

        "&.Mui-selected": { color: "#39B44A" },
      },
      selected: {},
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        height: "0.2em",
        backgroundColor: "#39B44A",
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      message: {
        textAlign: "left",
        fontSize: "14px",
        "& > span": { wordBreak: "break-word" },
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        zIndex: 0,
        // color: "#3C3C3C",
        "&.MuiSvgIcon-colorSuccess": { color: colourPalette.success.main },
        "&.MuiSvgIcon-secondary": { color: "#0D6EFDC9" },
      },
    },
  },
  MuiFormHelperText: { styleOverrides: { root: { "&.Mui-error": { fontSize: "0.7em" } } } },
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&:hover, &:focus, & fieldset": { borderColor: "#757575 !important" },
        "&.Mui-error fieldset": { borderColor: "#d32f2f !important" },
        "& .MuiInputAdornment-root p": { marginBottom: "0 !important" },
      },
      hiddenLabel: { "& fieldset legend": { display: "none" } },
      input: {
        zIndex: 1,

        "&:-webkit-autofill": {
          boxShadow: "0 0 0px 1000px #ffffff inset",
          zIndex: 0,
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: "#777",
        fontSize: "0.9em",
        transform: "translate(0.8em, 0.8em) scale(1)",

        "&.Mui-focused, &[data-shrink=true]": {
          color: "#777",
          transform: "translate(0.8em, -0.6em) scale(0.75)",
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: { padding: "0.8em 0.5em" },
      colorSecondary: { "& fieldset": { backgroundColor: "#FFF" } },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      colorPrimary: {
        color: "#9E9E9E",

        "&.Mui-checked": { color: colourPalette.primary.main },
      },
      colorSecondary: {
        color: "#FFF",

        "&.Mui-checked": { color: "#FFF" },
      },
    },
  },
};
