import Layout from "../../components/layouts/layout"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";


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
  const [value, setValue] = useState("");
  // let QuillNoSSRWrapper
  // if(typeof window !== 'undefined'){

  // }
  return (
    <Layout menus={menus}>
      <div className="container mx-auto mt-12 ">
          <p className="text-2xl font-medium text-center">Create your new blog</p>
        <form className="grid grid-flow-row auto-rows-max hover:auto-rows-min m-6">
          <label>your blog title</label>
          <input type="text" className=" border-2 pl-1 shadow-sm shadow-purple-400"  placeholder="blog title"></input>
          <label>your blog key words</label>
          <input type="text" className=" border-2 pl-1 shadow-sm shadow-purple-400"  placeholder="blog key words"></input>
          <label>main content</label>
          <QuillNoSSRWrapper
            className="h-[500px] border-2 mt-1 pl-1 shadow-sm shadow-sky-400"
            value={value}
            onChange={(e) => console.log(e)}
            modules={modules}
            formats={formats}
            placeholder="write your blog here..."
            theme="bubble"
          ></QuillNoSSRWrapper>
          <div className="flex">
          <button className="mt-10 btn-secondary mx-auto">Clear</button>
          <button className="mt-10 btn-color mx-auto">Save</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const fs = require("fs");
  var file1 = await fs.readFileSync("./Users/site.json", "utf-8");
  var menus = JSON.parse(file1);
  return {
    props: {
      menus: menus,
    },
  };
}
export default Create;
