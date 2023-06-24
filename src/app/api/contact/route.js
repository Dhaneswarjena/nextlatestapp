import dbConn from "@/utils/dbConn";
import contact from '@/app/models/contact'
import {NextResponse} from "next/server";


export async function POST(req,res) {
    try{
          const body=await req.json();
          await dbConn();
          await contact.create(body)
       return NextResponse.json({
            message:"message sent successfully"
       },{
           status:200
       })
    }
    catch(e){
        return NextResponse.json({
            message:"server error try again"
        },{
            status:500
        })
    }
}