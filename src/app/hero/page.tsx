"use client"

import HeroSection from "@/app/Components/HeroSection";
import Login from "@/app/Components/Login";


import { useAuth } from "../context/AuthContext";
export default function Hero()
{
    const {signedIn, setSignedIn} = useAuth()
   
    return signedIn?<HeroSection/>:<Login/>
}