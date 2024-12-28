import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try{
     const urls = await prisma.url.findMany({
        orderBy:{createdat:'desc'},
        take:0

     })
    return NextResponse.json(urls)
    }catch(error){
    console.error('Error Fetching Urls',error);
    return NextResponse.json({error:'Internal Server error'},{status:500})
    }
}