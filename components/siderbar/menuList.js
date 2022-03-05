import React from "react";
import { MenuItem } from "./menuItem";

export const MenuList=({menus,theme})=>{

    return (
        
        
        <ul className=" border-sky-500 ml-2 mt-1">
            {menus?.map(m=>(<MenuItem key={m.id} theme={theme} menuItem={m}/>))}
        </ul>
        
    )
}