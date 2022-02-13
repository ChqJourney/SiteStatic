import React from 'react'

export const SizeBox=({title,description})=>{

    return (
        <div className="border col-span-4 md:col-span-2 lg:col-span-1 border-gray-600 shadow-gray-500 hover:shadow-lg hover:shadow-gray-700 shadow-sm rounded-lg text-center h-24 flex flex-col justify-center">
                        <div className='font-medium text-gray-700'>{title}</div>
                        <div className='text-gray-700'>{description}</div>
                    </div>
    )
}