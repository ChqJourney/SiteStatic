import Layout from "../../components/layouts/layout";
import { ClipCanvas } from "../../components/tools/clipCanvas";

export default function Photo(){

    return (
        <Layout>

            <ClipCanvas className="h-screen"/>
        </Layout>
    )
}
// Photo.getLayout = function getLayout(page) {
//     return (
//         <RecoilRoot>
//         <GlobalLayout>
//             <Layout>
//           {page}
//             </Layout>
//         </GlobalLayout>
//         </RecoilRoot>);
    
//   }