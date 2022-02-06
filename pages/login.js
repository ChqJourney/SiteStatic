import { LockClosedIcon } from '@heroicons/react/solid'
import useLocalStorage, { deleteFromStorage, writeStorage } from '@rehooks/local-storage'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Login(){
  const router=useRouter()
  console.log(router.query)
  // const [localuserData,setLocalUserData]=useLocalStorage('user',null)
  const [localUser]=useLocalStorage('user')
  let initalLoginModel={email:'',password:'',isRemember:false};
  if(localUser&&localUser.isRemember){
    initalLoginModel.email=localuserData.email
    initalLoginModel.password=localuserData.password
    initalLoginModel.isRemember=true
  }
  const [loginModel,setLoginModel]=useState(initalLoginModel)

  async function handleLoginClick(e){
    e.preventDefault()
    // console.log(loginModel)
    // const res=await fetch('/api/auth',{method:'POST',body:JSON.stringify(loginModel)})
    // const body=await res.json()
    // if(body&&body.token){
    //   writeStorage("user",{...body,isAuthed:true,isRemember:loginModel.isRemember})
    //   router.push(router.query.returnUrl)
    // }else{
    //   deleteFromStorage("user")
    //   console.log("login failed")
    // }
    
  }
    return (
        
    <>
     
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="assets/brand-color-nobg.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or</p>
              <Link href="/" passHref>
                <div className="font-medium cursor-pointer mt-2 text-center text-indigo-600 hover:text-indigo-500">
                  start your tour without identity
                  </div>
              </Link>
          </div>
          <div className="mt-8 space-y-6" >
            <input type="hidden" name="remember" defaultValue="false" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={e=>setLoginModel({...loginModel,email:e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={e=>setLoginModel({...loginModel,password:e.target.value})}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  onChange={e=>setLoginModel({...loginModel,password:e.target.value})}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/forgetPwd" passHref>
                <div  className="font-medium cursor-pointer text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </div>
                </Link>
              </div>
            </div>

            <div>
              <button onClick={(e)=>handleLoginClick(e)}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  
    )
}

// Login.getLayout = function getLayout(page) {
//   return (
//     <RecoilRoot>

//     <GlobalLayout>
//       {page}
//     </GlobalLayout>
//     </RecoilRoot>
//   )
// }