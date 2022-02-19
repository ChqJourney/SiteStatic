import react from "react";
import { MenuList } from "./menuList";
import { SearchElement } from "./searchelement";

export const SiderBar = ({ menus }) => {
  return (
    <nav className=" h-screen rounded-sm">
      <SearchElement />
      <MenuList menus={menus} />
    </nav>
  );
};
