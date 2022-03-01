import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "../../pages/misc/ipsearch";
import { Pagination } from "../common/pagination";
import { CircleSpinner } from "../layouts/spinner";
import ReactHtmlParser from "html-react-parser";

export const BlogBlockContainer = ({ user }) => {
  const [pageInfo, setPageInfo] = useState({ pageSize: 5, pageIndex: 1 });
  const { data, err } = useSWR(
    `/api/blogs?pageIndex=${pageInfo.pageIndex}&pageSize=${pageInfo.pageSize}`,
    fetcher
  );
  const pageSwitch = async (num) => {
    setPageInfo({ ...pageInfo, pageIndex: num });
  };
  const isAuthed = user != null;
  if (!data)
    return (
      <div className="w-full h-full mt-20 flex justify-center">
        <CircleSpinner />
      </div>
    );
  if (err) return <p>error...</p>;
  return (
    <>
      <div className="container mt-20 mx-auto space-y-6">
        {data.data.map((m) => (
          <BlogBlock isAuth={isAuthed} key={m.id} blog={m} />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination pageSwitchCallback={pageSwitch} pageCount={data.count} />
      </div>
    </>
  );
};
export const BlogBlock = ({ blog, isAuth }) => {
  const blogContainer = useRef();
  const router = useRouter();
  const { mutate } = useSWRConfig();
  let i = 0;
  const showContent = ReactHtmlParser(blog.content, {
    replace: (domNode) => {
      i++;
      if (i > 15) {
        return <div></div>;
      }
    },
  });
  function handleScroll(event) {
    if (blogContainer.current) {
      const { scrollTop, scrollHeight, clientHeight } = blogContainer.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log("reached bottom");
      }
    }
  }
  const deleteBlog = async (id) => {
    const response = await fetch(`/api/blog?id=${id}`, { method: "DELETE" });
    if (response.status === 200) {
      mutate(
        `/api/blogs?pageIndex=${pageInfo.pageIndex}&pageSize=${pageInfo.pageSize}`
      );
    } else {
      console.log(await response.json());
    }
  };
  return (
    <div className=" flex flex-col bg-slate-50 rounded-lg container mx-auto max-w-3xl xl:max-w-none xl: w-3/5">
      <Link href={`/blog?id=${blog.id}`} passHref>
        <a
          href=""
          className="block mt-2 text-xl px-4 font-bold text-center text-gray-600 capitalize sm:text-2xl md:text-3xl hover:underline cursor-pointer hover:text-blue-500"
        >
          {blog.title}
        </a>
      </Link>
      <span className='class="text-sm font-light text-orange-600 text-center'>
        {new Date(blog.createdAt).toDateString()}
      </span>
      <div className="mt-2 text-gray-600 mx-4 border-t border-b border-gray-300  h-32 ">
        <div
          className="ql-editor overflow-y-auto "
          ref={blogContainer}
          onScroll={handleScroll}
        >
          {showContent}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 ml-3 mb-2 pr-3">
        <a className="inline-flex items-center mx-2 text-gray-800 hover:underline">
          <h3 className="font-medium font-sans text-orange-300">
            by{" "}
            <span className="text-gray-800 font-thin"> {blog.createdBy}</span>
          </h3>
        </a>
        <div>
          <button
            className="h-8 w-24 bg-slate-300 text-gray-900 ml-3 rounded-md"
            onClick={() => router.push(`/blog?id=${blog.id}`)}
          >
            Read more
          </button>
          <button
            className={`h-8 w-24 bg-orange-200 text-gray-600 ml-3 rounded-md ${
              !isAuth && "hidden"
            }`}
            onClick={() => router.push(`/blog/create?editBlogId=${blog.id}`)}
          >
            Edit
          </button>
          <button
            className={`h-8 w-24 bg-red-200 text-gray-600 ml-3 rounded-md ${
              !isAuth && "hidden"
            }`}
            onClick={() => deleteBlog(blog.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
