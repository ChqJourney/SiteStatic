import React from "react";
import Link from "next/link";

export const ContentCard = ({ picEle, title, description, href }) => {
  return (
    <div className="max-w-7xl col-span-4 md:col-span-2 text-center dark:shadow-gray-400 hover:shadow-md xl:col-span-4 static xl:flex items-center px-4 w-full border dark:border-gray-600 rounded-lg">
      <div className="flex justify-center mt-4">{picEle}</div>
      <div className="flex flex-col justify-center ml-8 h-48">
        <div className="font-medium text-2xl">{title}</div>
        <div className="text-lg my-2 text-gray-400  overflow-x-hidden">
          {description}
        </div>
      </div>
      <button className="btn-color rounded-md w-48  h-8 md:ml-4 mb-4">
        <Link href={href} passHref>
          <a className=" font-sans">Go and try</a>
        </Link>
      </button>
    </div>
  );
};
