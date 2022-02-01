
import useLocalStorage from "@rehooks/local-storage";
import { useState } from "react/cjs/react.development";
import { atom, selector, selectorFamily } from "recoil";


export const themeState = atom({
  key: "themeState", // unique ID (with respect to other atoms/selectors)
  default: "normal", // default value (aka initial value)
});

export const isAuthorizedStatus=atom({
  key:'isAuthorized',
  default:false
})
export const memoryUser=atom({
  key:'memoryUser',
  default:null
})
export const localStorageUser=selector({
  key:'localuser',
  get:({get})=>{
    if(typeof window != 'undefined'){
      const userStr=localStorage.getItem("user")
      if(userStr){
        return JSON.parse(userStr)
      }
      return null
    }
      return null
    
  },
  set:({get,set},newValue)=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    console.log(newValue)
    if(newValue){
      if(typeof window != 'undefined'){
        localStorage.setItem("user",JSON.stringify(newValue))
        set(memoryUser,newValue)
        console.log("here set localstorage")
        // set(isAuthorizedStatus,newValue.isAuthed)
      }
    }else{
      localStorage.clear("user")
      set(memoryUser,null)
      // set(isAuthorizedStatus,false)
    }
  
  }
})

export const onlineUserAtom=selectorFamily({
  key:"onlineUserState",
  get:(loginModel)=>async()=>{
    const res=await fetch('/api/auth',{method:'POST',body:JSON.stringify(loginModel)})
    if(res.status!==200){
      return new Error({status:res.status,message:res.message})
    }else{
      return await res.json()
    }
  }
})


