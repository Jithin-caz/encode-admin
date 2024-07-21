//@ts-ignore
import clientPromise from "@/lib/mongodb";
import { NextApiRequest,NextApiResponse } from "next/dist/shared/lib/utils";



export async function GET(req:any, res:any)
{
  const getRegistervalue=(str:string)=>{
    const index = str.indexOf('registered=');
    const startIndex = index + 'registered='.length;
    if(str.substring(startIndex)==='true')
      return true
    else 
      return false
  }
  //@ts-ignore
  const client = await clientPromise;
  const db = client.db('data'); // use your database name
console.log('in get getTeams')

const  registered  =getRegistervalue(req.url) ;
  const teams=await db.collection('teams').find({ registered:registered }).toArray();
  //  for(var i=0;i<teams.length;i++)
  //  {
  //    for(var j=0;j<teams[i].members.length;j++)
  //    {
  //      const user={
  //        name:teams[i].members[j].name,
  //        email:teams[i].members[j].email,
  //        country:teams[i].members[j].country,
  //        contact:teams[i].members[j].contact,
  //        team:teams[i].members[j].team,
  //      }
  //      if(registered)
  //      {
  //        const res=await db.collection('registeredTeammembers').insertOne(user)
  //      }
  //      else
  //      {
  //        const res=await db.collection('notregisteredTeammembers').insertOne(user)
  //      }
  //    }
  //  }
  //@ts-ignore
  return Response.json({
    message:"get success",
    status:"201",
    teams:teams
  })
}