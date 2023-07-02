import React from 'react'
import Image from 'next/image'
type Boxtypes = {
    image:string,
    color:string,
    boxname:string,
    num:number | string,
    text:string
}
export const BoxComponent = ({image,color,boxname,num,text}:Boxtypes) => {
  
  return (
    <div className={`flex h-[160px] bg-[${color}]`}>
    <div className='ml-4 my-6'>
     <Image src={image} width={40} height={40} alt='graduation'></Image>
     <p className={`text-${text}`}>{boxname}</p>
    </div>
    <div className='self-end  w-full flex justify-end'>
       <strong className='text-[30px] mr-6'>{num}</strong>
    </div>
 </div>
  )
}
