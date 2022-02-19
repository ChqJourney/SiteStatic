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
    
}