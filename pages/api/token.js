// import { getAccessToken,withApiAuthRequired } from "@auth0/nextjs-auth0"


// export default withApiAuthRequired(async function handler(req, res) {
//     const dd = await getAccessToken(req,res);
//     console.log(dd+"ffffff")
//       const response = await fetch('https://47.104.61.109/api/post/authtest', {
//         headers: {
//           Authorization: `Bearer ${dd.accessToken}`
//         }
//       });
//       console.log(response)
//       const msg=await response.text()
//     res.status(200).json({token:msg})
// })

export default async function handler(req,res){
  res.statusCode = 200
  res.setHeader('location', 'application/json')
  res.end()
}