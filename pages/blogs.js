import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SWRConfig } from "swr";
import prisma from "../prisma/instance";
import { BlogBlockContainer } from "../components/blog/blogBlockContainer";
import { useAppContext } from "../context/appContext";
import { generateToast } from "../components/common/toast";


function Blogs({fallback}) {
  const {state,dispatch}=useAppContext()
  return (
    <SWRConfig value={{fallback}}>
      <div className="text-3xl font-semibold text-center mt-20">Recently blogs</div>
      <BlogBlockContainer/>
      
    </SWRConfig>
   
  );
}
export async function getStaticProps({locale}) {
  const blogs=await prisma.blog.findMany({where:{createdAt:{gte:new Date("2022-02-17")},isPreview:false}})
//  console.log(blogs)
  // let newBlogs=blogs.map(m=>{m.createdAt=Math.floor(m.createdAt/1000);m.updatedAt=Math.floor(m.updatedAt/1000);return m;})
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'footer','header']),
      fallback:{
        '/api/blogs?pageIndex=1&pageSize=5':{data:blogs}
      }
    },
  };
}
export default Blogs;
