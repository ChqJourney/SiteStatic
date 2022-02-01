import { RecoilRoot } from "recoil";
import GlobalLayout from "../../components/layouts/globalLayout";
import Layout from "../../components/layouts/layout"


export default function ResizeImg(){
    return (
        <>Resize img</>

    )
}

    
ResizeImg.getLayout = function getLayout(page) {
    return (
        <RecoilRoot>
        <GlobalLayout>
            <Layout>
          {page}
            </Layout>
        </GlobalLayout>
        </RecoilRoot>);
    
  }