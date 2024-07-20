"use client"

import HeroSection from "@/app/Components/HeroSection";
import Login from "@/app/Components/Login";
import { useEffect } from "react";


import { useAuth } from "../context/AuthContext";
export default function Hero()
{
    const {signedIn, setSignedIn} = useAuth()
   
    useEffect(()=>{
        const user=localStorage.getItem('username')
        if(user)
        {
            setSignedIn(true)
        }
    },[])
    return signedIn?<HeroSection/>:<Login/>
}