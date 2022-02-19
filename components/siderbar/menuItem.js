import Link from "next/link";
import React, { useState } from "react";
import { MenuList } from "./menuList";

export const MenuItem=({menuItem})=>{
    const [isExpanded,setIsExpanded]=useState(false)
    return (
        <li className="flex my-1">
            <div className="">
            {menuItem.subMenu?.length>0?
            <button className=" bg-transparent py-1 cursor-pointer" onClick={()=>setIsExpanded(!isExpanded)}>
                <Expander isExpand={isExpanded}/>
                </button>
                :<DotIcon/>}

            </div>
            <div className="block w-32 border-blue-600 text-left text-slate-700 hover:text-sky-600">
                <div className="flex items-center">

                <Link href={menuItem.href} passHref>
                    <span className="text-lg align-middle font-sans cursor-pointer">
                    {menuItem.text}
                    </span>
                    </Link>
                </div>
                    
                    {isExpanded&&(<div className=" border-l border-slate-500 pr-2"><MenuList menus={menuItem.subMenu}/></div>)}
                   
                </div>
        </li>
    )
}

const Expander=({isExpand})=>{

    if(isExpand)
    return (<svg t="1645008761120" className="h-6 w-6 fill-slate-400" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2166" width="200" height="200"><path d="M533.333333 516.266667l-174.933333-170.666667-64 59.733333 234.666667 234.666667L768 405.333333l-59.733333-59.733333-174.933334 170.666667z" fill="#444444" p-id="2167"></path></svg>)
    else
    return (
        <svg t="1645008702232" className="h-6 w-6 fill-slate-400" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2031" width="200" height="200"><path d="M558.933333 490.666667L384 665.6l59.733333 59.733333 234.666667-234.666666L443.733333 256 384 315.733333l174.933333 174.933334z" fill="#444444" p-id="2032"></path></svg>
    )
}
const ExpandStatusIcon=()=>{
    return (
        <svg t="1645008761120" className="h-6 w-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2166" width="200" height="200"><path d="M533.333333 516.266667l-174.933333-170.666667-64 59.733333 234.666667 234.666667L768 405.333333l-59.733333-59.733333-174.933334 170.666667z" fill="#444444" p-id="2167"></path></svg>
    )
}
const DotIcon=()=>{
    return (
        <svg t="1645008815228" className="h-6 w-6 fill-slate-400" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4307" width="200" height="200"><path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="4308"></path></svg>
    )
}