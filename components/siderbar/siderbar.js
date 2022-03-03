import react from "react";
import { MenuList } from "./menuList";
import { SearchElement } from "./searchelement";

export const SiderBar = ({ menus,theme }) => {
  return (
    <nav className=" h-full rounded-sm hidden w-3/12 md:inline-block">
      <SearchElement />
      <MenuList menus={menus} theme={theme}/>
    </nav>
  );
};
