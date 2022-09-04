import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "@/utils";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
