import react from "react";
import { MenuList } from "./menuList";
import { SearchElement } from "./searchelement";

export const SiderBar = ({ menus,theme }) => {
  return (
    <nav className=" h-full rounded-sm ">
      <SearchElement />
      <MenuList menus={menus} theme={theme}/>
    </nav>
  );
};
