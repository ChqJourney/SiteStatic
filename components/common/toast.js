import { useCallback, useEffect, useRef } from "react";

export const generateToast = (type, msg, list) => {
  let toastProperties = null;
  switch (type) {
    case "success":
      toastProperties = {
        id: list.length + 1,
        title: "Success",
        description: msg,
        backgroundColor: "#5cb85c",
      };
      break;
    case "danger":
      toastProperties = {
        id: list.length + 1,
        title: "Danger",
        description: msg,
        backgroundColor: "#d9534f",
      };
      break;
    case "info":
      toastProperties = {
        id: list.length + 1,
        title: "Info",
        description: msg,
        backgroundColor: "#5bc0de",
      };
      break;
    case "warning":
      toastProperties = {
        id: list.length + 1,
        title: "Warning",
        description: msg,
        backgroundColor: "#f0ad4e",
      };
      break;
    default:
      toastProperties = [];
  }
  return toastProperties;
};

export const Toast = ({ toastlist,location, setList }) => {
    const box=useRef()
    // const dd=box.current.getBoundingClientRect()
    
  const posionArr = {
    upright: "top-4 right-4",
    bottomright: "bottom-4 right-4",
    upleft: "top-4 left-2",
    bottomleft: "bottom-4 lfet-2",
    center: "top-0",
  };
  const classToast=`fixed text-lg z-50 ${posionArr[location]}`
  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastlist.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastlist, setList]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  return (
    <div ref={box}
      className={classToast}
    >
      {toastlist?.map((toast, i) => (
        <div
          key={i}
          className={`mb-1 border rounded-lg shadow-sm opacity-90 px-2 animate-moveout h-16 w-96`}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <button
            className="float-right bg-transparent text-white opacity-80 cursor-pointer "
            onClick={() => deleteToast(toast.id)}
          >
            x
          </button>
          <div>
            <p className="text-lg text-white font-bold text-left mt-0 mb-1">
              {toast.title}
            </p>
            <p className="m-0 text-white text-base text-left">
              {toast.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
