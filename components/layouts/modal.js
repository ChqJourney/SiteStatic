import React, { useEffect, useState } from "react";

export const Modal = ({isOpen,handleClose,children}) => {
  
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if(!isOpen){
    return null
  }
  return (
      <div
        id="modal-bg" onClick={handleClose}
        className={` bg-[#848A97] top-0 left-0 z-50 right-0 absolute w-full h-full`}
      >
      <div
        id="modal-box"
        className={`sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex flex-col items-center justify-center -translate-y-1/2 p-6 bg-[#FFFFEB] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute`}
      >
        {children}
      </div>
      </div>
  );
};
