import React from "react";

export const SearchElement=()=>{

    return (
        <div className="bg-white relative pointer-events-auto ">
            <button type="button" className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 hover:bg-gray-200">
            <svg t="1643554468663" className="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1241" width="20" height="20">
                <path d="M992.256992 871.396769l-242.55242-206.297553c-25.087216-22.559295-51.902378-32.926971-73.565701-31.935002 57.246211-67.069904 91.83713-154.075185 91.83713-249.176213 0-212.057373-171.930627-383.988-383.988-383.988s-383.988 171.930627-383.988 383.988 171.930627 383.988 383.988 383.988c95.101028 0 182.106309-34.590919 249.176213-91.83713-0.991969 21.663323 9.375707 48.478485 31.935002 73.565701l206.297553 242.55242c35.326896 39.230774 93.021093 42.55867 128.219993 7.35977s31.903003-92.893097-7.35977-128.219993zM384.019999 640.012c-141.371582 0-255.992-114.620418-255.992-255.992s114.620418-255.992 255.992-255.992 255.992 114.620418 255.992 255.992-114.620418 255.992-255.992 255.992z" p-id="1242"></path></svg>
                Quick search...
                <span className="ml-auto pl-3 flex-none text-xs font-semibold"></span>
            </button>
        </div>
    )
}