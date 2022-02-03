import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import brand from "../../public/assets/brand-color-nobg.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import GetAuthWrapper from "../wrapper/getAuthWrapper";
import { deleteFromStorage,useLocalStorage,writeStorage } from "@rehooks/local-storage";
import { useMounted } from "../hooks/useMounted";
import { signIn,signOut } from "next-auth/react"


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header ({ user,menus})  {
  console.log(menus)
  const {hasMounted}=useMounted(false)
  const currentUser=hasMounted?user:null
  const currentMenus=hasMounted?menus:null
    console.log("re-render header")
  const router = useRouter();
  const pathName = router.pathname;
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
                        href={item.href}
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
              {currentUser ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-8 w-8" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 mr-2 relative">
                    <div>
                      <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        {/* <div className="h-8 w-8 inline-block"> */}
                        {/* <img alt="adf" className="h-8 w-8 inline-block" src="/public/assets/avatars/man.png"/> */}
                      {/* </div> */}
                        <img className="h-10 w-10 rounded-full" src={currentUser?.avatar??"/assets/avatars/man.png"} alt="avatar" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 z-50 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {currentUser.email}
                            </a>
                          )} 
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )} 
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#" onClick={()=>signOut()}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                           
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={()=>{
                                deleteFromStorage("user")
                                router.push('/','/',{locale:'zh'})
                              }}
                            >
                              Sign out
                            </a>
                           
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                // <Link
                //   href={`/login?returnUrl=/`}
                //   passHref
                // >
                  <a href="#" onClick={()=>signIn()} className="absolute right-0 flex items-center cursor-pointer text-sky-400 shadow-slate-400 pr-2 sm:static sm:inset-auto sm:ml-6">

                  Login
                  </a>
                // </Link>
              )}
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {currentMenus.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === pathName
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.href === pathName ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  ):<p>loading...</p>;
};


export default GetAuthWrapper(Header) 