import Global from "@/styles/global";
import { AppProps } from "next/app";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store, storeProvider } from "../contexts/store";
import { Header } from "@/components/Header";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { PersistGate } from "redux-persist/integration/react";
import { Loader } from "@/components/Loader";
import { Footer } from "@/components/Footer";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.45,
};

const paypalOptions: PayPalScriptOptions = {
  "client-id": `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`,
  currency: "BRL",
};

const AnimationLayout = ({ children }: any) => {
  const { asPath } = useRouter();
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={asPath}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={storeProvider}>
        <PayPalScriptProvider options={paypalOptions}>
          <ThemeProvider theme={theme}>
            <Global />
            <Header />
            <AnimationLayout>
              <Component {...pageProps} />
            </AnimationLayout>
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  marginTop: "6%",
                  marginRight: "1%",
                  fontSize: 14,
                },
              }}
            />
          </ThemeProvider>
        </PayPalScriptProvider>
      </PersistGate>
    </Provider>
  );
}
