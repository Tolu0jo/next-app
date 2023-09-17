import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
interface Props{
    params:{id:number}
}
export const GET =(req:NextRequest,{params:{id}}:Props)=>{
    if(id>10) return NextResponse.json({error : `user with id ${id} not found`},{status:404});
    return NextResponse.json({id,name:"Tolu"},{status:200});
}
export const PUT =async(req:NextRequest,{params:{id}}:Props)=>{
    const body = await req.json();
    const validation = schema.safeParse(body)
    if(!validation.success) return NextResponse.json(validation.error.errors,{status:404});
 
       return NextResponse.json({id: 1,name:body.name},{status: 200})
}
export const DELETE =async(req:NextRequest,{params:{id}}:Props)=>{
    try {
        const body = await req.json();
    if(id > 10) return NextResponse.json({error : `user with id ${id} not found`},{status:404});
  
       return NextResponse.json({},{status: 200})  
    } catch (error) {
        console.log(error)
    }
  
}