import Head from "next/head";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import GetAuthWrapper from "../wrapper/getAuthWrapper";
import { Footer } from "./footer";
import { Header } from "./header";



function Layout({ children }) {
  return (
    <>
      <Header/>
      <main className=" min-h-min">{children}</main>
      <Footer/>
    </>
  )
}
export default Layout