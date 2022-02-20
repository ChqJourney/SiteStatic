import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../../pages/misc/ipsearch'
import { CircleSpinner } from '../layouts/spinner'

export const BlogBlockContainer=()=>{
    const {data,err}=useSWR('/api/blogs',fetcher)
    if(!data)return<CircleSpinner/>
    if(err)return <p>error...</p>
    return (
        <div className='container mt-20 mx-auto space-y-6'>
            {data.data.map(m=><BlogBlock key={m.id} blog={m}/>)}
        </div>
    )
}
export const BlogBlock=({blog})=>{
    console.log(blog)
    return (
        <div className=' flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]'>
            <span className='class="text-sm font-light text-gray-600'>{blog.createdAt.toString()}</span>
            <a href='#' className='block mt-2 text-xl font-bold text-gray-800 capitalize sm:text-2xl md:text-3xl hover:underline hover:text-blue-500'>{blog.title}</a>
            <p className='mt-2 text-gray-600'>{blog.keywords}</p>
            <a className='inline-flex items-center mt-4 text-gray-800 hover:underline'>
               <h3 className='font-medium'>{blog.createdBy}</h3>
            </a>
        </div>
    )
}