import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { IPBox } from "../../components/tools/ipbox";
import { SWRConfig } from "swr";



export const fetcher=(...args)=>fetch(args).then((res)=>res.json())
export default function IpSearch({fallback}) {
    


  return (
    <div className="container py-10 mx-auto justify-center grid grid-cols-4 gap-4 relative">
      <SWRConfig value={{fallback}}>
      <IPBox/>
      <div className="absolute hidden sm:block bg-lime-100 sm:bg-lime-500 w-48 h-48 left-16 top-64 rounded-full bg-blend-multiply blur-3xl"></div>
        <div className="absolute hidden sm:block bg-amber-100 sm:bg-amber-500 w-36 h-36 right-16 bottom-32 rounded-full bg-blend-multiply blur-2xl"></div>
        <div className="absolute hidden sm:block bg-sky-100 sm:bg-sky-500 w-24  h-24  right-8 top-24 rounded-full bg-blend-multiply blur-2xl"></div>
       
      </SWRConfig>
    </div>
  );
}


export async function getStaticProps({locale}) {
  
    var res=await fetch("https://47.104.61.109/ipwithaddr")
    var clientIp=await res.json()

  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'footer','header']),
     
      fallback:{
        'https://47.104.61.109/ipwithaddr':clientIp
      }
    }
  }
}
