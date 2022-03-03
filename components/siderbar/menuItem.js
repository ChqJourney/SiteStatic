import Link from "next/link";
import React, { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { MenuList } from "./menuList";

export const MenuItem = ({ menuItem, theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { state, dispatch } = useAppContext();
  return (
    <li className="flex my-1 py-1">
      <div className="">
        {menuItem.subMenu?.length > 0 ? (
          <button
            className={`${
              theme === "dark" ? "fill-white" : "fill-slate-500"
            } cursor-pointer`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Expander isExpand={isExpanded} />
          </button>
        ) : (
          <button
            className={`${
              theme === "dark" ? "fill-white" : "fill-slate-500"
            } cursor-pointer`}
          >
            <DotIcon />
          </button>
        )}
      </div>
      <div className="block w-48 border-blue-600 text-left text-slate-700 hover:text-sky-600">
        <div className="flex items-center">
          <a
            onClick={() =>
              dispatch({
                type:'switch_tutorialId',
                value:menuItem.href
              })
            }
            className="text-lg align-middle dark:text-white hover:scale-110 font-sans cursor-pointer"
          >
            {menuItem.text}
          </a>
        </div>

        {isExpanded && (
          <div className=" border-l ml-2 border-sky-500">
            <MenuList menus={menuItem.subMenu} />
          </div>
        )}
      </div>
    </li>
  );
};

const Expander = ({ isExpand, theme }) => {
  return isExpand ? (
    <svg
      t="1646325036857"
      className="h-6 w-8 stroke-2"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1339"
      width="200"
      height="200"
    >
      <path
        d="M512 685.248l-278.624-278.624 45.248-45.248L512 594.752l233.376-233.376 45.248 45.248z"
        fill="#181818"
        p-id="1340"
      ></path>
    </svg>
  ) : (
    <svg
      t="1646324991391"
      className="h-6 w-8 stroke-2"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1203"
      width="200"
      height="200"
    >
      <path
        d="M625.813 512.24L326 212.426 368.426 170l321.027 321.026c11.716 11.716 11.716 30.711 0 42.427L368.426 854.479 326 812.053 625.813 512.24z"
        p-id="1204"
      ></path>
    </svg>
  );
};
const ExpandStatusIcon = () => {
  return (
    <svg
      t="1645008761120"
      className="h-6 w-6"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2166"
    >
      <path
        d="M533.333333 516.266667l-174.933333-170.666667-64 59.733333 234.666667 234.666667L768 405.333333l-59.733333-59.733333-174.933334 170.666667z"
        fill="#444444"
        p-id="2167"
      ></path>
    </svg>
  );
};
const DotIcon = ({ theme }) => {
  return (
    <svg
      t="1645008815228"
      className={`h-8 w-8 `}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4307"
    >
      <path
        d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z"
        p-id="4308"
      ></path>
    </svg>
  );
};
