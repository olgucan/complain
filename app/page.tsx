"use client"
import Image from 'next/image'
import { LoginPage } from './components/LoginPage';
import { redirect } from 'next/navigation'
import { useEffect, useState ,useContext} from 'react';
import { useSearchParams } from 'next/navigation'
import { ProductsContext } from './layout';
import { BoxComponent } from './components/BoxComponent';
import { Rightmenu } from './components/Rightmenu';
import { Notification } from './components/Notification';
export default function Home() {
  const context = useContext(ProductsContext)

// useEffect(()=> {
//    context=useContext(ProductsContext)
// },[context])
  const searchParams = useSearchParams()

  const search = searchParams.get('success')
 

  const [isAuthenticated,setisAuthenticated] = useState<boolean>(context.state);
useEffect(()=> {
  setisAuthenticated(()=> context.state)
},[])
   if (!isAuthenticated) {
    return  redirect(`/login`);
  }
  return (
  <div className='grid md:grid-cols-5 h-[100vh]'>
       <Rightmenu user={context.user} />
        <div className='md:col-start-2 md:col-span-4	border-2 h-1/3 md:h-full'>
         <Notification />
          <div className='grid grid-cols-4 mx-5 mt-16 gap-4'>
           <BoxComponent text={'[#6C6C6C]'} color={'#F0F9FF'} boxname={'Students'} num={243} image={'/graduation-cap.svg'} />
           <BoxComponent text={'[#6C6C6C]'} color={'#FEF6FB'} boxname={'Course'} num={13} image={'/coursecolored.svg'} />
           <BoxComponent text={'[#6C6C6C]'} color={'#FEFBEC'} boxname={'Payments'} num={ '556,000₺'} image={'/paymentcolored.svg'} />
           <BoxComponent text={'white'} color={'#FEAF00'} boxname={'Users'} num={3} image={'/user.svg'} />
          
            
           
          </div>
          </div>
  </div>
  )
}
