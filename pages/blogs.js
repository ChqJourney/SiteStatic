import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Layout from '../components/layouts/layout'


function Blogs({ menus,posts }) {
  
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
