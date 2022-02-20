import Head from "next/head";
import Layout from "../components/layouts/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import heroImg from "/public/assets/hero-img.jpeg";
import ip from "/public/assets/ipsearch.png";
import { Router } from "next/router";
import Image from "next/image";
import { ContentCard } from "../components/layouts/contentCard";

const fetcher=(...args)=>fetch(...args).then(data=>data.json())

function Home() {
  const { t } = useTranslation("common");
  const svgEle=<svg t="1644591337321" className=" fill-sky-500 hover:fill-purple-400 hover:shadow-2xl hover:shadow-gray-300 w-36 h-36" fill="none"
  viewBox="0 0 1024 1024"
  stroke="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6957"><path d="M414.016 705.984c-47.552 0-121.984-188.032-158.016-112-14.976 31.616-39.936 99.008-64 152.96V768a64 64 0 0 0 64 64h512c35.392 0 64-28.608 64-64v-29.824c-36.16-81.408-83.008-216.32-128-268.16-92.032-105.984-201.984 235.968-289.984 235.968zM832 0H192a192 192 0 0 0-192 192v640c0 105.984 85.952 192 192 192h640c105.984 0 192-86.016 192-192V192c0-106.048-86.016-192-192-192z m64 832c0 35.392-28.608 64-64 64H192a64 64 0 0 1-64-64V192c0-35.328 28.672-64 64-64h640a64 64 0 0 1 64 64v640zM288 384c53.056 0 96-42.944 96-96S341.056 192 288 192 192 234.944 192 288s42.944 96 96 96z"  p-id="6958"></path></svg>
  const ipSVG=<svg t="1644593035522" className="fill-sky-500 hover:fill-purple-400 hover:shadow-2xl hover:shadow-gray-300 w-36 h-36" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10515" width="200" height="200"><path d="M512 512m-414 0a414 414 0 1 0 828 0 414 414 0 1 0-828 0Z" fill="#F0C48A" p-id="10516"></path><path d="M946.8 838.4H77.2c-36.2 0-65.4-29.2-65.4-65.4v-634c0-36.2 29.2-65.4 65.4-65.4h869.8c36.2 0 65.4 29.2 65.4 65.4v634c-0.2 36.2-29.4 65.4-65.6 65.4z" fill="#FFFFFF" p-id="10517"></path><path d="M918 838.4h-45.4V210.2h139.8V744c-0.2 52.2-42.4 94.4-94.4 94.4zM946.8 73.6H77.2c-36.2 0-65.4 29.2-65.4 65.4v71.2h1000.6V139c-0.2-36.2-29.4-65.4-65.6-65.4z" fill="#D3E6F8" p-id="10518"></path><path d="M1012.2 210.2h-139.8V73.6H950c34.4 0 62.2 27.8 62.2 62.2v74.4z" fill="#A4CFF2" p-id="10519"></path><path d="M72.956412 166.770674a25 25 0 1 0 11.490597-48.661753 25 25 0 1 0-11.490597 48.661753Z" fill="#7BABF1" p-id="10520"></path><path d="M152.76606 166.778866a25 25 0 1 0 11.490597-48.661753 25 25 0 1 0-11.490597 48.661753Z" fill="#FFFFFF" p-id="10521"></path><path d="M220.660454 160.083854a25 25 0 1 0 35.354722-35.355956 25 25 0 1 0-35.354722 35.355956Z" fill="#FD919E" p-id="10522"></path><path d="M946.8 850.2H77.2C34.6 850.2 0 815.6 0 773v-634c0-42.6 34.6-77.2 77.2-77.2h869.8c42.6 0 77.2 34.6 77.2 77.2v634c-0.2 42.6-34.8 77.2-77.4 77.2zM77.2 85.4c-29.6 0-53.6 24-53.6 53.6v634c0 29.6 24 53.6 53.6 53.6h869.8c29.6 0 53.6-24 53.6-53.6v-634c0-29.6-24-53.6-53.6-53.6H77.2z" fill="#4C4372" p-id="10523"></path><path d="M1012.2 222H11.8c-6.4 0-11.8-5.2-11.8-11.8s5.2-11.8 11.8-11.8h1000.6c6.4 0 11.8 5.2 11.8 11.8s-5.4 11.8-12 11.8zM78.8 179.2C58.6 179.2 42 162.8 42 142.4c0-20.2 16.4-36.8 36.8-36.8 20.2 0 36.8 16.4 36.8 36.8-0.2 20.4-16.6 36.8-36.8 36.8z m0-50c-7.4 0-13.2 6-13.2 13.2s6 13.2 13.2 13.2c7.4 0 13.2-6 13.2-13.2s-6-13.2-13.2-13.2zM158.6 179.2c-20.2 0-36.8-16.4-36.8-36.8 0-20.2 16.4-36.8 36.8-36.8 20.2 0 36.8 16.4 36.8 36.8-0.2 20.4-16.6 36.8-36.8 36.8z m0-50c-7.4 0-13.2 6-13.2 13.2s6 13.2 13.2 13.2c7.4 0 13.2-6 13.2-13.2s-6-13.2-13.2-13.2zM238.4 179.2c-20.2 0-36.8-16.4-36.8-36.8 0-20.2 16.4-36.8 36.8-36.8 20.2 0 36.8 16.4 36.8 36.8-0.2 20.4-16.6 36.8-36.8 36.8z m0-50c-7.4 0-13.2 6-13.2 13.2s6 13.2 13.2 13.2c7.4 0 13.2-6 13.2-13.2s-6-13.2-13.2-13.2z" fill="#4C4372" p-id="10524"></path><path d="M512 523.2m-209.8 0a209.8 209.8 0 1 0 419.6 0 209.8 209.8 0 1 0-419.6 0Z" fill="#A4CFF2" p-id="10525"></path><path d="M681.4 501.8c0-72-36.4-135.6-91.6-173.4-24-9.6-50.4-15-77.8-15-115.8 0-209.8 94-209.8 209.8 0 72 36.4 135.6 91.6 173.4 24 9.6 50.4 15 77.8 15 116-0.2 209.8-94 209.8-209.8z" fill="#D3E6F8" p-id="10526"></path><path d="M512 744.8c-65.4 0-116.6-97.2-116.6-221.6s51.2-221.6 116.6-221.6c65.4 0 116.6 97.2 116.6 221.6S577.4 744.8 512 744.8z m0-419.6c-50.6 0-93.2 90.8-93.2 198s42.6 198 93.2 198 93.2-90.8 93.2-198-42.6-198-93.2-198z" fill="#4C4372" p-id="10527"></path><path d="M512 744.8c-63 0-123-27-165-73.8-2.4-2.6-3.4-6.2-2.8-9.8 0.6-3.6 2.8-6.6 5.8-8.4 41.4-23.2 100.6-36.4 162-36.4s120.6 13.2 162 36.4c3.2 1.8 5.2 4.8 5.8 8.4 0.6 3.6-0.4 7.2-2.8 9.8-42 46.8-102 73.8-165 73.8z m-136.8-78.4c36.8 35 85.8 55 136.8 55s100.2-19.8 136.8-55c-37-17-85.8-26.6-136.8-26.6-51 0-100 9.6-136.8 26.6zM512 430c-61.6 0-120.6-13.2-162-36.4-3.2-1.8-5.2-4.8-5.8-8.4-0.6-3.6 0.4-7 2.8-9.8 42-47 102.2-73.8 165-73.8 63 0 123 27 165 73.8 2.4 2.6 3.4 6.2 2.8 9.8-0.6 3.6-2.8 6.6-5.8 8.4-41.4 23.2-100.4 36.4-162 36.4z m-136.8-50c37 17 85.8 26.6 136.8 26.6 51 0 100-9.6 136.8-26.6-36.8-35-85.8-55-136.8-55-51 0.2-100.2 20-136.8 55z" fill="#4C4372" p-id="10528"></path><path d="M512 744.8c-122.2 0-221.6-99.4-221.6-221.6S389.8 301.8 512 301.8c122.2 0 221.6 99.4 221.6 221.6S634.2 744.8 512 744.8z m0-419.6c-109.2 0-198 88.8-198 198s88.8 198 198 198 198-88.8 198-198-88.8-198-198-198z" fill="#4C4372" p-id="10529"></path><path d="M720 535H302.2c-6.4 0-11.8-5.2-11.8-11.8 0-6.4 5.2-11.8 11.8-11.8H720c6.4 0 11.8 5.2 11.8 11.8 0 6.4-5.2 11.8-11.8 11.8z" fill="#4C4372" p-id="10530"></path><path d="M916.4 693.4L702.8 682l11.4 213.6 60.8-60.8 115.6 115.6 80.6-80.6-115.6-115.6z" fill="#FD919E" p-id="10531"></path><path d="M928.6 827.4l-79.4 81.6 41.4 41.4 80.6-80.6z" fill="#E8677D" p-id="10532"></path><path d="M890.6 962.2c-3.2 0-6-1.2-8.2-3.4l-107.2-107.2-52.8 52.4c-3.2 3.2-8.2 4.4-12.4 2.6-4.4-1.6-7.2-5.6-7.6-10.4l-11.4-213.6c-0.2-3.4 1-6.6 3.4-9a11.6 11.6 0 0 1 9-3.4l213.6 11.4c4.6 0.2 8.6 3.2 10.4 7.6 1.6 4.4 0.6 9.2-2.6 12.4l-52.6 52.6 107.2 107.2c4.6 4.6 4.6 12 0 16.6l-80.6 80.6a11.08 11.08 0 0 1-8.2 3.6z m-115.6-139c3.2 0 6 1.2 8.2 3.4l107.2 107.2 64-64-107.2-107.2c-4.6-4.6-4.6-12 0-16.6l42.2-42.2-174.4-9.4 9.4 174.4 42.2-42.2c2.4-2.2 5.4-3.4 8.4-3.4z" fill="#4C4372" p-id="10533"></path></svg>
  
  
  return (
<>
      <Head>
        <title>{t("windowTitle", { page: "Home" })}</title>
      </Head>
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto bg-transparent">
          <div className="relative z-10 pb-8 sm:pb-12 md:pb-16 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-24">
            <div className="w-full mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-24">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  <span className="block xl:inline">{t("herotitle1")}</span>
                  <span className="block text-indigo-600 mx-2 xl:inline">
                    {t("herotitle2")}
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {t("heroDescription")}
                </p>
                <div className="mt-28 sm:mt-44 sm:flex sm:justify-center lg:justify-start">
                  <button className="btn-color mx-4 my-2">
                    {t("startBtn")}
                  </button>

                  <button className="btn-secondary mx-4 my-2">
                    {t("tutorialBtn")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden rounded-2xl max-w-5xl max-h-96 lg:block lg:absolute lg:inset-y-0 z-0 w-full right-6 lg:w-1/2">
          <Image
            src={heroImg}
            quality="100"
            alt="hero image"
            className=" mr-4 rounded-3xl"
            layout="fill"
            loading="lazy"
          ></Image>
        </div>
      </div>
        <div className="absolute bg-lime-500 w-48 h-48 left-24 xl:left-[800px] top-64 rounded-full bg-blend-multiply blur-3xl"></div>
      <div className="absolute bg-amber-500 w-24 h-24  sm:w-48 sm:h-48 left-24 xl:left-[680px] top-36 rounded-full bg-blend-multiply blur-2xl"></div>
      <div className="absolute bg-sky-500 w-24 sm:w-72 h-24 sm:h-72 left-48 xl:left-[400px] top-64 rounded-full bg-blend-multiply opacity-75 blur-2xl"></div>
      <div className="mx-auto px-4 text-2xl sm:text-3xl text-center font-medium text-sky-800 my-4">Existing tools as below, please waiting for more exciting stuff......</div>
      <div className="grid top-12 px-10 grid-cols-4 gap-4 max-w-7xl mt-10 mx-auto">
         <ContentCard picEle={svgEle} 
         title={"awesome background remove tool for images"}
         description={"you can remove any colored background from your images, it is very helpful for you to create photo for your different kind of IDs.please try."}
         href={"/images/removebg"}
         />
         <ContentCard picEle={ipSVG} 
         title={"easliy get your own ip or any ip you want"}
         description={"if you wanna know what ip you're using, or wanna know the geolocation information of the certain IP you see. just come here do onc click"}
         href={"/misc/ipsearch"}/>
        </div>
</>
  )
  
}

export default Home;

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "header"])),
    }
  };
};
