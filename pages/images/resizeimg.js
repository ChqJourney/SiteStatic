import Layout from "../../components/layouts/layout"


export default function ResizeImg(){
    return (
        <>Resize img</>

    )
}

    
ResizeImg.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }