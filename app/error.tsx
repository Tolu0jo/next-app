"use client"
import React from 'react'
interface Props{
    error:Error
    reset:() => void
}


const Error = ({error,reset}:Props) => {
 
  return (
    <>
       <div>error has occured</div>
       <button className='btn' onClick={()=>reset()}>Retry</button>
    </>

  )
}

export default Error