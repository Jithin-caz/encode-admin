"use client"

import { useEffect, useState } from "react"
import axios from "../../../node_modules/axios/index"

export default function HeroSection()
{
    const [notRegTeams,setNotRegTeams]=useState(true)
    const [nteams,setNteams]=useState(0)
    const [teams,setTeams]=useState<any>([])
    const getTeams=async(registered:boolean)=>{
        const response=await axios.get("/api/getTeams",{
            params: { registered: registered },
          })
        console.log('teams are')
        console.log(response.data.teams)
        await setTeams(response.data.teams.sort((a:any, b:any) => a.team.localeCompare(b.team)))
       await setNteams(response.data.teams.length)
    }
    useEffect(()=>{
           getTeams(!notRegTeams)
    },[notRegTeams])
    const deleteTeam=async(team:string)=>{
      const confirm=window.confirm('do you want to delete')
      if(confirm)
      {
            await axios.delete("/api/deleteTeam",
       {
         data:{team},
       }).then((response)=>{
         console.log(response)
         window.location.reload();
         // alert('deleted.Please refresh page')
        
     })
       
      }
      else{
        alert('not deleted')
      }
   
     
    }
    return <section className=" min-h-dvh bg-slate-200 text-white pb-10">
       
       <div className=" bg-slate-600 text-center text-white py-24">
       <h1 className=" text-4xl font-mono">Admin page of Extreme ENCODE</h1> 
       </div>
       <div className=" flex gap-3 mt-6 justify-center ">
        <button onClick={()=>setNotRegTeams(true)} className={`p-2 rounded-md ${notRegTeams?'bg-slate-700':'bg-slate-200'} ${notRegTeams?'text-white':'text-slate-700'}`}>not registered teams</button> 
        <button onClick={()=>setNotRegTeams(false)} className={`p-2 rounded-md ${!notRegTeams?'bg-slate-700':'bg-slate-200'} ${!notRegTeams?'text-white':'text-slate-700'}`}>registered teams</button>
       </div>
       <div className=" pt-5 text-black px-2 flex flex-col">
        <p className=" pb-5">no of teams is {nteams}</p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch gap-5">
            {teams.map((team:any,index:any)=><div key={team} className=" flex-col p-2 rounded-md bg-slate-100 text-slate-700  col-span-1 shadow-md ">
            <div className=" w-full flex justify-between"><h1 className=" font-semibold">{team.team}</h1> <button className=" opacity-70 hover:scale-110 duration-500 ease-in-out hover:opacity-100" onClick={()=>{deleteTeam(team.team)}}><img width="20" height="20" src="https://img.icons8.com/sf-regular-filled/48/filled-trash.png" alt="filled-trash"/></button></div>
            <p className=" text-xs pb-3">country:{team.members[0].country}</p>
            <p className=" font-semibold">members:</p>
            <ul>
             {team.members.map((member:any,ind:any)=><li className=" text-sm flex-col" key={member}>
               <p className=" pb-2">{member.name} <br />{member.email}</p> 
             </li> )}   
            </ul>
            <p className=" text-sm font-semibold">Score:{team.score}</p>
            </div>)}
        </div>
       </div>
    </section>
}