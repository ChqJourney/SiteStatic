import { useEffect } from "react"

async function getIp(){
    const ipRes=await fetch('http://localhost:3000/api/hello')
    const ip=await ipRes.json()
    return ip
}

export default function Tutorial({data,remoteIpAddr}){
    
    return (
        <>
        <p>tutorial</p>
        <div className=" text-3xl text-blue-300">{data}</div>
        <div className=" text-sky-800 text-2xl">{remoteIpAddr}</div>
        </>
    )
}

export async function getServerSideProps(context) {
    const res=await fetch('http://localhost:3000/api/hello')
    const body=await res.json()
    console.log(body)
    return {
      props: body
    }
  }