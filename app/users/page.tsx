import {Suspense} from "react"
import UserTable from "./UserTable"
import Loading from "../Loading"
interface Props{
  searchParams:{sortOrder:string}
}
const UsersPage = async ({searchParams:{sortOrder}}:Props) => {
   
  return (
   <>
   <h1>Users</h1>
   <Suspense fallback={<Loading/>}>
       <UserTable sortOrder={sortOrder}/>
   </Suspense>

   </>
  )
}

export default UsersPage