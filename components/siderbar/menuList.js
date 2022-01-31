import React from "react";
import { MenuItem } from "./menuItem";

export const MenuList=({menus})=>{

    return (
        <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
            {menus.map(m=>(<MenuItem key={m.id} menuItem={m}/>))}
        </ul>
    )
}