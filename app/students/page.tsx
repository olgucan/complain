"use client"
import Image from 'next/image'

import { redirect } from 'next/navigation'
import { useEffect, useState ,useContext} from 'react';
import { useSearchParams } from 'next/navigation'
import { ProductsContext } from '../layout';
import { Notification } from '../components/Notification';
import { Rightmenu } from '../components/Rightmenu';
import Form from '../components/Form';
import EditForm from '../components/EditForm';
export default function Home() {
  const context = useContext(ProductsContext)
const [mountform , setmountForm] = useState(false)
const [mountedit,setmountEdit] = useState(false)
// useEffect(()=> {
//    context=useContext(ProductsContext)
// },[context])
  const searchParams = useSearchParams()
 
  const search = searchParams.get('success')
   const [students,setUsers]=useState([])
//   useEffect(()=> {
//   setUsers(context.data)
//   },[])
  
  
 console.log(context)
 useEffect(()=> {
  setUsers(()=>context.data )
 },[context])
console.log(students,'studemts')
const [editid ,setEditid]=useState(null)
const handleEdit = (id) => {
  setEditid(id)
  setmountEdit(true)
}
  return (
  <div className='grid md:grid-cols-5 h-[100vh]'>
       <Rightmenu user={context.user} />
        <div className='md:col-start-2 md:col-span-4	border-2 h-1/3 md:h-full'>
        <Notification />
        <div className='px-16 py-3 bg-[#E5E5E5]'>
           <div className='flex items-center justify-between'>
            <p className='font-bold text-[22px]'>Student List</p>
            <div className='flex gap-6'>
             <div className='relative'>
             <input type="text" className='rounded-sm bg-white px-3 py-2 outline-none border-2 border-[#E5E5E5]' placeholder='Search ...' />
             <Image src={'/search.svg'} width={15} height={15} alt='search' className='absolute right-4 cursor-pointer top-4'></Image>
             </div>
              <button className='bg-[#FEAF00] text-white px-4 rounded-md py-2' onClick={()=>setmountForm(true)}>ADD NEW STUDENT</button>
            </div>
           </div>
           <div className='grid md:grid-cols-7 my-8 border-t-2 border-[#e5e5e5] text-[#ACACAC] text-[12px] font-medium'>
            <p className='col-start-2 '>Name</p>
            <p className=''>Email</p>
            <p className=''>Phone</p>
            <p>Website</p>
            <p>Company Name</p>
           </div>
           {students && students.map(a=> {
            return (
              <div className='grid md:grid-cols-7 my-8 text-[14px] items-center bg-white py-2 px-3 rounded-md'>
             <div className=""><img src={a.image} width={50} alt='user' height={50}></img></div>
             <div className="">{a.firstName}</div>
             <div className="">{a.email}</div>
             <div className="">{a.phone}</div>
             <div className="">{a.domain}</div>
             <div className="">{a.university}</div>
             <div className="flex gap-4 justify-self-end	">
               
               <Image src={'/trash.svg'} width={20} height={20} alt='trash' className='cursor-pointer'></Image>
               <Image src={'/edit.svg'} width={20} height={20} alt='edit' onClick={()=>handleEdit(a.id)} className='cursor-pointer'></Image>
             </div>
           </div>
            )
           })}
                       <EditForm setmountEdit={setmountEdit} editUser={context.edituser}  mountedit={mountedit} id={editid}/>

         {mountform &&  <Form setmountForm={setmountForm} addUser={context.adduser} length={students.length}  / >}
        
        </div>
        </div>
  </div>
  )
}
