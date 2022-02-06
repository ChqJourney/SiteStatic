import  Layout from "../components/layouts/layout";

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
    ssr: false,
    loading: () => <p>Loading ...</p>,
    })

const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]

function Blogs({ menus }) {
    const [value, setValue] = useState('');

  return (
    <Layout menus={menus}>
    <div className="container mx-auto mt-12">
        
   <QuillNoSSRWrapper className=" m-6 h-screen" value={value} onChange={e=>console.log(e)}
   modules={modules} formats={formats}  theme="snow"></QuillNoSSRWrapper>
    </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const fs = require("fs");
  var file1 = await fs.readFileSync("./Users/site.json", "utf-8");
  var menus=JSON.parse(file1)
  return {
    props: {
      menus:menus
    }, 
  };
}
export default Blogs