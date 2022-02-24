import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BlogCreator } from "../../components/blog/blogCreator";
import { useRouter } from "next/router";
import Script from "next/script";
import Head from "next/head";

function Create() {
  const router=useRouter()
  const {editBlogId}=router.query
  console.log(editBlogId)
  return (
    <>
    
    {/* <Head> */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai-sublime.min.css"/>
<Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></Script>
    {/* </Head> */}
  <div className="container mx-auto mt-12 px-4 w-full sm:w-10/12 md:w-9/12 lg:w-8/12">
        
        <BlogCreator id={editBlogId??""}/>
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
export default Create;
