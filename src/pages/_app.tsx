import "@/styles/globals.css";
import "components/navbar/navbar.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
