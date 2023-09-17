import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='p-5 m-5 bg-gray-600 text-white text-center'>
     hello
     
     <Link href={"/users"} className="ml-3"> 
     link
     </Link>
    </div>
  )
}
