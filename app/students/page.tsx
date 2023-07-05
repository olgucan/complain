"use client"
import Image from 'next/image'

import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { useEffect, useState ,useContext} from 'react';
import { useSearchParams } from 'next/navigation'
import { ProductsContext } from '../layout';
import { Notification } from '../components/Notification';
import { Rightmenu } from '../components/Rightmenu';
import Form from '../components/Form';
import EditForm from '../components/EditForm';
export default function Home() {
  const router = useRouter()
  const context = useContext(ProductsContext)
const [mountform , setmountForm] = useState(false)
const [mountedit,setmountEdit] = useState(false)

const [searchinput,setSearchinput]=useState('')
// useEffect(()=> {
//    context=useContext(ProductsContext)
// },[context])
  const searchParams = useSearchParams()
 
  const search = searchParams.get('success')
   const [students,setUsers]=useState([])
   const [filtereddata,setfiltereddata]=useState(students)
useEffect (()=> {
       setfiltereddata(students)
},[students])
const handleSearch = (value) => {
  router.push(`?search=${value}`)
       setfiltereddata(a=> value=='' ? students : students.filter(k=> k.firstName.toLowerCase().includes(value.toLowerCase()) ))
      // console.log(filtereddata,'filtereddata')
}
//   useEffect(()=> {
//   setUsers(context.data)
//   },[])
  
  
 //console.log(context)
 useEffect(()=> {
  setUsers(()=>context.data )
 },[context])
//console.log(students,'studemts')
const [editid ,setEditid]=useState(null)
const handleEdit = (id) => {
  setEditid(id)
  setmountEdit(true)
}
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(6);

//console.log(context.state)
//basket start




//console.log(JSON.parse(localStorage.getItem('cart')))


// Logic for displaying current items
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems =filtereddata?.length==1 ? filtereddata :  filtereddata?.slice(indexOfFirstItem, indexOfLastItem);

// Logic for displaying page numbers
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(filtereddata?.length / itemsPerPage); i++) {
  pageNumbers.push(i);
}
const handleClick = (event) => {
  setCurrentPage(Number(event.target.id));
}

const renderPageNumbers = pageNumbers.map(number => {
  return (
    <div key={number} id={number} onClick={handleClick}>
      {number}
      </div>
   
  );
});
//console.log(renderPageNumbers)

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
             <input type="text" onChange={(e)=>setSearchinput(e.target.value)} className='rounded-sm bg-white px-3 py-2 outline-none border-2 border-[#E5E5E5]' placeholder='Search ...' />
             <Image src={'/search.svg'} onClick={()=>handleSearch(searchinput)} width={15} height={15} alt='search' className='absolute right-4 cursor-pointer top-4'></Image>
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
           {students && currentItems?.map((a,b)=> {
            return (
              <div key={b} className='grid md:grid-cols-7 my-8 text-[14px] items-center bg-white py-2 px-3 rounded-md'>
             <div className=""><img src={a.image} width={50} alt='user' height={50}></img></div>
             <div className="">{a.firstName}</div>
             <div className="">{a.email}</div>
             <div className="">{a.phone}</div>
             <div className="">{a.domain}</div>
             <div className="">{a.university}</div>
             <div className="flex gap-4 justify-self-end	">
               
               <Image src={'/trash.svg'} width={20} height={20} alt='trash' onClick={()=>context.removeuser(a.id)} className='cursor-pointer'></Image>
               <Image src={'/edit.svg'} width={20} height={20} alt='edit' onClick={()=>handleEdit(a.id)} className='cursor-pointer'></Image>
             </div>
           </div>
            )
           })}
                       <EditForm setmountEdit={setmountEdit} editUser={context.edituser}  mountedit={mountedit} id={editid}/>

         {mountform &&  <Form setmountForm={setmountForm} addUser={context.adduser} length={students.length}  / >}
      <div className='flex justify-end gap-5'>
        <div>
          <span className='mr-4 text-gray-500'>Rows per page:</span>
          <select name="" id="" onChange={(e)=>{
            setItemsPerPage(e.target.value)
            router.push(`?size=${e.target.value}`)
          }}>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
            
          </select>
        </div>
      <div className='flex gap-5 justify-end'>
      {renderPageNumbers.map((a,b)=> (<span key={b} className='cursor-pointer' onClick={() => router.push(`?page=${a.key}`)}>{a}</span>))}
      </div>
        </div>
      </div>
     
        </div>
  </div>
  )
}
