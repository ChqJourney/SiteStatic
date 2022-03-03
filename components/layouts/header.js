/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useContext, useEffect, useState } from "react";
import Image from "next/image";
import brand from "../../public/assets/brand-big.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useMounted } from "../hooks/useMounted";
import { useUser } from "@auth0/nextjs-auth0";
import { useTranslation } from "react-i18next";
import menus from '../../public/site/site.json'
import {useTheme} from 'next-themes'

const icon=<svg t="1646287698079" className="h-8 w-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1242" width="200" height="200"><path d="M320 85.333333c-76.373333 49.066667-128 135.68-128 234.666667s51.626667 185.6 129.28 234.666667C190.293333 554.666667 85.333333 449.706667 85.333333 320A234.666667 234.666667 0 0 1 320 85.333333m493.653333 64l61.013334 61.013334L210.346667 874.666667 149.333333 813.653333 813.653333 149.333333m-263.68 103.68L486.826667 213.333333 425.386667 256l17.92-72.533333L384 138.24l74.666667-5.12 24.746666-70.4L512 132.266667l73.813333 1.28-57.6 48.213333 21.76 71.253333m-140.8 154.026667l-49.493333-31.146667-47.786667 33.28 14.506667-56.32-46.506667-35.413333 58.026667-3.84 19.2-55.04 21.76 54.186667 58.026667 1.28-44.8 37.12 17.066666 55.893333M810.666667 576a234.666667 234.666667 0 0 1-234.666667 234.666667c-52.053333 0-100.266667-17.066667-139.093333-45.653334l328.106666-328.106666c28.586667 38.826667 45.653333 87.04 45.653334 139.093333m-187.733334 280.746667l118.186667-49.066667-10.24 142.933333-107.946667-93.866666m184.746667-115.2l49.066667-118.186667 93.866666 108.373333-142.933333 9.813334m49.066667-211.626667l-48.64-118.613333 142.506666 10.24-93.866666 108.373333M410.88 807.68l118.186667 49.066667-107.946667 93.44-10.24-142.506667z" fill="" p-id="1243"></path></svg>

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const {theme,setTheme}=useTheme()
  const { hasMounted } = useMounted(false);
  const { user, isLoading } = useUser();
  // const currentMenus = hasMounted ? menus : null;
  const currentUser = hasMounted ? user : null;
  const router = useRouter();
  const {t}=useTranslation('common')
  return  (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center mx-1 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 ml-2 flex items-center">
                  <Link href="/" passHref>
                    <div className="h-12 w-32 inline-block ml-2 cursor-pointer pt-1 md:pt-2">
                      <Image src={brand} alt="brand" layout="responsive" />
                    </div>
                  </Link>
                </div>
                <div className="hidden mt-2 sm:block sm:ml-10">
                  <div className="flex space-x-4">
                    {menus.map((item) => (
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
                        {t(item.name)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {hasMounted&&<button onClick={()=>setTheme(theme==='light'?'dark':'light')}
                 className={`${theme==='light'?'fill-sky-500':'fill-gray-200'} hover:scale-110`}>
                  {icon}
                </button>}
                <Menu as="div" className="mx-0 relative hidden sm:block">
                  <div>
                    <Menu.Button className="mx-1 flex text-sm rounded-full outline-0 hover:scale-110">
                      <span className="sr-only">Switch language</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8  stroke-sky-400 hover:stroke-purple-400"
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
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-175"
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
                  <Menu as="div" className="mx-2 relative">
                    <Menu.Button className="bg-gray-100 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <Link href={`/api/auth/login?returnTo=${router.pathname}`} passHref>
                  
                    <a
                      
                      className="flex items-center justify-center text-center cursor-pointer shadow-slate-400  sm:static sm:inset-auto sm:mx-2"
                    >
                      <span className="text-base hover:underline text-sky-600 decoration-green-400 underline-2 underline-offset-4">{t('loginBtn')}
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
              {menus.map((item) => (
                <div
                  key={item.name}
                  onClick={() =>
                    router.push(item.href, item.href, { locale: router.locale })
                  }
                  className={classNames(
                    item.href === router.pathname
                      ? "bg-gray-900 text-white"
                      : "text-black-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.href === router.pathname ? "page" : undefined}
                >
                  <a href="#">{t(item.name)}</a>
                </div>
              ))}
              <button className="flex items-center mx-2"
               onClick={()=>router.push(router.pathname,router.pathname,{locale:router.locales.find(f=>f!==router.locale)})}>
              <span className="sr-only">Switch language</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-18 mx-1 stroke-sky-400 hover:stroke-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      <span className="text-center ml-4">{router.locale==='zh'?"中文":"English"}</span>
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header;
