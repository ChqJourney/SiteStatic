import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import React from "react";
import 'react-quill/dist/quill.snow.css'

function MyApp({ Component, pageProps }) {
  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
  }
  console.log(process.env.NODE_ENV);
  return (
      <Component {...pageProps} />
  );
}

export default appWithTranslation(MyApp);
