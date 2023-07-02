import React from 'react'
import Image from 'next/image'
export const Notification = () => {
  return (
    <div className='flex justify-between px-8 py-4'>
    <Image src={'/circledown.svg'} alt='circle' width={20} height={20}></Image>
    <Image src={'/bell.svg'} alt='bell' width={20} height={20}></Image>
  </div>
  )
}
