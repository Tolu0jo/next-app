import React from 'react'
import {notFound} from "next/navigation"
interface Props{
    params: {id:number}
}
const index = ({params:{id}}:Props) => {
  if(id>10) notFound()
  return (
    <div>index {id}</div>
  )
}

export default index