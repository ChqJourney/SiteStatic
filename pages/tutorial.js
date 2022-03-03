
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { SiderBar } from "../components/siderbar/siderbar"
import { useTheme } from "next-themes"
import { useMounted } from "../components/hooks/useMounted"

export default function Tutorial(){
  const {theme}=useTheme()
  const {hasMounted}=useMounted(false)
    let siderMenus=[
        {id:1,text:"ip tools",href:"/ipsearch",subMenu:[
          {id:5,text:'ip box1',href:'/misc/ipsearch'},
          {id:6,text:'ip box2',href:'/misc/ipsearch'},
          {id:7,text:'ip box3',href:'/misc/ipsearch'},
        ]},
        {id:2,text:"ip tools",href:"/ipsearch"},
        {id:3,text:"ip tools",href:"/ipsearch"},
        {id:4,text:"ip tools",href:"/ipsearch"},
    ]
    return (hasMounted&&
    <div className="w-full h-screen container mx-auto flex flex-wrap pt-6">
           <SiderBar menus={siderMenus} theme={theme}/>
           <div className=" w-9/12 ml-10">content</div>
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