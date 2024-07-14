//@ts-ignore
import clientPromise from "@/lib/mongodb";
import { NextApiRequest,NextApiResponse } from "next/dist/shared/lib/utils";



export async function DELETE(req:any, res:any)
{
    //@ts-ignore
    const client = await clientPromise;
    const db = client.db('data'); // use your database name
  console.log('in delete team')
  const {team}=await req.json()
 
  const filter={team:team.toLowerCase()}
  console.log(team)
    const result=await db.collection('teams').deleteOne(filter);
    //@ts-ignore
    return Response.json({
        message:"delete success",
        status:"201",
        res:result
      })
}