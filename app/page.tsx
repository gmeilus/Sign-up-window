"use client"; 

import { useState } from "react";

function SurnameInput({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Surname"
      className="border-violet-600 border-2 rounded px-3 py-2 w-full hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300"
    />
  );
}

export default function Home() {
  const [surname, setSurname] = useState("");

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setSurname(value);
    }
  };

  return (

    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="border-2 border-violet-600 rounded-xl p-8 w-full max-w-md bg-black shadow-[0_15px_150px_rgba(128,0,128,0.7)] transform hover:-translate-y-1 hover:scale-105 
                transition-all duration-300 ">

         <h1 className="text-violet-600 text-3xl text-bold md-6 text-center"> Sign Up </h1> 
          
         
          <li className="grid grid-cols-1 text-violet-600 py-8  " >

          
          <ul className="string">Name</ul>
          <input
          type="text"
          placeholder="Name"
            className="border-violet-600 border-2 string rounded hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300">
           </input>
          <ul>Surname</ul>
           <input
           type="text"
           
           placeholder="Surname"
            className="border-violet-600 border-2 string rounded hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300">

            </input>
          <ul>Email</ul>
           <input 
           placeholder="Email"
           className="border-violet-600 border-2 string rounded hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300">

           </input>
          <ul>Street Name</ul>
           <input 
           placeholder="Street Name"
           className="border-violet-600 border-2 string rounded hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300"></input>
          <ul>County</ul>
           <input 
           placeholder="Couny"
           className="border-violet-600 border-2 string rounded hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300"></input>
          <ul>Country</ul>
           <input 
           placeholder="Country"
           className="border-violet-600 border-2 string rounded hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-300"></input>

          
          <div className="flex justify-center gap-4 py-4">
         <a className="  border-violet-600 border-2 string text-violet-600 rounded hover:bg-violet-300 px-4 py-2">Submit</a>
         <a className="  border-violet-600 border-2 string text-violet-600 rounded hover:bg-violet-300 px-4 py-2 ">Cancel</a>
          </div>
         </li>
        </div>
      </main>
    </div>
  );
}
