import { useEffect, useState } from "react";

function removezeroInfo(regions){
  if(!regions){
    
  }else{

    var arr= regions.split("|").filter(f=>f!="0")
    return arr.join("，")
  }
}
async function fetchIpInfo(ip) {
    if(!f_check_IP(ip)){
        alert("not a IP address with correct format")
        return
    }
    const res = await fetch(`https://47.104.61.109/ipsearchwithaddr?searchIp=${ip}`);
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
    function searchIpAddr(e,ip){
        e.preventDefault()
        fetchIpInfo(ip).then(res=>{
            if(res){
                const regions=res.regions.split("，")
                setSearchIpInfo(res)
            }
        })
    }
    
    useEffect(()=>{
        getClientIp().then(res=>setClientIp(res))
        async function getClientIp() {
            const res = await fetch("https://47.104.61.109/ipwithaddr");
            const body = await res.json();
            console.log(body)
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
        <div className=" text-sky-800 text-xl">{removezeroInfo(clientIp.regions)}</div>
        <div className=" text-xl">！</div>
      </div>
      <div className="flex items-center justify-center col-span-4 md:col-span-2 md:col-start-2 ">
        <input
          type="text"
          name="ipAddress"
          id="ipAddress" onChange={(e)=>setSearchIp(e.target.value)}
          className="mt-1 h-8 select-auto text-center text-2xl focus:ring-indigo-500 focus:border-indigo-500 block w-48 shadow-sm sm:text-sm border-gray-500 px-1 border-2 rounded-md"
        />
        <button className="mx-2 w-36 h-8 btn-color" onClick={(e)=>searchIpAddr(e,searchIp)}>查询</button>
      </div>
      <div className="col-span-4 md:col-span-2 md:col-start-2 flex justify-center">

      <p className="text-2xl text-amber-700">{removezeroInfo(seartchIpInfo.regions)}</p>
      </div>
    </div>
  );
}


