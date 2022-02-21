// import { PrismaClient } from "@prisma/client";
import prisma from "../../prisma/instance";

function exclude(blog, ...keys) {
    for (let key of keys) {
      delete blog[key]
    }
    return blog
  }


export default async function handler(req, res) {
    try{
        switch (req.method) {
          case "GET":
            console.log('get by id')
              const {id}=req.query
              console.log(id)
              const blogGet=await prisma.blog.findUnique({where:{id:id}})
              if(blogGet){
                  res.status(200).json({data:blogGet})
              }else{
                res.status(404)
              }
            break
          case "POST":
              const blogPost = await prisma.blog.create({ data: req.body });
              res.status(201).json({'location':`/blog?id=${blogPost.id}`});
            break
          case "PUT":
              const toBeUpdate=req.body
              const toUpdate=exclude(toBeUpdate,'id','createdAt','updatedAt')
              const blogPut=await prisma.blog.update({where:{id:toBeUpdate.id,updatedAt:toBeUpdate.updatedAt},data:toUpdate})
              res.status(204).json({data:blogPut})
            break
          case "DELETE":
              const toBeDeletedId=req.query.id
              const blogDelete=await prisma.blog.delete({where:{id:toBeDeletedId}})
              res.status(200).json({data:blogDelete})
            break
          default:
            break
        }
    }
    catch(err){
        res.status(500).json({data:err})
    }

  
}
