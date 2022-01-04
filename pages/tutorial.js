import { useEffect, useState } from "react";

async function fetchIpInfo(ip) {
    if(!f_check_IP(ip)){
        alert("not a IP address with correct format")
        return
    }
    const res = await fetch(`http://122.51.114.20:5555/ipsearchwithaddr?ipaddr=${ip}`);
    const body = await res.json();
    console.log(body)
    return body.data
  }
function f_check_IP(ip)    
{  
   var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;//正则表达式   
   if(re.test(ip))   
   {   
       if( RegExp.$1<256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) 
       return true;   
   }   
   
   return false;    
}

export default function Tutorial() {
    const [clientIp,setClientIp]=useState("")
    const [searchIp,setSearchIp]=useState("")
    const [seartchIpInfo,setSearchIpInfo]=useState({ipAddress:"",regions:""})
    const [regionInfo,setRegionInfo]=useState({})
    function searchIpAddr(e,ip){
        e.preventDefault()
        fetchIpInfo(ip).then(res=>{
            if(res){
                const regions=res.regions.split("，")
                setRegionInfo({country:regions[0],province:regions[1],city:regions[2],provider:regions[3]})
                
            }
        })
    }
    
    useEffect(()=>{
        getClientIp().then(data=>setClientIp(data))
        async function getClientIp() {
            const res = await fetch("http://122.51.114.20:5555/ipwithaddr");
            const body = await res.json();
            return body.data;
          }
    },[])
  return (
    <div className="container  py-10 mx-auto justify-center grid grid-cols-4 gap-4">
      <div className="flex text-center col-span-4 justify-center">
        <p className="text-center text-xl">您的IP地址为</p>
        <div className=" text-xl text-red-300">{clientIp.ipAddress}</div>
        <div className=" text-xl">，</div>
      </div>
      <div className="flex text-center col-span-4 justify-center">
        <p className="text-xl">您位于</p>
        <div className=" text-sky-800 text-xl">{clientIp.regions}</div>
        <div className=" text-xl">！</div>
      </div>
      <div className="flex items-center justify-center col-start-2 col-span-2">
        <input
          type="text"
          name="ipAddress"
          id="ipAddress" onChange={(e)=>setSearchIp(e.target.value)}
          className="mt-1 h-8 select-auto text-center text-2xl focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 px-1 border-2 rounded-md"
        />
        <button className="mx-2 w-36 h-8 btn-color" onClick={(e)=>searchIpAddr(e,searchIp)}>查询</button>
      </div>
      <div className=" col-span-2 col-start-2 flex justify-center">

      <table className=" w-full border-collapse border border-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th className="border border-gray-600 w-4/12">信息</th>
            <th className="border border-gray-600 text-center">详情</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-300">
            <td className="border border-gray-700 w-6/12 text-center">国家</td>
            <td className="border border-gray-700 text-center">{regionInfo.country??""}</td>
          </tr>
          <tr className="bg-gray-300">
            <td className="border border-gray-700 w-6/12 text-center">省份</td>
            <td className="border border-gray-700 text-center">{regionInfo.province}</td>
          </tr>
          <tr className="bg-gray-300">
            <td className="border border-gray-700 w-6/12 text-center">城市</td>
            <td className="border border-gray-700 text-center">{regionInfo.city}</td>
          </tr>
          <tr className="bg-gray-300">
            <td className="border border-gray-700 w-6/12 text-center">运营商</td>
            <td className="border border-gray-700 text-center">{regionInfo.provider}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}


