import { Theme } from "@material-ui/core";

// // import original module declarations
// import "styled-components";
// // import your custom theme
// import theme from "./src/styles/theme";

// extend the module declarations using custom theme type

declare module "@material-ui/styles" {
  export interface DefaultTheme extends Theme {}
}
