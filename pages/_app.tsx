import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { GlobalStyle } from "../styles/global-styles";
import NextNProgressProps from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import { useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
        <Layout toggle={toggle} setToggle={setToggle}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>NextJs</title>
          </Head>
          <NextNProgressProps
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
            showOnShallow={true}
          />

          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
