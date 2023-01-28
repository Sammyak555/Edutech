import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "../styles/singup.css";
import "../styles/home.css";
import "../styles/Message.css"
import "../styles/Chat.css";

import {BrowserRouter} from 'react-router-dom'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Provider } from "react-redux";
import store from "../Redux/store";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider>
      <Navbar />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </ChakraProvider>
  );
}
export default App;
