import React, { Children } from 'react'



export const InfiTree=({nodes})=>{
    var firstLevelNodes=findNodes(nodes,"");
    return (
        <div className=''>{firstLevelNodes.map((val,ind,arr)=><TreeNode node={val} key={val.id}/>)}</div>
    )
}
function findNodes(nodes,parentId){
    return nodes.filter((val,ind,arr)=>val.parentId===parentId)
}

const TreeNode=({node})=>{
 
    return (
        <div className='flex'>
            <div className='items-bottom'>

            <input type="checkbox" className='h-4 w-4'></input>
            </div>
            <div className='ml-2 text-center'>{node.text}</div>
            {node.Children&&node.Children.map((val,ind)=><TreeNode node={val} key={val.id}/>)}
        </div>
    )
}