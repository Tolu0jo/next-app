"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Loading from "./Loading";

const NavBar = () => {
  const { status, data: session } = useSession();
 
  return (
    <div className="flex bg-slate-200 p-5 justify-between">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href={"/users"}>Users</Link>
      {status === "loading" && <div><Loading/></div>}
      {status ==="authenticated" && <div>{session.user!.name}
      <Link href={"/api/auth/signout"} className="ml-3">
        Sign Out
      </Link></div>}
      {status === "unauthenticated" && (
       <div>
        <Link href={"/api/auth/signin"}>Login</Link>
        
        <Link href={"/users/signup"}> / Signup</Link>
       </div>
      )}
    </div>
  );
};

export default NavBar;
