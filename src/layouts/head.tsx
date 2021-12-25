import React from 'react';

export const Head=()=>{
    return (
        <header className="w-full sticky top-0 bg-white bg-opacity-80 flex justify-between items-center py-3" >
          {/* big icon */}
          <div className="font-bold mx-9 "><a href="#" className="cursor-pointer text-3xl hover:text-indigo-400">Photone<span className="text-indigo-500 text-5xl font-serif italic">e</span></a></div>
          {/* desktop nav area */}
          <ul className="md:flex justify-between items-center hidden">

            <li className="font-sans px-3 animation-hover animation-active font-semibold animation-hover relative inline-block mx-4 no-underline hover:text-indigo-400"><a href="">Home</a></li>
            <li className="font-sans px-3 animation-hover font-semibold animation-hover relative inline-block mx-4 no-underline hover:text-indigo-400">App</li>
            <li className="font-sans px-3 animation-hover font-semibold animation-hover relative inline-block mx-4 no-underline hover:text-indigo-400">About us</li>

            <li className="px-4 py-2
    text-sm font-semibold text-center
    text-white transition
    duration-200 ease-in-out
   bg-gray-900 rounded-md
    cursor-pointer
    hover:bg-gray-600 mx-4">
        Login 
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </li>
          </ul>
          {/* mobile nav area */}
          <div className="btn cursor-pointer text-3xl mx-4 flex justify-center items-center md:hidden">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </header>
    );
}