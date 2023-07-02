import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState ,useContext} from 'react';
import { usePathname  } from 'next/navigation';
export const Rightmenu = ({user}) => {
  const pathname = usePathname()
  console.log(pathname)
   const [active,setactive]=useState()
  return (
    <div className='bg-[#F2EAE1] h-1/3 md:h-full flex flex-col items-center py-8'>
    <h1 className='csh1-main relative text-center text-[20px]'>MANAGE COURSES</h1>
   <div className='text-center mt-16'>
   <Image
  src="/avatar.png"
  width={100}
  height={100}
  alt="Picture of the author"
  className='rounded-full'
/>
<h2 className='font-semibold text-lg'> {user}</h2>
<p className='text-[#FEAF00] text-[14px]'>Admin</p>
   </div>
   <div className='w-full px-4 mt-8 flex flex-col gap-4 rightlinks'>
    <Link href={'/'} className={`flex rounded-md py-1  gap-2 items-center justify-center w-full  ${pathname == "/" ? "active" : ""}`}><Image alt='home' width={15} height={15} src={'/Home.svg'}></Image>Home </Link>
    <Link href={'/course'} className='flex rounded-md py-1  gap-2 items-center justify-center w-full '><Image alt='course' width={15} height={15} src={'/Course.svg'}></Image>Course </Link>
    <Link href={'/students'} className={`flex rounded-md py-1  gap-2 items-center justify-center w-full ${pathname == "/students" ? "active" : ""}`}><Image alt='students' width={15} height={15} src={'/Students.svg'}></Image>Students </Link>
    <Link href={'/payment'} className='flex rounded-md py-1  gap-2 items-center justify-center w-full '><Image alt='payments' width={15} height={15} src={'/Payment.svg'}></Image>Payment </Link>
    <Link href={'/report'} className='flex rounded-md py-1  gap-2 items-center justify-center w-full '><Image alt='reports' width={15} height={15} src={'/Report.svg'}></Image>Report </Link>
    <Link href={'/settings'} className='flex rounded-md py-1  gap-2 items-center justify-center w-full '><Image alt='reports' width={15} height={15} src={'/Setting.svg'}></Image>Settings </Link>
   </div>
   <Link href={'/logout'} className='mt-8 flex rounded-md py-1  gap-2 items-center justify-center w-full '>Logout <Image alt='reports' width={15} height={15} src={'/Setting.svg'}></Image> </Link>

      </div>
  )
}
