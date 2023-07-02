"use client"
import Image from 'next/image'

import { redirect } from 'next/navigation'
import { useEffect, useState ,useContext} from 'react';
import { useSearchParams } from 'next/navigation'
import { ProductsContext } from '../layout';
import { Notification } from '../components/Notification';
import { Rightmenu } from '../components/Rightmenu';
export default function Home() {
  const context = useContext(ProductsContext)

// useEffect(()=> {
//    context=useContext(ProductsContext)
// },[context])
  const searchParams = useSearchParams()

  const search = searchParams.get('success')
   


  return (
  <div className='grid md:grid-cols-5 h-[100vh]'>
       <Rightmenu user={context.user} />
        <div className='md:col-start-2 md:col-span-4	border-2 h-1/3 md:h-full'>
        <Notification />
        </div>
  </div>
  )
}
