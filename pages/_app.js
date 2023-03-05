// import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout/>
        <GlobalStyle />
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
    </>
  );
}

export default MyApp;