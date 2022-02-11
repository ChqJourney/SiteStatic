import { getAccessToken, useUser } from '@auth0/nextjs-auth0'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import Layout from '../components/layouts/layout'


function Site({menus}){
  const { user, error, isLoading } = useUser();
  const [token,setToken]=useState('')
  const sendRequest=async()=>{
    const response=await fetch('api/token')
    const res=await response.json()
    console.log(res)
  }
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;



  return (
    <Layout menus={menus}>

      {user ?(
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button className='btn-primary my-2' onClick={sendRequest}>Get token</button>
          <p className='text-red-500 h-12'>{token?token:"no yet"}</p>
          <button className='btn-color my-2' onClick={sendRequest}>Send request</button>
        </div>
      ):(
        <p className='text-center'>no login</p>
      )}
    </Layout>
  );
}
export default Site

export async function getServerSideProps({locale}) {
    const fs=require('fs')
    var file=await fs.readFileSync('./Users/site.json','utf-8')
    
      var jsObj=JSON.parse(file)
      console.log(jsObj)
    return {
      props: {
        ...await serverSideTranslations(locale, ['common', 'footer','header']),
        menus:jsObj
      }, // will be passed to the page component as props
    }
  }