import React, { useEffect } from "react";
import "../styles/globals.css";
import "@esri/calcite-components/dist/calcite/calcite.css";

/**  ReferenceError: window is not defined */
// import { defineCustomElements} from "@esri/calcite-components";
// defineCustomElements(window, {
//   resourceUrl: location.href,
// })

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("@esri/calcite-components/dist/loader").then(
      ({ defineCustomElements }) =>
        defineCustomElements(window, {
          resourceUrl: location.href,
        })
    );
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
