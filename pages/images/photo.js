import Layout from "../../components/layouts/layout";
import { ClipCanvas } from "../../components/tools/clipCanvas";

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Photo({menus}){

    return (
        <Layout menus={menus}>

            <ClipCanvas className="h-screen"/>
        </Layout>
    )
}


export async function getServerSideProps({locale}) {
    const fs=require('fs')
    var file=await fs.readFileSync('./Users/site.json','utf-8')
  
      var jsObj=JSON.parse(file)
      console.log(jsObj)
    return {
      props: {
        ...await serverSideTranslations(locale, ['common', 'footer','header']),
        menus:jsObj
      }, // will be passed to the page component as props
    }
  }