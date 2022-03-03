import React from "react";
import useSWR from "swr";
import { fetcher } from "../../pages/misc/ipsearch";
import { CircleSpinner } from "../layouts/spinner";
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/router";
import Link from "next/link";

export const BlogViewer = ({ id }) => {
  console.log(id);
  
  const { data, err } = useSWR(`/api/blog?id=${id}`, fetcher,{fallbackData:{data:{}}});
  if (!data) <CircleSpinner />;
  if (data)
    return (
      <div className="container mx-auto max-w-5xl py-6">
        <div className="text-3xl font-bold text-center font-sans text-gray-800">
          {data.data.title}
        </div>
        <div className="text-gray-500 text-center">#{data.data.keywords}</div>
        <div
          className="ql-editor text-base"
          dangerouslySetInnerHTML={{ __html: data.data.content }}
        ></div>
        <div className="flex mt-10 justify-center items-center">
          <Link passHref href="/blogs">
            <a href="#" className="font-serif text-gray-600 hover:text-sky-600">
              {" "}
              return to blog list
            </a>
          </Link>
        </div>
      </div>
    );
};
