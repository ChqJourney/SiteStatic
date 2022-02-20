
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { SiderBar } from "../components/siderbar/siderbar";

export default function Tutorial(){
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
    return (
       

        <div className="w-full h-screen container mx-auto flex flex-wrap pt-6">
           <SiderBar className="w-3/12 bg-white rounded shadow-lg" menus={siderMenus}/>
           <div className="w-9/12 ml-10">content</div>
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