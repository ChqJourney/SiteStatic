import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function ResizeImg({menus}){
    return (

      <div className="text-center">

        Resize imgage
      </div>

    )
}

    
export async function getStaticProps({locale}) {
   
    return {
      props: {
        ...await serverSideTranslations(locale, ['common', 'footer','header']),
       
      }, 
    }
  }