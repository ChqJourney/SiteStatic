import Head from "next/head";
import Layout from "../components/layouts/layout";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import heroImg from "/public/assets/hero-img.jpeg"
import ip from '/public/assets/ipsearch.png'
import { Router } from "next/router";
import Image from "next/image";

function Home({menus}) {
  const {t}=useTranslation('common')
  
  return (
    <Layout menus={menus}>
      <Head>
        <title>{t('windowTitle',{page:'Home'})}</title> 
      </Head>
      <div className="relative w-screen h-screen">
        <div className="max-w-7xl mx-auto bg-transparent">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
           
            <div className="w-full mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                  <span className="block xl:inline">
                    {t('herotitle1')}
                  </span>
                  <span className="block text-indigo-600 mx-2 xl:inline">
                  {t('herotitle2')}
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {t('heroDescription')}
                </p>
                <div className="mt-5 sm:mt-28 sm:flex sm:justify-center lg:justify-start">
                  <button className="btn-color mx-4 my-2">{t('startBtn')}</button>
                 
                  <button className="btn-secondary mx-4 my-2">{t('tutorialBtn')}</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 z-0 w-full lg:right-0 lg:w-1/2">
          <Image src={heroImg} alt="hero image" className="w-full rounded-full" layout="responsive"></Image>
       
      </div>
      </div>
      {/* <div className="w-96 h-48">
        <Image src={ip} className="" alt="ip search pic"></Image>
      </div> */}
      <div className="absolute bg-lime-500 w-48 h-48 left-24 top-64 rounded-full bg-blend-multiply blur-3xl"></div>
        <div className="absolute bg-amber-500 w-24 h-24  sm:w-48 sm:h-48 my-auto mx-auto left-0 right-0 top-0 bottom-0 rounded-full bg-blend-multiply blur-2xl"></div>
        <div className="absolute bg-sky-500 w-24 sm:w-72 h-24 sm:h-72 left-48 top-36 rounded-full bg-blend-multiply blur-2xl"></div>
    </Layout>
  );
}



export default Home

export const getServerSideProps=async({locale})=>{
  const fs=require('fs')
  var file=await fs.readFileSync('./Users/site.json','utf-8')

    var jsObj=JSON.parse(file)
    console.log(jsObj)
  return {
    props: {
      ...await serverSideTranslations(locale, ['common', 'footer','header']),
      menus:jsObj
    }
  }
}


