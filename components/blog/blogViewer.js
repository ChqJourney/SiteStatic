import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../../pages/misc/ipsearch'
import { CircleSpinner } from '../layouts/spinner'
import ReactHtmlParser from 'react-html-parser'

export const BlogViewer=({id})=>{
    console.log(id)
    const {data,err}=useSWR(['/api/blog',id],fetcher)
    if(!data)<CircleSpinner/>
    if(data)return(
        <div className='container mx-auto max-w-5xl py-6'>
        <div className='text-3xl font-bold'>{data.data.title}</div>
        <div className='text-gray-500'>#{data.data.keywords}</div>
        <div className="ql-editor" dangerouslySetInnerHTML={{__html: data.data.content}}></div>
        </div>
    )
}