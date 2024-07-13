"use client"

import HeroSection from "@/app/Components/HeroSection";
import Login from "@/app/Components/Login";
//import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";
export default function Hero()
{
    const [signedin, setSignedin] = useState(false)
   
    return signedin?<HeroSection/>:<Login setSignedin={setSignedin}/>
}