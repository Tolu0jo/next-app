import { NextRequest, NextResponse } from "next/server"
import schema from "./schema";

export const GET =()=>{
   return NextResponse.json([
      {id: 1, name: "Tolu"},
      {id: 2, name: "Tola"}
   ])
}

export const POST =async (req:NextRequest)=>{
const body = await req.json();
const validation = schema.safeParse(body)
if(!validation.success) return NextResponse.json(validation.error.errors)
   return NextResponse.json({id: 1,name:body.name},{status: 201})
}
