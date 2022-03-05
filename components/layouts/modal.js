import React, { useEffect, useState } from "react";

export const Modal = ({ isOpen, handleClose, postion, children }) => {
  console.log(postion)
  const postions = {
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-400 border rounded-lg h-96 w-96 z-50 absolute",
    left: "left-0 h-full top-16 w-64 border rounded-md bg-gray-600 absolute z-50",
    right: "right-0 h-full w-64 border bg-gray-600 absolute z-50",
    bottom: "bottom-0 w-screen h-48 bg-gray-400 absolute z-50",
    top: "top-0 w-screen h-48 bg-gray-400 absolute z-50",
  };
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) {
    return null;
  }
  return (
    <>
    <div
      id="modal-bg"
      onClick={handleClose}
      className={` bg-[#848A97] absolute z-40 opacity-30 w-full h-full`}
      >
    </div>
      <div
        id="modal-box" onClick={e=>e.preventDefault()}
        className={postions[postion??"center"]}
        >
        {children}
      </div>
        </>
  );
};
