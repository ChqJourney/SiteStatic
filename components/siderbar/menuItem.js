import Link from "next/link";
import React from "react";

export const MenuItem=({menuItem})=>{

    return (
        <li>
            <div className="block  pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900">
                <Link href={menuItem.href}>{menuItem.text}</Link>
                </div>
        </li>
    )
}