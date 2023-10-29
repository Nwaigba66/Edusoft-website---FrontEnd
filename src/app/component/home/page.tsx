import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';



export default function home() {
  const YourComponent = () => {
  const route = useRouter();

  const handleButtonClick = () => {
    route.push('/home'); 
  };

  return (
      <div>
       <button onClick={handleButtonClick}>Home</button>
      </div> 
  )
}
}
