import { ChakraProvider } from "@chakra-ui/react";
import AppContext from "../context/AppContext";
import Web3 from "web3";
import { useState, useEffect } from "react";
import theme from "../styles/theme";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <AppContext.Provider
        value={{
          state: {
          },
        }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
