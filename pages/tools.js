import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useContext, useState } from "react";
import { SpinButton } from "../components/common/spinButton";
import { generateToast, Toast } from "../components/common/toast";
import { spinnerCore } from "../components/iconInSVG/commonSVG";
import { Modal } from "../components/layouts/modal";
import { ToolCard } from "../components/layouts/toolcard";
import { AppContext, useAppContext } from "../context/appContext";
import tools from "../public/site/tools.json";


function Tools() {
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  return (
    <>
    <Head>
      <title>Tools here</title>
    </Head>
    <div className="container mx-auto mt-12 w-screen h-full min-h-screen flex flex-col px-10">
      <div className="max-w-7xl container mx-auto flex justify-center">

      <div className="grid grid-cols-4 gap-4">
        {tools.map((m,index) => (
          <ToolCard key={m.id} tabIndex={index} tool={m}/>
          ))}
      </div>
          </div>

    </div>
      </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "header"])),
    },
  };
}
export default Tools;
