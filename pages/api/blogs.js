import { PrismaClient } from "@prisma/client";
// import prisma from "../../prisma/instance";

function exclude(blog, ...keys) {
  for (let key of keys) {
    delete blog[key];
  }
  return blog;
}

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    
    const blogs=await prisma.blog.findMany({where:{createdAt:{gte:new Date("2022-02-17")}}})
    res.status(200).json({data:blogs})
  }
}
