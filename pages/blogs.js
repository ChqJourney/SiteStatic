import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Layout from '../components/layouts/layout'

const QuillNoSSRWrapper =
  typeof window === "object"
    ? dynamic(import("react-quill"), {
        ssr: false,
      })
    : () => false;

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

function Blogs({ menus,posts }) {
  const [value, setValue] = useState("");
  // let QuillNoSSRWrapper
  // if(typeof window !== 'undefined'){

  // }
  return (
    <Layout menus={menus}>
      <div className="container mx-auto mt-12 ">
         {posts.map(p=>(
             <div key={p.id}>{p.title}</div>
         ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps({locale}) {
  const fs = require("fs");
  var file1 = await fs.readFileSync("./Users/site.json", "utf-8");
  var menus = JSON.parse(file1);
  let recentPosts=[]
  if(process.env.NODE_ENV==='production'){

      // var response=await fetch('')
      // recentPosts=await response.json()
  }else{
      recentPosts=
      [
          {id:1,title:"adfadf",content:"adfadfadfadfafdadf"},
          {id:2,title:"adfadf",content:"adfadfadfadfafdadf"},
          {id:3,title:"adfadf",content:"adfadfadfadfafdadf"},
    ]
  }
  return {
    props: {
      menus: menus,
      posts:recentPosts,
      ...await serverSideTranslations(locale, ['common', 'footer','header']),
    },
  };
}
export default Blogs;
