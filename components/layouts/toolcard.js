import Link from "next/link";
import React from "react";

export const ToolCard=({tool})=>{

    return (
        <div key={tool.id} className="group  border-2 border-gray-300 rounded-lg overflow-hidden pl-3 pb-2 hover:drop-shadow-lg">
               
                <h2 className="text-xl mt-3 mb-5 text-gray-800 font-semibold">
                  <Link href={tool.href}>
                    {tool.name}
                  </Link>
                </h2>
                <p className="text-xs font-medium text-gray-500">{tool.description}</p>
              </div>
    )
}