import react from "react";
import { MenuList } from "./menuList";
import { SearchElement } from "./searchelement";

export const SiderBar=({menus})=>{
    return (
        <nav className=" space-y-6 lg:space-y-2">
        <SearchElement/>
        <MenuList menus={menus}/>
        </nav>

    )
}