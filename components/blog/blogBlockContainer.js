import Link from 'next/link'
import { useRouter } from 'next/router'
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
    return (
        <div className=' flex flex-col bg-slate-100 rounded-lg container mx-auto max-w-3xl xl:max-w-none xl: w-3/5'>
            <Link href={`/blog?id=${blog.id}`} passHref>
            <a href='' className='block mt-2 text-xl font-bold text-center text-gray-600 capitalize sm:text-2xl md:text-3xl hover:underline cursor-pointer hover:text-blue-500'>{blog.title}</a>
            </Link>
            <span className='class="text-sm font-light text-orange-600 text-center'>{blog.createdAt.toDateString()}</span>
            <div className='mt-2 text-gray-600 mx-2 border border-orange-300 rounded-md h-28 overflow-auto'>
            <div className="ql-editor" dangerouslySetInnerHTML={{__html: blog.content}}></div>
                </div>
           <div className='flex items-center justify-between mt-4 ml-3'>
               <button className='h-8 w-24 bg-slate-300 text-orange-600 rounded-md'>Read more</button>
               <a className='inline-flex items-center mx-2 text-gray-800 hover:underline'>
                   <h3 className='font-medium font-sans text-orange-400'>{blog.createdBy}</h3>
               </a>
            </div> 
        </div>
    )
}