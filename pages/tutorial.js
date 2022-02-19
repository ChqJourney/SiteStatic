
import Layout from "../components/layouts/layout";
import { SiderBar } from "../components/siderbar/siderbar";

export default function Tutorial({menus}){
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
        <Layout menus={menus}>

        <div className="w-full h-screen container mx-auto flex flex-wrap pt-6">
           <SiderBar className="w-3/12 bg-white rounded shadow-lg" menus={siderMenus}/>
           <div className="w-9/12 ml-10">content</div>
        </div>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const fs = require("fs");
    var file1 = await fs.readFileSync("./Users/site.json", "utf-8");
    var menus=JSON.parse(file1)
    return {
      props: {
        menus:menus
      }, 
    };
  }