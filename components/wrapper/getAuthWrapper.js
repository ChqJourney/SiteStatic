/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { useRouter } from "next/router"
import { useEffect, useState } from "react";



export default function GetAuthWrapper(WrapperComponent){
    return (props) => {
        const [data,setData]=useState(null)
        useEffect(()=>{
            if(typeof window != 'undefined'){
                
                const item=localStorage.getItem("user")
                const user =item?JSON.parse(item):undefined;
                if(user&&user.expireAt){
                    if(user.expireAt>new Date()){

                        setData({user:user})
                    }
                }
                console.log("re-render wrapper")
            }
        },[])
        
        return <WrapperComponent {...props} {...data}/>;
          
        
      };
}
