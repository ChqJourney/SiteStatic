import { useRouter } from "next/router"
import Layout from "../../components/layouts/layout";


const Post=({menus,post})=>{
    const router=useRouter()

    const {id}=router.query;

    return (
        <Layout menus={menus}>
            <p>post:</p>
            <div>{id}</div>
            <div>{post.title}</div>
            <div>{post.content}</div>
        </Layout>
    )
}
export async function getServerSideProps(context) {
    const fs = require("fs");
    var file1 = await fs.readFileSync("./Users/site.json", "utf-8");
    var menus = JSON.parse(file1);
    let postContent
    if(process.env.NODE_ENV==='production'){

        var response=await fetch('')
         postContent=await response.json()
    }else{
        postContent={id:3,title:'adfadf',content:"adfadfadf"}
    }

    return {
      props: {
        menus: menus,
        post:postContent
      },
      
    };
  }
export default Post