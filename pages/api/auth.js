export default async function handler(req, res) {
  console.log(req.method)
    if(req.method!='POST'){

      res.status(401).json({ message:"no such method on this api route"})
    }
    res.status(200).json(
      {
        token:"adfadfadf.adsfasdfadsf.adfadfadsf",
        refreshToken:"sdf2-dfd2-dfg2-kd1k",
        expireAt:new Date().setDate(new Date().getDate()+3),
        user:{
          name:"patrick",
          email:'url@adf.com',
          avatar:"/assets/avatars/girl.png"
        }
      })
  }