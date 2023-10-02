"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((res) => {
        router.push("/api/auth/signin");
        setForm({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-slate-200 mx-auto mt-12 py-2 rounded-lg flex flex-col w-1/3 h-1/2 items-center gap-4">
      <h1 className="mt-4">SignUp</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-2/3">
        <label htmlFor="name">Enter name</label>
        <input
          className="h-10 rounded-lg px-2"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="email">Enter Email</label>
        <input
          className="h-10 rounded-lg px-2"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Enter Password</label>
        <input
          className="h-10 rounded-lg px-2"
          type="password"
          name="password"
          id=""
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-slate-500 rounded-xl w-1/3 mx-auto py-2 my-4"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default page;
