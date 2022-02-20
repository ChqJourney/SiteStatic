import { ClipCanvas } from "../../components/tools/clipCanvas";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Photo(){

    return (
            <ClipCanvas className="h-screen"/>
    )
}


export async function getStaticProps({locale}) {
    
    return {
      props: {
        ...await serverSideTranslations(locale, ['common', 'footer','header']),
      }, 
    }
  }