// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function getReqRemoteIp(req){return (req.headers['x-forwarded-for'] || '').split(',')[0] || req.ip;};

export default function handler(req, res) {
  const ip=getReqRemoteIp(req);
  res.status(200).json({ data:"ddddd",remoteIpAddr:ip})
}
