"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useContext ,useState} from 'react';
import { ProductsContext } from '../layout';
export default function Login() {  
    const context = useContext(ProductsContext)
console.log(context,'mycontext')
  const [login ,setlogin]= useState('')
   const handlelog = () => {
    context.handleState()
    context.handlesetuser(login)
   }
    return (
    <div className='bg-gradient-to-l from-[#FEAF00] to-[#F8D442] w-full h-[100vh] flex justify-center items-center'>
     <div className='form-container w-2/5 h-[550px] bg-white rounded-[20px] p-4 py-8'>
           <h1 className='csh1 relative text-center text-[32px]'>MANAGE COURSES</h1>
           <div className='text-center py-5 mt-8'>
               <h2 className='text-[22px] font-semibold'>SIGN IN </h2>
               <p className='text-[14px] text-[#6C6C6C]'>Enter your credentials to access your account</p>
           </div>
           <div className='flex flex-col mt-12 gap-4'>
            <label htmlFor="" className='text-[14px] text-[#6C6C6C]'>Email</label>
            <input type="text" onChange={(e)=>setlogin(e.target.value)} placeholder='Enter your email' className='w-100 p-2 outline-none rounded-md border-[#E5E5E5] border-2 text-[12px]'/>
            <label htmlFor="" className='text-[14px] text-[#6C6C6C]'>Password</label>
            <input type="password" placeholder='Enter your password' className='w-100 p-2 outline-none rounded-md border-[#E5E5E5] border-2 text-[12px]' />
           </div>
           <div className='mt-7'>
            <Link href={'/'} onClick={handlelog} className='bg-[#FEAF00]  text-white text-sm text-center w-full block py-2 rounded-md'>SIGN IN</Link>
              <div className='flex gap-2 mt-5 justify-center'>
                <Link href={'/'} className='text-[14px]'>Forgot Your Password</Link>
                <Link href={'/'} className='text-[14px] underline text-[#FEAF00]'>Reset Password</Link>
              </div>
           </div>
     </div>
      </div>
  )
}
