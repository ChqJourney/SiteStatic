import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import React from "react";
import 'react-quill/dist/quill.snow.css'
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
  }
  
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default appWithTranslation(MyApp);
