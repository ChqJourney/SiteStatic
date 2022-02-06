import React, { Fragment, useContext, useEffect, useState } from "react";
import Image from "next/image";
import brand from "../../public/assets/brand-color-nobg.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useMounted } from "../hooks/useMounted";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header ({menus})  {
  const {hasMounted}=useMounted(false)
  const currentMenus=hasMounted?menus:null
    console.log("re-render header")
  const router = useRouter();
  const pathName = router.pathname;
  const currentLang=router.locale;
  const otherLang=router.locales.find(f=>f!==currentLang)
  console.log(otherLang)
  return currentMenus? (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden" suppressHydrationWarning={true}>
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 mt-2 flex items-center">
                  <Link href="/" passHref>
                    <div className="h-12 w-32 inline-block ml-2">
                      <Image src={brand}  alt="brand" layout="responsive" />
                    </div>
                  </Link>
                </div>
                <div className="hidden mt-2 sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {currentMenus.map((item) => (
                      <a
                        key={item.name}
                        onClick={()=>router.push(item.href,item.href,{locale:currentLang})}
                        className={classNames(
                          item.href === pathName
                            ? "underline decoration-emerald-400 decoration-2 underline-offset-2"
                            : "",
                          "px-3 py-2 rounded-md text-xl font-medium text-sky-600 hover:text-sky-700 hover:scale-110"
                        )}
                        aria-current={
                          item.href === pathName ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                </div> 
                <div className="absolute inset-y-0 right-1 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button" onClick={()=>router.push(pathName,pathName,{locale:otherLang})}
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <div className="flex">

                  <span className="sr-only">change language</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>
<span>{router.locale}</span>
                  </div>
                </button>
                </div>
              </div>
              
                
           
          </div>
          
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {currentMenus.map((item) => (
                <div
                  key={item.name}
                  onClick={()=>router.push(item.href,item.href,{locale:currentLang})}
                  className={classNames(
                    item.href === pathName
                      ? "bg-gray-900 text-white"
                      : "text-black-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.href === pathName ? "page" : undefined}
                >
                  <a href="#">
                  {item.name}
                    </a>
                </div>
              ))}
            </div>
            
           
                
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  ):<p>loading...</p>;
};


export default Header