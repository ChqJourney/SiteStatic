import React from "react";

export const SizeBox = ({index, title, description }) => {
  return (
    <div tabIndex={index}
      className="border col-span-4 md:col-span-2 lg:col-span-1 border-gray-600 max-w-md w-48
         shadow-gray-500 hover:shadow-lg hover:shadow-gray-700 shadow-sm rounded-lg focus:ring-1
         text-center h-24 flex flex-col justify-center"
    >
      <div className="font-medium">{title}</div>
      <div className="">{description}</div>
    </div>
  );
};
