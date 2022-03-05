// import { PrismaClient } from "@prisma/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router"
import useSWR, { SWRConfig, unstable_serialize } from "swr";
import { BlogViewer } from "../components/blog/blogViewer";
import prisma from "../prisma/instance";



const Blog=({fallback})=>{
  const router=useRouter()
  const {id}=router.query;
  console.log(id)
    return (
      <SWRConfig value={{fallback}}>
        <BlogViewer id={id}/>
        <div className="flex mt-10 justify-center items-center">
          <Link passHref href="/blogs">
            <a href="#" className="font-serif text-gray-600 hover:text-sky-600">
              {" "}
              return to blog list
            </a>
          </Link>
        </div>
      </SWRConfig>
    )
}

export default Blog

export async function getServerSideProps({locale,query}) {
  const {id}=query
  const blog=await prisma.blog.findFirst({where:{id:id}})
  console.log(blog)
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'footer','header']),
      fallback:{
        [unstable_serialize(['/api/blog',id])]:{data:blog}
      }
    },
  };
}

