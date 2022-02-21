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
        <div className=' flex flex-col bg-slate-50 rounded-lg container mx-auto max-w-3xl xl:max-w-none xl: w-3/5'>
            <Link href={`/blog?id=${blog.id}`} passHref>
            <a href='' className='block mt-2 text-xl px-4 font-bold text-center text-gray-600 capitalize sm:text-2xl md:text-3xl hover:underline cursor-pointer hover:text-blue-500'>{blog.title}</a>
            </Link>
            <span className='class="text-sm font-light text-orange-600 text-center'>{new Date(blog.createdAt).toDateString()}</span>
            <div className='mt-2 text-gray-600 mx-4 border-t border-b border-gray-300  h-32 '>
            <div className="ql-editor overflow-y-hidden " dangerouslySetInnerHTML={{__html: blog.content}}></div>
                </div>
           <div className='flex items-center justify-between mt-4 ml-3 mb-2'>
               <a className='inline-flex items-center mx-2 text-gray-800 hover:underline'>
                   <h3 className='font-medium font-sans text-orange-400'>by {blog.createdBy}</h3>
               </a>
               <div>

               <button className='h-8 w-24 bg-slate-300 text-gray-900 rounded-md'>Read more</button>
               <button className='h-8 w-24 bg-orange-200 text-gray-600 mx-3 rounded-md'>Edit</button>
               </div>
            </div> 
        </div>
    )
}