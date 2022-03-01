import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SWRConfig } from "swr";
import prisma from "../../prisma/instance";
import { BlogBlockContainer } from "../../components/blog/blogBlockContainer";
import { useAppContext } from "../../context/appContext";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";


function Edit({fallback}) {
  const {state,dispatch}=useAppContext()
  const {user}=useUser()
  return (
    <SWRConfig value={{fallback}}>
      <div className="text-3xl font-semibold text-center mt-20">Recently blogs</div>
      <BlogBlockContainer user={user??null}/>
    </SWRConfig>
   
  );
}
export async function getStaticProps({locale}) {
  const blogs=await prisma.blog.findMany({where:{createdAt:{gte:new Date("2022-02-17")},isPreview:false}})
 
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
export default withPageAuthRequired(Edit);
