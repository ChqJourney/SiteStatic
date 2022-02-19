import Layout from "../../components/layouts/layout";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

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

function Create({ menus }) {
  const router=useRouter()
  const [blog, setBlog] = useState({ title: "", keywords: "", content: "",createdBy:"patrick" });
  const handleArticle = async (e) => {
    e.preventDefault();
    console.log(blog);
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if(response.ok){
      const res=await response.json()
      console.log(res)
      
    }
  };
  const clearAction=()=>setBlog({title:'',keywords:'',content:'',createdBy:'patrick'})
 
  return (
    <Layout menus={menus}>
      <div className="container mx-auto mt-12 px-2 w-full md:w-10/12 lg:w-8/12">
        <p className="text-2xl font-medium text-center">Create your new blog</p>
        <div className="flex flex-col" >
          <label>your blog title</label>
          <input
            type="text" value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            className="h-8 border pl-1 border-slate-300 rounded-md"
            placeholder="blog title"
          ></input>
          <label>your blog key words</label>
          <input
            type="text" value={blog.keywords}
            onChange={(e) => setBlog({ ...blog, keywords: e.target.value })}
            className="h-8 border border-slate-300 rounded-md pl-1"
            placeholder="blog key words"
          ></input>
          <label className="mb-4">main content</label>
          <div className="border border-slate-300 rounded-md">
            <QuillNoSSRWrapper
              className="h-[400px]"
              value={blog.content}
              onChange={(e) => setBlog({ ...blog, content: e })}
              modules={modules}
              formats={formats}
              placeholder="write your blog here..."
              theme="snow"
            ></QuillNoSSRWrapper>
          </div>
          <div className="flex">
            <button className="mt-10 w-36 lg:w-48 btn-secondary mx-auto" onClick={clearAction}>
              Clear
            </button>
            <button onClick={async(e)=>await handleArticle(e)}
              className="mt-10 w-36 lg:w-48 btn-color mx-auto"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const fs = require("fs");
  var file1 = await fs.readFileSync("./Users/site.json", "utf-8");
  var menus = JSON.parse(file1);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "header"])),
      menus: menus,
    },
  };
}
export default Create;
