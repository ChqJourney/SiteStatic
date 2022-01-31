import Layout from "../../components/layouts/layout";
import { ClipCanvas } from "../../components/tools/clipCanvas";

export default function Photo(){

    return (
        <ClipCanvas className="h-screen"/>
    )
}
Photo.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }