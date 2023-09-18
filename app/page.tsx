import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"


export default async function Home() {
  const session =await getServerSession(authOptions)
 
  return (
    <div className='p-5 m-5 bg-gray-600 text-white text-center'>
     Welcome  { session && session?.user!.name}
    </div>
  )
}


