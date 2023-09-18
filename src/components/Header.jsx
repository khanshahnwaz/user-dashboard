import React from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import {FaUsersRectangle} from 'react-icons/fa6'
import { BsFillCalendar2Fill,BsCalendar2CheckFill} from 'react-icons/bs'

import {BiSearch} from 'react-icons/bi'
import {IoNotifications} from 'react-icons/io5'
const Header = () => {
  return (
    <div className='flex justify-around h-max w-full py-10 bg-[#0c122b]'>
        <div className='flex justify-start gap-x-4 bg-[#211a75] p-3 h-max rounded-2xl my-auto'>
            <BiSearch className='my-auto text-2xl text-[#7879f1]' />
            <input placeholder='Search icons' className='bg-inherit outline-none '/>
        </div>
        <p className='underline text-[#6418c3] self-center'>OTHER MENUS</p>
        <div className='flex justify-around gap-x-5 cursor-pointer'>
         <div className='relative my-auto'>
          <IoNotifications className=' text-[#7879f1] text-3xl'/>
          <div className='rounded-full bg-blue-400 h-max w-max px-2 py-1  text-xs my-auto absolute -top-2 -right-1'>
             17
        </div>
        </div>
        <div className='relative my-auto'>
          <FaUsersRectangle className=' text-3xl text-[#464366]'/>
          <div className='rounded-full bg-blue-400 h-max w-max px-2 py-1  text-xs my-auto absolute -top-2 -right-1'>
             5
        </div>
        </div>
        <div className='relative my-auto'>
          <BsCalendar2CheckFill className=' text-[#7879f1] text-3xl'/>
          <div className='rounded-full bg-blue-400 h-max w-max px-2 py-1  text-xs my-auto absolute -top-2 -right-1'>
             2
        </div>
        </div>
        <div className='relative my-auto'>
          <BsFillCalendar2Fill className=' text-[#7879f1] text-3xl'/>
          <div className='rounded-full bg-pink-400 h-max w-max px-2 py-1  text-xs my-auto absolute -top-2 -right-1'>
             !
        </div>
        </div>
          </div>
        <div className='flex justify-around gap-x-1 px-4 py-3 bg-[#211a75] h-max rounded-2xl my-auto'>
          <img src='/img/flag.png' alt='US flag' className='rounded-full h-5 w-auto my-auto py-2'/>
         ENGLISH
         <MdKeyboardDoubleArrowDown className='my-auto'/>
        </div>
        <div className="flex justify-center gap-x-2 px-4 h-max border-l-2 border-[#6418c3] cursor-pointer">
              
              <div>
                <small>Welcome back,</small>
                <p className="text-sm text-[#7879f1] font-semibold ">Shahnwaz Khan</p>
              </div>
              <MdKeyboardDoubleArrowDown className='my-auto text-[#6418c3]'/>
            </div>
    </div>
  )
}

export default Header