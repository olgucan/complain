import React, {useRef} from 'react'

const Form = (props) => {
    const inputRefname = useRef(null);
    const inputRefemail = useRef(null);
    const inputRefdomain = useRef(null);
    const inputRefphone = useRef(null);
    const inputRefuniversity = useRef(null);
    const handlesubmit= () => {
        props.addUser({firstName:inputRefname.current.value,email:inputRefemail.current.value,
        domain:inputRefdomain.current.value,phone:inputRefphone.current.value,
    university:inputRefuniversity.current.value,id:props.length+1})
        props.setmountForm(false)
    }
    console.log(props,'props')
  return (
    <div className='flex border-2 border-yellow-950 flex-col gap-4 fixed top-[20%] left-1/2 translate-x-[-50%] px-4 py-8 w-1/3 bg-white'>
      <input ref={inputRefname} type="text" placeholder='first name' className='rounded-sm bg-white px-3 py-2 outline-none border-2 border-[#E5E5E5]' />
      <input ref={inputRefemail} type="text" placeholder='email' className='rounded-sm bg-white px-3 py-2 outline-none border-2 border-[#E5E5E5]' />
      <input ref={inputRefdomain} type="text" placeholder='domain' className='rounded-sm bg-white px-3 py-2 outline-none border-2 border-[#E5E5E5]' />
      <input ref={inputRefphone} type="text" placeholder='phone' className='rounded-sm bg-white px-3 py-2 outline-none border-2 border-[#E5E5E5]' />
      <input ref={inputRefuniversity} type="text" placeholder='university' className='rounded-sm bg-white px-3 py-2 outline-none border-2 border-[#E5E5E5]' />
       <button onClick={handlesubmit} className='px-3 py-2 bg-white rounded-md border-2 border-gray-500'>Submit</button>
    </div>
  )
}

export default Form
