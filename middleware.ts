// import { NextRequest, NextResponse } from "next/server"

// export const middleware=(req:NextRequest)=>{

//     return NextResponse.redirect(new URL("/new",req.url))

// }

import middleware from "next-auth/middleware"
export default middleware

//or export{default} from "next-auth/middleware"
export const config={
    matcher:["/users/:id"]
}