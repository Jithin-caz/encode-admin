'use client'

import { useState } from "react"
import React from "react";
import { useAuth } from "../context/AuthContext";
interface LoginProps {
    setSignedin: React.Dispatch<React.SetStateAction<boolean>>;
  }
const Login= () =>
{
const [username,setusername]=useState('')
const [password,setPassword]=useState('')
const { signedIn, setSignedIn } = useAuth();
const FormSubmit=()=>{
    const requser=process.env.NEXT_PUBLIC_USERNAME
    const reqpass=process.env.NEXT_PUBLIC_PASSWORD
   
    if(username===requser&& password==reqpass)
    {
        localStorage.setItem('username',username)
       setSignedIn(true)
    }
    else{
        alert('invalid login credentials')
    }
}
    return <section className=" h-dvh flex items-center justify-center p-3 bg-yellow-50 bg-opacity-50">
        <form onSubmit={FormSubmit} className=" max-w-xl shadow-lg p-4">
            <h1>Login</h1>
        <input value={username} onChange={(e)=>setusername(e.target.value)}
         required placeholder='username' className='ease-in-out duration-500 focus:text-lg outline-none w-full mt-4 p-2 py-4  bg-transparent  border-b-2 border-slate-500 hover:border-white' type="text" name="" id="" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)}
         required placeholder='password' className='ease-in-out duration-500 focus:text-lg outline-none w-full mt-4 p-2 py-4  bg-transparent  border-b-2 border-slate-500 hover:border-white' type="text" name="" id="" />
        <button className=" mt-3 bg-slate-700 hover:bg-slate-900 text-slate-100 p-2 px-3 rounded-md">submit</button>
        </form>
    </section>
}
export default Login