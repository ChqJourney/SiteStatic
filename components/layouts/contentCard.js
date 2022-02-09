import React from 'react'
import { SplitButton } from './splitbButton'

export const ContentCard=()=>{

    const switchHandler=(index)=>{

    }
    return (
        <>
        <SplitButton switchAction={switchHandler}></SplitButton>
        <div className='w-full relative'>
            <div >
                
            </div>
        </div>
        </>
    )
}