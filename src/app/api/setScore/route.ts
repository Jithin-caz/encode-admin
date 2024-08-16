//@ts-ignore
import clientPromise from "@/lib/mongodb";
import { NextApiRequest,NextApiResponse } from "next/dist/shared/lib/utils";
import { ObjectId } from "mongodb";


export async function GET(req:any, res:any)
{
  //@ts-ignore
  const client = await clientPromise;
  const db = client.db('data'); 
console.log('in get setScore')
const teams=await db.collection('teams').find({}).toArray();
const team2=await db.collection('teamtemp').find({}).toArray();
const score=await db.collection('scoreboard').find({}).toArray();
//  for(var i=0; i<teams.length;i++)
//  {
//      for(var j=0; j<team2.length;j++)
//      {
//          if(teams[i].team.toLowerCase().trim()===team2[j].TeamName.toLowerCase().trim())
//          {
//              await db.collection('teams').updateOne({ _id: new ObjectId(teams[i]._id as string) },
//              {$set: {score:team2[j].score}})  
//              break;
//          }
        
//      }
//  }


//  for(var i=0;i<team2.length;i++)
//  {
//    for(var j=0;j<score.length;j++)
//    {
//      if((team2[i].HackerRankId.trim()===`@${score[j].Team.trim()}`) || (team2[i].HackerRankId.trim()===score[j].Team.trim()))
//      {
//        await db.collection('teamtemp').updateOne({ _id: new ObjectId(team2[i]._id as string) },
//        { $inc: { score:score[j].FinalScore }  })
//        break;
//      }
//    }
//  }
return new Response(
    JSON.stringify({
      message: "not doing anything",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}