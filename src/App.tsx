import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header className="w-full sticky top-0 bg-white bg-opacity-80 flex justify-between items-center py-3" >
        {/* big icon */}
        <div className="font-bold mx-9 "><a href="#" className="cursor-pointer text-3xl hover:text-indigo-400">Photone<span className="text-indigo-500 text-5xl font-serif italic">e</span></a></div>
        {/* desktop nav area */}
        <div className="md:flex justify-around items-center hidden">

          <a href="#" className="font-sans font-semibold  mx-4 no-underline hover:text-indigo-400 hover:underline">Home</a>
          <a href="#" className="font-sans font-semibold mx-4 no-underline hover:text-indigo-400 hover:underline">App</a>
          <a href="#" className="font-sans font-semibold mx-4 no-underline hover:text-indigo-400 hover:underline">About us</a>

          <a href="#" className="px-4 py-2
    text-sm font-semibold text-center
    text-white transition
    duration-200 ease-in-out
   bg-gray-900 rounded-md
    cursor-pointer
    hover:bg-gray-600 mx-4">Login <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>
        {/* mobile nav area */}
        <div className="btn cursor-pointer text-3xl mx-4 flex justify-center items-center md:hidden">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </header>
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="text-5xl font-bold my-2.5 text-center md:text-left">We are making Stunning Websites</div>
          <div className="text-1xl font-light text-center md:text-left my-4">nine4 is a free to use website template for websites made with Next.js and styled with Tailwind CSS</div>
          <a className="capitalize px-2 py-2 md:text-left text-white btn transition
    duration-200 ease-in-out
   bg-gray-900 rounded-md
    cursor-pointer
    hover:bg-gray-600 w-36 mx-auto md:mx-1.5">Find out more</a>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <img alt="" width="200" src="https://nine4-2.vercel.app/images/iPhone-12-Mockup.png" />
        </div>

      </div>
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="text-5xl font-bold my-2.5 text-center md:text-left">We are making Stunning Websites</div>
          <div className="text-1xl font-light text-center md:text-left my-4">nine4 is a free to use website template for websites made with Next.js and styled with Tailwind CSS</div>
          <a className="capitalize px-2 py-2 md:text-left text-white btn transition
    duration-200 ease-in-out
   bg-gray-900 rounded-md
    cursor-pointer
    hover:bg-gray-600 w-36 mx-auto md:mx-1.5">Find out more</a>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <img width="200" src="https://nine4-2.vercel.app/images/iPhone-12-Mockup.png" />
        </div>

      </div>
    </>
  );
}

export default App;
