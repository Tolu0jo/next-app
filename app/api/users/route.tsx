import { NextRequest, NextResponse } from "next/server"
import schema from "./schema";
import prisma from "@/prisma/client";


export const GET =async ()=>{
 const users = await prisma.user.findMany()
   
   return NextResponse.json(users)
}

export const POST =async (req:NextRequest)=>{
const body = await req.json();
const existingUser = await prisma.user.findUnique({
   where:{email:body.email}
})
if(existingUser) return NextResponse.json({Error:"User already exist"},{status: 400})
const validation = schema.safeParse(body)
if(!validation.success) return NextResponse.json(validation.error.errors)
 const user = await prisma.user.create({
data:{
   name:body.name,
   email:body.email
}})
   return NextResponse.json(user,{status: 201})
}
