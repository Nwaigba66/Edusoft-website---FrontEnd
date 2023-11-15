'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Component } from 'react';



export default function Home() {
  const router = useRouter();
  return (
    <div className=" flex justify-center items-center bg-image-map bg-origin-border bg-cover bg-no-repeat
                    h-full w-full flex-col text-center">
      <div className="">
        <h2 className="text-3xl">
          Welcome To Edusoft
        </h2>
        <h4>Making Education Accessible</h4>
        <button onClick={()=>router.push('/about')} className="bg-blue-900 hover:text-gray-100 text-white text-lg rounded p-4 mt-2 rounded">
          Learn More
        </button>
      </div>
    </div>
      
);
}






