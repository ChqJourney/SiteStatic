import React, { Fragment, useContext, useEffect, useState } from "react";
import Image from "next/image";
import brand from "../../public/assets/brand-color-nobg.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useMounted } from "../hooks/useMounted";
import { useUser } from "@auth0/nextjs-auth0";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header({ menus }) {
  const { hasMounted } = useMounted(false);
  const { user, isLoading } = useUser();
  const currentMenus = hasMounted ? menus : null;
  const currentUser = hasMounted ? user : null;
  const router = useRouter();
  return currentMenus ? (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
                <div className="flex-shrink-0 mt-2 ml-2 flex items-center">
                  <Link href="/" passHref>
                    <div className="h-12 w-32 inline-block ml-2 cursor-pointer pt-1 md:pt-2">
                      <Image src={brand} alt="brand" layout="responsive" />
                    </div>
                  </Link>
                </div>
                <div className="hidden mt-2 sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {currentMenus.map((item) => (
                      <a
                        key={item.name}
                        onClick={() =>
                          router.push(item.href, item.href, {
                            locale: router.locale,
                          })
                        }
                        className={classNames(
                          item.href === router.pathname
                            ? "underline decoration-emerald-400 decoration-2 text-xl  underline-offset-2"
                            : "",
                          "px-3 py-2 rounded-md cursor-pointer text-base font-base text-sky-600 hover:text-sky-700 hover:scale-110"
                        )}
                        aria-current={
                          item.href === router.pathname ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="mx-0 relative">
                  <div>
                    <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Switch language</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 mx-1 stroke-gray-200 md:stroke-sky-400 hover:stroke-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-24 z-50 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            onClick={()=>router.push(router.pathname,router.pathname,{locale:'en'})}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            English
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            onClick={()=>router.push(router.pathname,router.pathname,{locale:'zh'})}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Chinese
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {currentUser ? (
                  <Menu as="div" className="ml-0 mr-3 relative">
                    <div>
                      <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        {/* <div className="h-8 w-8 inline-block"> */}
                        {/* <img alt="adf" className="h-8 w-8 inline-block" src="/public/assets/avatars/man.png"/> */}
                        {/* </div> */}
                        <img
                          className="h-8 w-8 rounded-full"
                          src={
                            currentUser?.picture ?? "/assets/avatars/man.png"
                          }
                          alt="avatar"
                        />
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
                              {currentUser.name}
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/api/auth/me" passHref>
                            
                            <a
                              
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                           <Link href="/api/auth/logout" passHref>

                            <a
                              
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                           </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Menu as="div" className="mx-0 relative">
                    <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <Link href="/api/auth/login" passHref>
                  
                    <a
                      
                      className="flex items-center cursor-pointer shadow-slate-400 pr-2 sm:static sm:inset-auto sm:ml-6"
                    >
                      <span className="text-lg hover:underline text-sky-600 decoration-green-400 underline-2 underline-offset-4">Login
                        </span>
                    </a>
                  </Link>
                    </Menu.Button>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {currentMenus.map((item) => (
                <div
                  key={item.name}
                  onClick={() =>
                    router.push(item.href, item.href, { locale: currentLang })
                  }
                  className={classNames(
                    item.href === router.pathname
                      ? "bg-gray-900 text-white"
                      : "text-black-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.href === router.pathname ? "page" : undefined}
                >
                  <a href="#">{item.name}</a>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  ) : (
    <p>loading...</p>
  );
}

export default Header;
