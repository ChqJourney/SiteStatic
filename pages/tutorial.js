import { useEffect } from "react";

export default function Tutorial({ message, data }) {
  //   let clientIp = "";
  //   let clientInfo = "";
  //   useEffect(() => {
  //     fetchIpInfo();
  //     async function fetchIpInfo() {
  //       const res = await fetch("http://122.51.114.20:5555/ipwithaddr");
  //       console.log(res)
  //       const body = await res.json();
  //       clientIp = body.data.ipAddress;
  //       clientInfo = body.data.regions;
  //     }
  //   }, []);
  return (
    <div className="container py-10 mx-auto justify-center grid grid-cols-3 gap-4">
      <div className="flex text-center col-span-3 justify-center">
        <p className="text-center text-xl">您的IP地址为</p>
        <div className=" text-xl text-red-300">{data.ipAddress}</div>
        <div className=" text-xl">，</div>
      </div>
      <div className="flex text-center col-span-3 justify-center">
        <p className="text-xl">您位于</p>
        <div className=" text-sky-800 text-xl">{data.regions}</div>
        <div className=" text-xl">！</div>
      </div>
      <div className="flex justify-center col-start-2">
        <input
          type="text"
          name="ipAddress"
          id="ipAddress"
          className="mt-1 h-8 text-2xl focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 px-1 border-2 rounded-md"
        />
        <button className="mx-2 w-36 btn-primary">查询</button>
      </div>
      <div className=" col-span-3 flex justify-center">

      <table className=" w-6/12 border-collapse border border-gray-500 ...">
        <thead>
          <tr>
            <th className="border border-gray-600 ...">State</th>
            <th className="border border-gray-600 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-700 ...">Indiana</td>
            <td className="border border-gray-700 ...">Indianapolis</td>
          </tr>
          <tr>
            <td className="border border-gray-700 ...">Ohio</td>
            <td className="border border-gray-700 ...">Columbus</td>
          </tr>
          <tr>
            <td className="border border-gray-700 ...">Michigan</td>
            <td className="border border-gray-700 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://122.51.114.20:5555/ipwithaddr");
  const body = await res.json();
  console.log(body);
  return {
    props: body,
  };
}
