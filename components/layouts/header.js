import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMail,FiMenu } from "react-icons/fi";

export const Header = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <div className="h-16 flex items-center justify-between border-b-2">
      <div className="ml-4 my-4">
        <Link href="/" passHref>
          <a>
            <Image
              alt="brand logo"
              src="/assets/brand-color.png"
              width={240}
              height={55}
            ></Image>
          </a>
        </Link>
      </div>
      <div className="flex items-center divide-x-2 divide-sky-500">
        {/* big screen nav */}
        <nav className="ml-24 flex">
          <menu
            className={`mx-8 font-sans hover:text-sky-500 
          ${
            pathName == "/tutorial"
              ? "hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-blue-400"
              : ""
          }`}
          >
            <Link href="/tutorial">Tutorial</Link>
          </menu>
          <menu
            className={`mx-8 font-sans hover:text-sky-500 
          ${
            pathName == "/tutorial"
              ? "hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-blue-400"
              : ""
          }`}
          >
            <Link href="/tools">Tools</Link>
          </menu>
          <menu
            className={`mx-8 font-sans hover:text-sky-500 
          ${
            pathName == "/about"
              ? "hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-blue-400"
              : ""
          }`}
          >
            <Link href="/about">About</Link>
          </menu>
        </nav>
        {/* small screen nav */}
        <nav className="ml-8 hidden">small nav</nav>
        {/* messge block */}
        <div className=" hidden md:flex items-center mx-8">
          <FiMail className="text-4xl mx-8 cursor-pointer stroke-orange-500" />
          <button className="btn-primary w-24 h-10 mx-2">Login</button>
        </div>
        <a className="md:hidden px-8">
          <FiMenu className="text-4xl stroke-orange-500"/>
          </a>
          
      </div>
    </div>
  );
};
