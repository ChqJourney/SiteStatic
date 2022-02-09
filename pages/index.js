import Head from "next/head";
import Layout from "../components/layouts/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import heroImg from "/public/assets/hero-img.jpeg";
import ip from "/public/assets/ipsearch.png";
import { Router } from "next/router";
import Image from "next/image";
import { CircleSpinner, Spinner } from "../components/layouts/spinner";
import { SplitButton } from "../components/layouts/splitbButton";
import { ContentCard } from "../components/layouts/contentCard";

function Home({ menus }) {
  const { t } = useTranslation("common");
 
  return (
    <Layout menus={menus}>
      <Head>
        <title>{t("windowTitle", { page: "Home" })}</title>
      </Head>
      <div className="relative w-screen">
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
        <div className="relative hidden rounded-2xl max-w-5xl max-h-96 lg:block lg:absolute lg:inset-y-0 z-0 w-full right-12 lg:w-1/2">
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
        <div className="absolute bg-lime-500 w-48 h-48 left-24 top-64 rounded-full bg-blend-multiply blur-3xl"></div>
      <div className="absolute bg-amber-500 w-24 h-24  sm:w-48 sm:h-48 left-24 top-36 rounded-full bg-blend-multiply blur-2xl"></div>
      <div className="absolute bg-sky-500 w-24 sm:w-72 h-24 sm:h-72 left-48 top-36 rounded-full bg-blend-multiply blur-2xl"></div>
      <div className="flex flex-col justify-center">
         <ContentCard/>
        </div>
    
    
    </Layout>
  );
}

export default Home;

export const getStaticProps = async ({ locale }) => {
  const fs = require("fs");
  var file = await fs.readFileSync("./Users/site.json", "utf-8");

  var jsObj = JSON.parse(file);
  console.log(jsObj);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer", "header"])),
      menus: jsObj,
    },
  };
};
