import { RecoilRoot } from "recoil";
import GlobalLayout from "../../components/layouts/globalLayout";
import Layout from "../../components/layouts/layout";
import { ClipCanvas } from "../../components/tools/clipCanvas";

export default function Photo(){

    return (
        <ClipCanvas className="h-screen"/>
    )
}
Photo.getLayout = function getLayout(page) {
    return (
        <RecoilRoot>
        <GlobalLayout>
            <Layout>
          {page}
            </Layout>
        </GlobalLayout>
        </RecoilRoot>);
    
  }