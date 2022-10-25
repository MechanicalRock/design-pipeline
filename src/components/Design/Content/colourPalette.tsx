import React from "react";

import {
  Box, Divider, Grid, Stack, Typography, useTheme
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  width: "50px",
  height: "50px",
  borderRadius: "4px",
  marginRight: "8px",
  boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, .06)",
}));

const StyledGrid = styled(Grid)({
  display: "flex",
  paddingTop: "16px",
  paddingLeft: "16px",
});
const StyledTypography = styled(Typography)({
  marginTop: "24px",
  marginBottom: ".35em",
});

export default function ColourPalette() {
  const theme = useTheme();

  return (
    <section id="colourPalette">
      <Typography variant="h2">Colour Palette</Typography>
      <Divider variant="middle" />
      <Box>
        <StyledTypography variant="body1">Primary</StyledTypography>
        <Grid
          container
          spacing={2}
          display="flex"
        >
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "primary.light" }} />
            <Stack>
              <Typography variant="body2">palette.primary.light</Typography>
              <Typography variant="body2">
                {theme.palette.primary.light}
              </Typography>
            </Stack>
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "primary.main" }} />
            <Stack>
              <Typography variant="body2">palette.primary.main</Typography>
              <Typography variant="body2">
                {theme.palette.primary.main}
              </Typography>
            </Stack>
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "primary.dark" }} />
            <Stack>
              <Typography variant="body2">palette.primary.dark</Typography>
              <Typography variant="body2">
                {theme.palette.primary.dark}
              </Typography>
            </Stack>
          </StyledGrid>
        </Grid>
        <StyledTypography variant="body1">Secondary</StyledTypography>
        <Grid
          container
          spacing={2}
          display="flex"
        >
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "secondary.light" }} />
            <Stack>
              <Typography variant="body2">palette.secondary.light</Typography>
              <Typography variant="body2">
                {theme.palette.secondary.light}
              </Typography>
            </Stack>
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "secondary.main" }} />
            <Stack>
              <Typography variant="body2">palette.secondary.main</Typography>
              <Typography variant="body2">
                {theme.palette.secondary.main}
              </Typography>
            </Stack>
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "secondary.dark" }} />
            <Stack>
              <Typography variant="body2">palette.secondary.dark</Typography>
              <Typography variant="body2">
                {theme.palette.secondary.dark}
              </Typography>
            </Stack>
          </StyledGrid>
        </Grid>
        <StyledTypography variant="body1">Error</StyledTypography>
        <Grid
          container
          spacing={2}
          display="flex"
        >
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "error.light" }} />
            <Stack>
              <Typography variant="body2">palette.error.light</Typography>
              <Typography variant="body2">
                {theme.palette.error.light}
              </Typography>
            </Stack>
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "error.main" }} />
            <Stack>
              <Typography variant="body2">palette.error.main</Typography>
              <Typography variant="body2">
                {theme.palette.error.main}
              </Typography>
            </Stack>
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "error.dark" }} />
            <Stack>
              <Typography variant="body2">palette.error.dark</Typography>
              <Typography variant="body2">
                {theme.palette.error.dark}
              </Typography>
            </Stack>
          </StyledGrid>
        </Grid>
        <StyledTypography variant="body1">Warning</StyledTypography>
        <Grid
          container
          spacing={2}
          display="flex"
        >
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "warning.light" }} />
            <Stack>
              <Typography variant="body2">palette.warning.light</Typography>
              <Typography variant="body2">
                {theme.palette.warning.light}
              </Typography>
            </Stack>
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "warning.main" }} />
            <Stack>
              <Typography variant="body2">palette.warning.main</Typography>
              <Typography variant="body2">
                {theme.palette.warning.main}
              </Typography>
            </Stack>
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "warning.dark" }} />
            <Stack>
              <Typography variant="body2">palette.warning.dark</Typography>
              <Typography variant="body2">
                {theme.palette.warning.dark}
              </Typography>
            </Stack>
          </StyledGrid>
        </Grid>

        <StyledTypography variant="body1">Info</StyledTypography>
        <Grid
          container
          spacing={2}
          display="flex"
        >
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "info.light" }} />
            <Stack>
              <Typography variant="body2">palette.info.light</Typography>
              <Typography variant="body2">
                {theme.palette.info.light}
              </Typography>
            </Stack>
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "info.main" }} />
            <Stack>
              <Typography variant="body2">palette.info.main</Typography>
              <Typography variant="body2">{theme.palette.info.main}</Typography>
            </Stack>
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "info.dark" }} />
            <Stack>
              <Typography variant="body2">palette.info.dark</Typography>
              <Typography variant="body2">{theme.palette.info.dark}</Typography>
            </Stack>
          </StyledGrid>
        </Grid>

        <StyledTypography variant="body1">Success</StyledTypography>
        <Grid
          container
          spacing={2}
          display="flex"
        >
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "success.light" }} />
            <Stack>
              <Typography variant="body2">palette.success.light</Typography>
              <Typography variant="body2">
                {theme.palette.success.light}
              </Typography>
            </Stack>
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "success.main" }} />
            <Stack>
              <Typography variant="body2">palette.success.main</Typography>
              <Typography variant="body2">
                {theme.palette.success.main}
              </Typography>
            </Stack>
          </StyledGrid>
          <StyledGrid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item sx={{ backgroundColor: "success.dark" }} />
            <Stack>
              <Typography variant="body2">palette.success.dark</Typography>
              <Typography variant="body2">
                {theme.palette.success.dark}
              </Typography>
            </Stack>
          </StyledGrid>
        </Grid>
      </Box>
    </section>
  );
}
