import "../styles/styles.css";
import dynamic from "next/dynamic";
import React from "react";
import { ThemesLayer } from "../design-system/themes";

function App({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <>
      <ThemesLayer defaultType={"light"} defaultLayer={1}>
        {getLayout(<Component {...pageProps} />)}
      </ThemesLayer>
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
