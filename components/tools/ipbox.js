import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../pages/misc/ipsearch";

function removezeroInfo(regions) {
  if (!regions) {
  } else {
    var arr = regions.split("|").filter((f) => f != "0");
    return arr.join("，");
  }
}
async function fetchIpInfo(ip) {
  if (!f_check_IP(ip)) {
    alert("not a IP address with correct format");
    return;
  }
  const res = await fetch(
    `https://47.104.61.109/ipsearchwithaddr?searchIp=${ip}`
  );
  if (!res.ok) {
    console.log(res.status);
    console.log(res.statusText);
  }
  const body = await res.json();
  console.log(body);
  return body.data;
}
function f_check_IP(ip) {
  var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/; //正则表达式
  if (re.test(ip)) {
    if (
      RegExp.$1 < 256 &&
      RegExp.$2 < 256 &&
      RegExp.$3 < 256 &&
      RegExp.$4 < 256
    )
      return true;
  }

  return false;
}

export const IPBox = () => {
  const { data, err } = useSWR("https://47.104.61.109/ipwithaddr", fetcher);

  const [searchIp, setSearchIp] = useState("");
  const [seartchIpInfo, setSearchIpInfo] = useState({
    ipAddress: "",
    regions: "",
  });
  function searchIpAddr(e, ip) {
    e.preventDefault();
    console.log(searchIp);
    var check = f_check_IP(searchIp);
    if (!check) {
    } else {
      fetchIpInfo(ip).then((res) => {
        if (res) {
          const regions = res.regions.split("，");
          setSearchIpInfo(res);
        }
      });
    }
  }

  if (!data) <p>loading...</p>;
  if (err) <p>something error...</p>;

  return (
    <>
      <div className="flex text-center col-span-4 justify-center">
        <p className="text-center text-lg">您的IP地址为</p>
        <div className=" text-lg text-orange-500 font-medium">
          {data.data.ipAddress},
        </div>
      </div>
      <div className="static xs:flex text-center col-span-4 justify-center">
        <p className="text-xl">您位于</p>
        <div className=" text-sky-800 text-lg">
          {removezeroInfo(data.data.regions)}!
        </div>
      </div>
      <div className="static sm:flex items-center sm:justify-center col-span-4 lg:col-span-2 lg:col-start-2 ">
        <div className="flex justify-center mx-2">
          <input
            type="text"
            name="ipAddress"
            id="ipAddress"
            onChange={(e) => setSearchIp(e.target.value)}
            className="mt-1 h-8 outline-0 select-auto text-center 
            text-2xl focus:ring-indigo-500 focus:border-indigo-500 block 
            shadow-sm sm:text-sm border-gray-500 px-1 py-1 border-2 rounded-md"
          />
        </div>
        <div className="flex mt-2 sm:mt-0 justify-center">
          <button
            className="w-36 object-center h-8 btn-color"
            onClick={(e) => searchIpAddr(e, searchIp)}
          >
            查询
          </button>
        </div>
      </div>
      <div className="col-span-4 md:col-span-2 md:col-start-2 flex flex-col mx-auto justify-center">
        <p className="text-center">result will show below:</p>
        <div className="border-2 w-72 h-24 border-double border-orange-300 rounded-lg pl-2 pt-2">
          <p className="text-2xl text-amber-700 font-sans">
            {removezeroInfo(seartchIpInfo.regions)}
          </p>
        </div>
      </div>
    </>
  );
};
