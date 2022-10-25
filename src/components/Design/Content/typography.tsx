import React from "react";

import {
  Divider, Link, Typography
} from "@mui/material";

export default function TypographyText() {
  return (
    <section id="typography">
      <Typography variant="h2">Typography</Typography>
      <Divider variant="middle" />
      <Typography variant="h1">H1 Headline</Typography>
      <Typography variant="h2">H2 Headline</Typography>
      <Typography variant="h3">H3 Headline</Typography>
      <Typography variant="h4">H4 Headline</Typography>
      <Typography variant="h5">H5 Headline</Typography>
      <Typography variant="h6">H6 Headline</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="caption">Caption</Typography>
      <br />
      <Typography variant="button">button</Typography>
      <br />
      <Typography variant="overline">OVERLINE</Typography>
      <br />
      <Typography variant="link">
        <Link color="inherit">Link</Link>
      </Typography>
    </section>
  );
}
