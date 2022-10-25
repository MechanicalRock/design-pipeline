import Head from "next/head";
import { useEffect } from "react";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from "../emotion";

import theme from "../styles/ThemeConfig";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { LeftNavProvider } from "../providers/LeftNavProvider";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  title?: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  useEffect(
    () => {
    // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      jssStyles?.parentElement?.removeChild(jssStyles);
    },
    []
  );

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const Content = getLayout(<Component {...pageProps} />);
  const documentTitle = "Design Pipeline | Mechanical Rock";

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{documentTitle}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <ScrollToTopAfterPageLoad />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div id="back-to-top-anchor" />
        <LeftNavProvider><>{Content}</></LeftNavProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

function ScrollToTopAfterPageLoad(): JSX.Element {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  });

  return <></>;
}
