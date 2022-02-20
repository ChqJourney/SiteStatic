import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SWRConfig } from "swr";
import prisma from "../prisma/instance";
import { BlogBlockContainer } from "../components/blog/blogBlockContainer";


function Blogs({fallback}) {
  console.log(fallback)
  return (
    <SWRConfig value={{fallback}}>
      <BlogBlockContainer/>
    </SWRConfig>
   
  );
}
export async function getStaticProps({locale}) {
  const blogs=await prisma.blog.findMany({where:{createdAt:{gte:new Date("2022-02-17")}}})
 
  // let newBlogs=blogs.map(m=>{m.createdAt=Math.floor(m.createdAt/1000);m.updatedAt=Math.floor(m.updatedAt/1000);return m;})
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'footer','header']),
      fallback:{
        '/api/blogs':{data:blogs}
      }
    },
  };
}
export default Blogs;
