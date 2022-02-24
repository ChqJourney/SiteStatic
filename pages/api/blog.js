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
              const {id}=req.query
              const blogGet=await prisma.blog.findUnique({where:{id:id}})
              if(blogGet){
                  res.status(200).json({data:blogGet})
              }else{
                res.status(404)
                res.end()
              }
            break
          case "POST":
            if(req.body.id){
              res.status(400)
              res.end()
            }
              const blogPost = await prisma.blog.create({ data: req.body });
              if(blogPost){
                res.setHeader('location',`/blog?id=${blogPost.id}`)
                res.status(201)
                res.end()
              }else{
                res.status(500).json({msg:'create failed'})
              }
            break
          case "PUT":
              const toBeUpdate=req.body
              let stamp=new Date(toBeUpdate.updatedAt)
              let updateId=toBeUpdate.id
              console.log(`${stamp} and ${updateId}`)
              delete toBeUpdate.id
              delete toBeUpdate.createdAt
              delete toBeUpdate.updatedAt
              try{
                const affect=await prisma.blog.updateMany({where:{id:updateId,updatedAt:stamp},data:toBeUpdate})
                if(affect.count>1)res.status(500).json({msg:"id plus stamp duplicated"})
                if(affect.count==0){res.status(200).json({msg:"entity you specified is not existed or not existed any more"})
              }else{
                res.status(204).json({})
                }
              }catch(err){
                res.status(500).json({err:err})
              }
              res.status(204)
              res.setHeader('location',`/blog?id=${blogPut.id}`)
              res.end()
            break   
          case "DELETE":  
              const toBeDeletedId=req.query.id
              try{

                const blogDelete=await prisma.blog.delete({where:{id:toBeDeletedId}})
                if(blogDelete){
                  res.status(200)
                  res.end()
                }else{
                  res.status(500).json({msg:'something wrong...'})
                }
              }catch(err){
                res.status(500)
                res.end(err)
              }
            break
          default:
            break
        }
    }
    catch(err){
        res.status(500).json({data:err})
    }

  
}
