import Link from "next/link";
import React from "react";
import b from '../../public/assets/brand-color.svg'

export const ToolCard = ({ tool }) => {
  return (
    <div id={tool.id} tabIndex={tool.index}
      className="h-48 ring-1 relative focus:ring-sky-900 dark:ring-sky-200 focus:dark:ring-orange-600
      col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 
      rounded-lg overflow-hidden pl-3 pb-2 hover:shadow-2xl "
    >
      <Link href={tool.href} passHref>
        <h2 className="text-lg mt-3 mb-5 text-gray-800 dark:text-gray-200 hover:cursor-pointer hover:text-sky-600 font-semibold">
        {tool.name}
      </h2>
      </Link>
      <p className="text-xs font-medium text-gray-500 dark:text-gray-200">{tool.description}</p>
      {tool.pic&&<div className="absolute bottom-1 left-2 "><img src={tool.pic} className="h-16" alt="pic"></img></div>}
    </div>
  );
};
