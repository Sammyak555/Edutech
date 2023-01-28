import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "../styles/singup.css";
import "../styles/home.css";
import "../styles/Message.css"
import "../styles/Chat.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
export default App;
