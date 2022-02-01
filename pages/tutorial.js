import { RecoilRoot } from "recoil";
import GlobalLayout from "../components/layouts/globalLayout";
import Layout from "../components/layouts/layout";
import { SiderBar } from "../components/siderbar/siderbar";

export default function Tutorial(){
    let menus=[
        {id:1,text:"ip tools",href:"/ipsearch"},
        {id:2,text:"ip tools",href:"/ipsearch"},
        {id:3,text:"ip tools",href:"/ipsearch"},
        {id:4,text:"ip tools",href:"/ipsearch"},
    ]
    return (
        <div className="w-full h-screen container mx-auto flex flex-wrap pt-6">
           <SiderBar className="w-3/12 bg-white rounded shadow-lg" menus={menus}/>
           <div className="w-9/12 ml-10">content</div>
        </div>
    )
}
Tutorial.getLayout = function getLayout(page) {
    return (
    <RecoilRoot>
    <GlobalLayout>
        <Layout>
      {page}
        </Layout>
    </GlobalLayout>
    </RecoilRoot>);
  };