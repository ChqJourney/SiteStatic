import { InfiTree } from "../../components/list/infitree";

const sampleNodes=[
    {id:0,text:"node a",parentId:""},
    {id:1,text:"node b",parentId:""},
    {id:2,text:"node c",parentId:""},
    {id:3,text:"node d",parentId:""},
    {id:4,text:"node e",parentId:""},
]

export default function Show(){

    return (
        <div className="container mx-auto flex  flex-col justify-center">
            <div>Tree as below</div>
            <div className="">

            <InfiTree nodes={sampleNodes}/>
            </div>
        </div>
    )
}