import React from "react";

export const SearchElement = () => {
  return (
    <div className="pointer-events-auto mb-5">
      <div className="mt-1 px-2 relative border-0 rounded-md">
        <div className="absolute inset-y-0 left-1 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-200 text-sm">
            <SearchIcon />
          </span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className=" h-8 outline-0 ring-1 focus:ring-orange-400 block active:border-0 active:ring-0 w-11/12 pl-8 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="Quick search..."
        />
      </div>
    </div>
  );
};

const SearchIcon = () => {
  return (
    <svg
      t="1643554468663"
      className="h-4 w-4 fill-slate-300"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1241"
      width="20"
      height="20"
    >
      <path
        d="M992.256992 871.396769l-242.55242-206.297553c-25.087216-22.559295-51.902378-32.926971-73.565701-31.935002 57.246211-67.069904 91.83713-154.075185 91.83713-249.176213 0-212.057373-171.930627-383.988-383.988-383.988s-383.988 171.930627-383.988 383.988 171.930627 383.988 383.988 383.988c95.101028 0 182.106309-34.590919 249.176213-91.83713-0.991969 21.663323 9.375707 48.478485 31.935002 73.565701l206.297553 242.55242c35.326896 39.230774 93.021093 42.55867 128.219993 7.35977s31.903003-92.893097-7.35977-128.219993zM384.019999 640.012c-141.371582 0-255.992-114.620418-255.992-255.992s114.620418-255.992 255.992-255.992 255.992 114.620418 255.992 255.992-114.620418 255.992-255.992 255.992z"
        p-id="1242"
      ></path>
    </svg>
  );
};
