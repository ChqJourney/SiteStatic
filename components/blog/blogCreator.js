import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ReactHtmlParser from 'html-react-parser'
import useSWR from 'swr';
import { fetcher } from '../../pages/misc/ipsearch';
import { CircleSpinner } from '../layouts/spinner';
 
const QuillNoSSRWrapper =
  typeof window === "object"
    ? dynamic(import("react-quill"), {
        ssr: false,
      })
    : () => false;

const modules = {
  syntax:true,
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],   // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'align': [] }],
  [{ 'size': ['small', false, 'large', 'huge'] }], 
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  ['image'],
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
  "script",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "color",
  "background",
  "bullet",
  "indent",
  "align",
  "link",
  "image",
  "video",
];

export const BlogCreator=({id})=>{
  console.log(id)
    const [blog, setBlog] = useState({ title: "", keywords: "", content: "",createdBy:"patrick" });
    // const {data,err}=useSWR(['/api/blog',id],fetcher)
    useEffect(()=>{
        const getBlog=async(id)=>{
          if(id){

            console.log(id)
              const response=await fetch(`/api/blog?id=${id}`)
              if(response.ok){
                  const res=await response.json()
                  setBlog(res.data)
                  console.log(res.data)
              }
          }
        }
          getBlog(id)
       
    },[])
    const router=useRouter()
  const handleArticle = async (e) => {
    e.preventDefault();
    console.log(blog)
    const response = await fetch("/api/blog", {
      method: id?"PUT":"POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if(response.status===201){
      console.log('create finish')
      const location=response.headers.get('location')
      router.push(location)
    }else if(response.status===204){
        console.log('modify finish')
        const location=response.headers.get('location')
        router.push(location)
    }else{
        console.log('fail')
    }
    
  };
  const clearAction=()=>setBlog({})
  const preview=useRef() 
    return (
        <>
        <p className="text-2xl font-medium text-center">{id?"Edit your blog":"Create your new blog"}</p>
        <div className="flex flex-col" >
        <label className="text-xl mb-2">Your blog title</label>
        <input
          type="search" value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          className="h-10 border mb-2 outline-0 focus:ring-1 focus:ring-orange-400 pl-1 border-slate-300 rounded-md"
          placeholder="blog title"
        ></input>
        <label className="text-xl mb-2">Your blog key words</label>
        <input
          type="text" value={blog.keywords}
          onChange={(e) => setBlog({ ...blog, keywords: e.target.value })}
          className="h-10 border outline-0 focus:ring-1 focus:ring-orange-400 border-slate-300 rounded-md pl-1"
          placeholder="blog key words"
        ></input>
        <label className="text-xl mb-2">Main content<span className="text-sm">(title not neccessary to repeat)</span><span className=" cursor-pointer text-sm text-orange-400 mx-4" onClick={()=>window.scrollTo(0,preview?.current.offsetTop||0)}>check preview</span></label>
        <div className=" min-h-fit relative h-[450px]">
          <QuillNoSSRWrapper 
            className="h-[400px] absolute border-gray-50 top-0 max-h-full w-full"
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
            {id?"Update":"Save"}
          </button>
        </div>
      </div>
       <div className="h-64 mt-20 container mx-auto">
       <div className="text-2xl font-medium text-center" ref={preview}>Preview mode</div>
     <div className="ql-editor">{(ReactHtmlParser(blog.content))}</div>
     </div> 
     </>
    )
}