import react, { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { siderMenus } from "../../pages/tutorial";
import { MenuList } from "./menuList";
import { SearchElement } from "./searchelement";



export const SiderBar = ({ menus, theme,isStatic }) => {
  
  return (
      <div className={`w-3/12 ${isStatic?"flex":"hidden"} lg:flex ml-0`}>
        <nav className=" h-full rounded-sm ">
          <SearchElement />
          <MenuList menus={menus} theme={theme} />
        </nav>
      </div>
  );
};
