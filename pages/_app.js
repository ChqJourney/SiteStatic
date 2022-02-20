import 'react-quill/dist/quill.snow.css'
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import Layout from "../components/layouts/layout";

function MyApp({ Component, pageProps }) {
  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
  }
  
  return (
    <UserProvider>
      <Layout>

      <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default appWithTranslation(MyApp);
