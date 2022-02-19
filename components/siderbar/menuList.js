import React from "react";
import { MenuItem } from "./menuItem";

export const MenuList=({menus})=>{

    return (
        <ul className=" border-sky-500 ">
            {menus?.map(m=>(<MenuItem key={m.id} menuItem={m}/>))}
        </ul>
    )
}