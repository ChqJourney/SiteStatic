import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BlogCreator } from "../../components/blog/blogCreator";
import { useRouter } from "next/router";

function Create() {
  const router=useRouter()
  const {editBlogId}=router.query
  
  return (
  <div className="container mx-auto mt-12 px-4 w-full md:w-8/12 lg:w-6/12">
        
        <BlogCreator id={editBlogId??""}/>
      </div>
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
