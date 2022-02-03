/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../services/authService";
import {useSession} from 'next-auth/react'


export default function GetAuthWrapper(WrapperComponent){
    return (props) => {
        const { data: session, status } = useSession()
        if(status==='loading') return<p>loading...</p>

        // let data={}

        // if(typeof window != 'undefined'){
            
        //     const item=localStorage.getItem("user")
        //     const user =item?JSON.parse(item):undefined;
        //     if(user&&user.expireAt&&user.expireAt>new Date()){
        //             data.user=user
        //     }
            
        //     console.log("re-render wrapper")
        // }
        if(status==='unauthenticated')return <WrapperComponent {...props} />;
        if(status==='authenticated')return <WrapperComponent {...props} {...session}/>;
          
        
      };
}
