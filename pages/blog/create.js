import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BlogCreator } from "../../components/blog/blogCreator";
import { useRouter } from "next/router";
import Script from "next/script";
import Head from "next/head";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

function Create() {
  const router = useRouter();
  const { editBlogId } = router.query;
  return (
    <>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai-sublime.min.css"/>
<Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></Script> 
     */}
      <div className="container mx-auto mt-12 px-4 w-full sm:w-10/12 md:w-9/12 lg:w-8/12">
        <BlogCreator id={editBlogId ?? ""} />
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "header"])),
    },
  };
};
export default withPageAuthRequired(Create);
