import { useEffect, useRef, useState } from "react";
import { spinnerCore } from "../iconInSVG/commonSVG";

export const SpinButton = ({onClickCallback, children }) => {
    console.log('render')
    const spin=useRef()
    const [isRunning,setIsRunning]=useState(false)
    useEffect(()=>{
      if(isRunning){
        onClickCallback().then(t=>{
          setIsRunning(false)
        })
      }
    },[isRunning,onClickCallback])
    const onClick=(e)=>{
      e.preventDefault()
      setIsRunning(true)
    }
  return (
    <button onClick={!isRunning?onClick:null} disabled={isRunning}
    className="w-48 bg-gray-400 h-10 py-1 text-white border-0 rounded-md text-center">
      <div className="flex justify-center items-center">
      {isRunning&&<div className="fill-sky-400 h-8 w-8 mx-1" ref={spin}>
       {spinnerCore}
        </div>}
       {isRunning?"loading...":{children}}
      </div>
    </button>
  );
}; 

