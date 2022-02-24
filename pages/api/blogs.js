import prisma from "../../prisma/instance";



export default async function handler(req, res) {
  if (req.method === "GET") {
    const {pageIndex,pageSize}=req.query
    const index=parseInt(pageIndex)
    const size=parseInt(pageSize)
    const blogs=await prisma.blog.findMany(
      {
        where:{createdAt:{gte:new Date("2022-02-17")},isPreview:false},
        orderBy:{
          createdAt:"desc"
        },
        take:size,
        skip:(index-1)*size
      })
    const blogCount=await prisma.blog.count({
      where:{createdAt:{gte:new Date("2022-02-17")},isPreview:false}
    })
    res.status(200).json({data:blogs,count:Math.ceil(blogCount/size)})
  }else{

    res.status(403).json({msg:"not found"})
  }
}
