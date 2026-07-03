"use client"
import React from 'react'
import {useRouter} from 'next/navigation'

const Banner = () => {
    const router =useRouter()
     const handlebtn=()=>{
        const password=prompt("Enter Your Password:")

        if(password==="1234"){
         router.push("/dashboard")
        }
        else{
            alert("Wrong password! try AGain")
        }
    }
   
  return (
    
    <div className="bg-blue-400 text-black py-10 text-center space-y-8
   rounded ">
      <h2 className="text-4xl font-bold">Welcome to Dev stroy!!!</h2>
       <button onClick={handlebtn} className='px-4 py-3 font-bold bg-green-500 hover:bg-black text-white duration-300 cursor-pointer'>Share-story</button>
    </div>
   
  )
}

export default Banner
