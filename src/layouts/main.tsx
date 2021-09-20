import React from 'react';


export const Main:React.FC=({children})=>{
    return (
        <div className="container px-5 mx-auto flex flex-wrap">
            {children}
        </div>
    )
}