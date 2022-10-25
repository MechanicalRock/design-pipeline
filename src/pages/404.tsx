import {
  Button, Stack, Typography, Box
} from "@mui/material";
import React from "react";
import Link from "next/link";
import { DesignWrapper } from "../layouts/design";

export default function PageNotFound() {
  return (
    <>
      <Stack
        direction="column"
        padding="2em"
        alignItems="center"
        textAlign="center"
        width="100%"
      >
        <Box
          sx={{
            fontSize: "8rem",
            fontWeight: "bold",
            color: "#8999",
          }}
        >
          404
        </Box>
        <Typography variant="h1">Opps! This page could not be found</Typography>
        <Link
          href="/"
          passHref
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
          >
            Go to Homepage
          </Button>
        </Link>
      </Stack>
    </>
  );
}

PageNotFound.getLayout = DesignWrapper;
PageNotFound.title = "Page not found";
