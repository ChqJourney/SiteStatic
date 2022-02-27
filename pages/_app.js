import "react-quill/dist/quill.snow.css";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import Layout from "../components/layouts/layout";
import { AppWrapper } from "../context/appContext";

function MyApp({ Component, pageProps }) {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.RUN_MODE !== "debug"
  ) {
    console.log = () => {};
  }

  return (
    <UserProvider>
<AppWrapper>

        <Layout>
          <Component {...pageProps} />
        </Layout>
</AppWrapper>
    </UserProvider>
  );
}

export default appWithTranslation(MyApp);
