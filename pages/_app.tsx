import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>HH 2023</title>
      </Head>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme={
          new Date().getHours() >= 18 || new Date().getHours() <= 6
            ? "dark"
            : "light"
        }
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}
