import dynamic from "next/dynamic";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ReactHtmlParser from 'html-react-parser'


const QuillNoSSRWrapper =
  typeof window === "object"
    ? dynamic(import("react-quill"), {
        ssr: false,
      })
    : () => false;

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'align': [] }],
  [{ 'size': ['small', false, 'large', 'huge'] }], 
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  ['clean']     
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
  "code-block",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "align",
  "link",
  "image",
  "video",
];

function Create() {
  const [blog, setBlog] = useState({ title: "", keywords: "", content: "",createdBy:"patrick" });
  const handleArticle = async (e) => {
    e.preventDefault();
    console.log(blog);
    console.log(ReactHtmlParser(blog.content))
    // const response = await fetch("/api/blog", {
    //   method: "POST",
    //   body: JSON.stringify(blog),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // });
    // if(response.ok){
    //   const res=await response.json()
    //   console.log(res)
      
    // }
  };
  const clearAction=()=>setBlog({title:'',keywords:'',content:'',createdBy:'patrick'})
 
  return (
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
              defaultValue={blog.content}
              onChange={(content, delta, source, editor) => setBlog({ ...blog, content: content })}
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
        <div className="h-64 container mx-auto">
        <div className="ql-editor">{(ReactHtmlParser(blog.content))}</div>
        </div> 
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
