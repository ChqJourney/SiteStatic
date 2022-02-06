import Head from "next/head";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import GetAuthWrapper from "../wrapper/getAuthWrapper";



function GlobalLayout({ children }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    </Head>
      <main className=" min-h-min">{children}</main>
    </>
  )
}
export default GetAuthWrapper(GlobalLayout)