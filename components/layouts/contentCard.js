import React from 'react'
import { SplitButton } from './splitbButton'
import pic from '../../public/assets/ipbox.png'
import Image from 'next/image'
import Link from 'next/link'

export const ContentCard=({picEle,title,description,href})=>{

   
    return (
        <div className='max-w-7xl lg:col-span-2 xl:col-span-4 flex items-center px-4 w-full border rounded-lg'>
           {picEle}
            <div className='flex flex-col justify-center ml-8 h-48'>
                <div className='font-medium text-2xl'>{title}</div>
                <div className='text-lg my-2 text-gray-400  overflow-x-hidden'>{description}</div>
            </div>
            <button className='btn-color ml-4' ><Link href={href} passHref>
            <a >Go try</a>
            </Link>
            </button>
        </div>
    )
}