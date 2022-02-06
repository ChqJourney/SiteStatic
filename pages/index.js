import Head from "next/head";
import Layout from "../components/layouts/layout";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function Home({menus}) {
  const {t}=useTranslation('common')
  
  return (
    <Layout menus={menus}>
      <Head>
        <title>{t('windowTitle')}</title> 
      </Head>
      <div className="relative w-screen h-screen">
        <div className="max-w-7xl mx-auto bg-transparent">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
           
            <div className="w-full mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    {t('herotitle')}
                  </span>
                  <span className="block text-indigo-600 mx-2 xl:inline">
                    online business
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <button className="btn-color mx-4 my-2">{t('startBtn')}</button>
                  {/* <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div> */}
                  {/* <button className='btn-color'>Click</button> */}
                  <button className="btn-secondary mx-4 my-2">Live demo</button>
                  {/* <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Live demo
              </a>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="absolute bg-lime-500 w-48 h-48 right-24 top-64 rounded-full bg-blend-multiply blur-3xl"></div>
        <div className="absolute bg-amber-500 w-48 h-48 my-auto mx-auto left-0 right-0 top-0 bottom-0 rounded-full bg-blend-multiply blur-2xl"></div>
        <div className="absolute bg-sky-500 w-72 h-72 right-64 top-96 rounded-full bg-blend-multiply blur-2xl"></div>
    </Layout>
  );
}



export default Home

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

