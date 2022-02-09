import React from 'react'

export const SplitButton=({switchAction})=>{


    return (
        <div
            className="inline-flex rounded-lg shadow-sm w-11/12 justify-center"
            role="group"
          >
            <button
              type="button" onClick={()=>switchAction(0)}
              className="py-2 px-4 text-sm font-medium w-1/3 text-amber-600 bg-white rounded-l-lg border-gray-200 
              hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
            >
              Images tools
            </button>
            <button
              type="button" onClick={()=>switchAction(1)}
              className="py-2 px-4 text-sm w-1/3 font-medium text-lime-600 bg-white border-gray-200 
              hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
              
            >
             Documents tools
            </button>
            <button
              type="button" onClick={()=>switchAction(2)}
              className="py-2 px-4 text-sm w-1/3 font-medium text-orange-600 bg-white rounded-r-md  border-gray-200 
              hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              Miscellaneous tools
            </button>
          </div>
    )

}