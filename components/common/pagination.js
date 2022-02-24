import React, { useState, useEffect } from "react";

export const Pagination = ({ pageCount,pageSwitchCallback }) => {
  const [pageNum, setPageNum] = useState(1);
  let showCount = 5;
  let start = 1;
  if(!pageCount){
      showCount=1
      pageCount=100000
  }else{

      showCount = pageCount < showCount ? pageCount : showCount;
  }
  let left = Math.floor(showCount / 2);
  let right = showCount - left;
  if (pageNum - left > start) {
    start = pageNum - left;
  }
  if (pageNum + right > pageCount) {
    start = pageCount - showCount + 1;
  }
  useEffect(() => {
    pageSwitchCallback(pageNum);
  }, [pageNum]);

  return (
    <div className="flex my-2 justify-center">
      <button
        className="w-24 h-8 border"
        onClick={() => {
          if (pageNum > 1) {
            setPageNum(pageNum - 1);
          }
        }}
      >
        Previous
      </button>
      <div className="flex">
        {start > 1 && <div className="mx-1">...</div>}
        {Array(showCount)
          .fill("num")
          .map((_, index) => (
            <PageIndexBlock key={index}
              currentIndex={pageNum}
              pageNum={index + start}
              gotoPage={setPageNum}
            />
          ))}
        {start + showCount < pageCount && <div className="mx-1">...</div>}
      </div>
      <button
        className="w-24 h-8 border"
        onClick={() => {
          if (pageNum < pageCount) {
            setPageNum(pageNum + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};
const PageIndexBlock = ({ currentIndex, pageNum, gotoPage }) => {
  return (
    <button
      onClick={() => gotoPage(pageNum)}
      className={`w-8 h-8 border flex justify-center items-center mx-1 rounded-sm ${
        currentIndex == pageNum ? "ring-1 ring-orange-400" : ""
      }`}
    >
      {pageNum}
    </button>
  );
};