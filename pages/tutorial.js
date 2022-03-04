
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { SiderBar } from "../components/siderbar/siderbar"
import { useTheme } from "next-themes"
import { useMounted } from "../components/hooks/useMounted"
import { BlogViewer } from "../components/blog/blogViewer"
import { useState } from "react"
import { useAppContext } from "../context/appContext"

export default function Tutorial({fallback}){
  const {theme}=useTheme()
  const {hasMounted}=useMounted(false)
  const {state}=useAppContext()
    let siderMenus=[
        {id:1,text:"ip tools",subMenu:[
          {id:5,text:'ip box1',href:'2aa3f095-6c67-483a-a5f0-2892d020d1ad'},
          {id:6,text:'ip box2',href:'/misc/ipsearch'},
          {id:7,text:'ip box3',href:'/misc/ipsearch'},
        ]},
        {id:2,text:"ip tools",href:"/ipsearch"},
        {id:3,text:"ip tools",href:"/ipsearch"},
        {id:4,text:"ip tools",href:"/ipsearch"},
    ]
    return (hasMounted&&
    <div className="w-full  h-screen relative flex justify-center pt-6">
      <button className="absolute left-2 top-0 block lg:hidden border rounded-full w-10 h-10">
        
      </button>
      <div className="max-w-7xl container mx-auto flex justify-center">
            <div className="w-3/12 hidden lg:flex ml-0">

           <SiderBar menus={siderMenus} theme={theme} />
            </div>
           <div className=" w-9/12 ml-10">
             
             {state.dynamic.tutorialId&&<BlogViewer id={state.dynamic.tutorialId}/>}
           </div>
      </div>
        </div>
    )
}

export async function getStaticProps({locale}) {
   
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common", "footer", "header"])),
        
      }, 
    };
  }