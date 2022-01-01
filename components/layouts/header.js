import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import { FiMail, FiMenu } from "react-icons/fi";
import { Menu, Transition,Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Tutorial', href: '/tutorial', current: false },
  { name: 'Tools', href: '/tools', current: false },
  { name: 'About', href: '/about', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Header = () => {
  const router = useRouter();
  const pathName = router.pathname;
  // const navs=navigation.map((v,i)=>{if(v.href===pathName){v.current=true}});
  console.log(pathName);
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="assets/brand-simple.svg"
                    alt="Workflow"
                  /> */}
                  <Link href="/" passHref>

                  <img
                    className="block h-8 w-auto"
                    src="assets/brand-color.svg"
                    alt="Workflow"
                  />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href===pathName ? 'underline decoration-emerald-400 decoration-2 underline-offset-2' : '',
                          'px-3 py-2 rounded-md text-base font-medium text-sky-600 hover:text-sky-700 hover:scale-110'
                        )}
                        aria-current={item.href===pathName ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
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
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href===pathName ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.href===pathName ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    // <div className="h-16 flex items-center border-b-2 sticky">
    //   {/* logo block */}
    //   <div className="ml-4 my-2 hidden sm:flex">
    //     <Link href="/" passHref>
    //       <a>
    //         <Image
    //           alt="brand logo"
    //           src="/assets/brand-color.png"
    //           width={240}
    //           height={55}
    //         ></Image>
    //       </a>
    //     </Link>
    //   </div>
    //   <div className="ml-2 my-2 flex sm:hidden">
    //     <Link href="/" passHref>
    //       <a>
    //         <Image
    //           alt="brand logo"
    //           src="/assets/brand-simple.png"
    //           width={35}
    //           height={30}
    //         ></Image>
    //       </a>
    //     </Link>
    //   </div>

    //   <div className="flex grow items-center ">
    //     {/* big screen nav */}
    //     <nav className="ml-2 flex sm:ml-24">
    //       <menu
    //         className={`mx-2 ms:mx-8 font-sans hover:text-sky-500 
    //       ${
    //         pathName == "/tutorial"
    //           ? "hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-blue-400"
    //           : ""
    //       }`}
    //       >
    //         <Link href="/tutorial">Tutorial</Link>
    //       </menu>
    //       <menu
    //         className={`mx-2 ms:mx-8 font-sans hover:text-sky-500 
    //       ${
    //         pathName == "/tutorial"
    //           ? "hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-blue-400"
    //           : ""
    //       }`}
    //       >
    //         <Link href="/tools">Tools</Link>
    //       </menu>
    //       <menu
    //         className={`mx-2 ms:mx-8 font-sans hover:text-sky-500 
    //       ${
    //         pathName == "/about"
    //           ? "hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-blue-400"
    //           : ""
    //       }`}
    //       >
    //         <Link href="/about">About</Link>
    //       </menu>
    //     </nav>
    //   </div>
    //   {/* messge block */}
    //   <div className="flex flex-none items-center relative">
    //     <div className=" hidden sm:flex items-center sm:mx-8">
    //       <FiMail className="text-4xl mx-8 cursor-pointer stroke-orange-500" />
    //       <button className="btn-primary w-24 h-10 mx-2">Login</button>
    //     </div>
       
    //       <Menu as="div" className="absolute right-0 z-50 mx-2 sm:hidden">
    //         {({ open }) => (
    //           <>
    //             <Menu.Button>
    //               <FiMenu className="text-4xl stroke-orange-500" />
    //             </Menu.Button>
    //             <Transition
    //             as={Fragment}
    //               show={open}
    //               enter="transition duration-100 ease-out"
    //               enterFrom="transform scale-95 opacity-0"
    //               enterTo="transform scale-100 opacity-100"
    //               leave="transition duration-75 ease-out"
    //               leaveFrom="transform scale-100 opacity-100"
    //               leaveTo="transform scale-95 opacity-0"
    //             >
    //               <Menu.Items className="absolute">
    //                 <Menu.Item>
    //                   {({ active }) => (
    //                     <a
    //                       className={`${active && "bg-blue-500"}`}
    //                       href="/account-settings"
    //                     >
    //                       Account settings
    //                     </a>
    //                   )}
    //                 </Menu.Item>
    //                 <Menu.Item>
    //                   {({ active }) => (
    //                     <a
    //                       className={`${active && "bg-blue-500"}`}
    //                       href="/account-settings"
    //                     >
    //                       Account settings
    //                     </a>
    //                   )}
    //                 </Menu.Item>
    //               </Menu.Items>
    //             </Transition>
    //           </>
    //         )}
    //       </Menu>
        
    //   </div>
    // </div>
  );
};
