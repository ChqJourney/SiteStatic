import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMail, FiMenu } from "react-icons/fi";

export const Header = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <div className="h-16 flex items-center border-b-2">
      {/* logo block */}
      <div className="ml-4 my-2 hidden sm:flex">
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
      <div className="ml-2 my-2 flex sm:hidden">
      <Link href="/" passHref>
          <a>
            <Image
              alt="brand logo"
              src="/assets/brand-simple.png"
              width={35}
              height={30}
            ></Image>
          </a>
        </Link>
      </div>

      <div className="flex grow items-center ">
        {/* big screen nav */}
        <nav className="ml-2 flex sm:ml-24">
          <menu
            className={`mx-2 ms:mx-8 font-sans hover:text-sky-500 
          ${
            pathName == "/tutorial"
              ? "hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-blue-400"
              : ""
          }`}
          >
            <Link href="/tutorial">Tutorial</Link>
          </menu>
          <menu
            className={`mx-2 ms:mx-8 font-sans hover:text-sky-500 
          ${
            pathName == "/tutorial"
              ? "hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-blue-400"
              : ""
          }`}
          >
            <Link href="/tools">Tools</Link>
          </menu>
          <menu
            className={`mx-2 ms:mx-8 font-sans hover:text-sky-500 
          ${
            pathName == "/about"
              ? "hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-blue-400"
              : ""
          }`}
          >
            <Link href="/about">About</Link>
          </menu>
        </nav>

        
      </div>
      {/* messge block */}
      <div className="flex flex-none items-center">
          <div className=" hidden sm:flex items-center mx-8">
            <FiMail className="text-4xl mx-8 cursor-pointer stroke-orange-500" />
            <button className="btn-primary w-24 h-10 mx-2">Login</button>
          </div>
          <div className="sm:hidden">
            <a>
              <FiMenu className="text-4xl stroke-orange-500" />
            </a>
          </div>
        </div>
    </div>
  );
};
