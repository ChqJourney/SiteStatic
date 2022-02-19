import { PrismaClient } from "@prisma/client";
// import prisma from "../../prisma/instance";

function exclude(blog, ...keys) {
    for (let key of keys) {
      delete blog[key]
    }
    return blog
  }

const prisma=new PrismaClient()

export default async function handler(req, res) {
    try{

        switch (req.method) {
          case "GET":
              const {id}=req.query
              const blogGet=await prisma.bLog.findFirst({where:{id:id}})
              if(blogGet){
                  res.status(200).json({data:blogGet})
              }else{
                res.status(404)
              }
            break
          case "POST":
              const blogPost = await prisma.bLog.create({ data: req.body });
          res.status(201).json({ data: blogPost });
            break
          case "PUT":
              const toBeUpdate=req.body
              const toUpdate=exclude(toBeUpdate,'id','createdAt','updatedAt')
              const blogPut=await prisma.bLog.update({where:{id:toBeUpdate.id,updatedAt:toBeUpdate.updatedAt},data:toUpdate})
              res.status(204).json({data:blogPut})
            break
          case "DELETE":
              const toBeDeletedId=req.query.id
              const blogDelete=await prisma.bLog.delete({where:{id:toBeDeletedId}})
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
