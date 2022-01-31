import Head from "next/head";
import { useState } from "react";
import { Footer } from "./footer";
import { Header } from "./header";



export default function Layout({ children }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    </Head>
      <Header/>
      <main className=" min-h-min">{children}</main>
      <Footer/>
    </>
  )
}