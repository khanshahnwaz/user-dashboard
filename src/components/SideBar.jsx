import {AiOutlineMenu,AiFillWechat,AiOutlineShop,AiOutlineSetting,AiOutlineArrowRight} from 'react-icons/ai'
import {TbDashboard,TbBrandWindows} from 'react-icons/tb'
import {MdOutlineMarkEmailUnread,MdOutlineContactPage,MdKeyboardArrowDown, MdKeyboardArrowRight} from 'react-icons/md'
import { BsFillCalendar2Fill} from 'react-icons/bs'
import {FaUsersRectangle,FaFileInvoiceDollar} from 'react-icons/fa6'
import {PiDotsNine} from 'react-icons/pi'

import {BiSearch} from 'react-icons/bi'
import {IoNotifications} from 'react-icons/io5'
import {BsCalendar2CheckFill} from 'react-icons/bs'
import {RxDoubleArrowLeft} from 'react-icons/rx'


import { useState } from 'react'
const Left = (props) => {
  return (
    <div className='w-1/5 block'>
      <div className={` lg:w-1/5 w-full sm:w-max    h-max bg-[#0c122b] text-left py-10 lg:px-auto px-10  fixed ${props.controlSideBar} lg:left-0 z-50 transition-all ease-in-out duration-1000 `}>
        {/* <img src={tri} alt='triangle' className='indivne float-left'/> */}
        <div className="w-4/5 mx-auto sm:mx-0 lg:mx-auto text-left grid gap-y-10">

       <div className='flex lg:gap-x-4 lg:justify-start justify-between'>
        <h1 className="text-white font-semibold text-left ">
          weframetech
        </h1>
        <AiOutlineMenu className=' lg:block hidden my-auto text-2xl text-[#7879f1]'/>
        <RxDoubleArrowLeft onClick={()=>props.setControlSideBar('-left-[200%]')} className='cursor-pointer lg:hidden my-auto text-3xl font-bold text-white'/>
        </div>
        <div className='lg:hidden flex justify-around gap-x-4 bg-[#211a75] p-3 h-max rounded-2xl my-auto'>
            <BiSearch className='my-auto text-2xl text-[#7879f1]' />
            <input placeholder='Search icons' className='bg-inherit outline-none '/>
        </div>
        <div className='lg:hidden flex justify-between gap-x-5 cursor-pointer'>
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
        <div>
            <h3 className='text-white font-bold text-lg'>MAIN MENU</h3>
        </div>
        <div className="text-lg space-y-6">
          <div className="flex gap-x-4 justify-start text-[#464366]">
            <TbDashboard className='my-auto text-3xl'/>
            <p>Dashboard</p>
          </div>
          <div className="flex justify-between text-[#464366]">
            <div className='flex justify-start gap-x-4 '>
          <MdOutlineMarkEmailUnread className='my-auto text-3xl'/>
        <p>Email</p>
        </div>
        <div className='flex justify-end gap-x-4 text-gray-100'>
        <div className='rounded-full bg-blue-400 h-max w-max p-1  text-xs my-auto'>
             17
        </div>
        < MdKeyboardArrowDown className='my-auto text-2xl text-[#7879f1]'/>
        </div>
        
          </div>
          <div className="flex gap-x-4 justify-start text-[#7879f1]">
            <AiFillWechat className='my-auto text-3xl'/>
            Chat
          </div>
          <div className="flex  justify-between text-[#6418c3]">
            <div className='flex justify-start gap-x-4'>
            <TbBrandWindows className='my-auto text-3xl'/>
            <p>Kanban</p>
            </div>
            < MdKeyboardArrowRight className='my-auto text-2xl text-[#7879f1]'/>
          </div>
          <div className="flex gap-x-4 justify-start text-[#7879f1]">
            <MdOutlineContactPage className='my-auto text-3xl'/>
            Contact
          </div>
          <div className="flex justify-between text-[#7879f1]">
            <div className='flex justify-start gap-x-4'><BsFillCalendar2Fill className='my-auto text-2xl'/>
            Calender
            </div>
            <div className='rounded-3xl p-1 bg-pink-500 text-sm px-2 text-white'>New</div>
          </div>
          <div className="flex justify-between text-[#6418c3]">
            <div className='flex justify-start gap-x-4'>
            <FaUsersRectangle className='my-auto text-3xl'/>
            Courses
            </div>
            < MdKeyboardArrowRight className='my-auto text-2xl text-[#7879f1]'/>
          </div>
          <div className="flex gap-x-4 justify-start text-[#6418c3]">
            <AiOutlineShop className='my-auto text-3xl'/>
            Shop
          </div>
          <div className="flex justify-between text-[#6418c3]">
          <div className='flex justify-start gap-x-4'>
          <FaFileInvoiceDollar className='my-auto text-3xl'/>
            Invoices
            </div>
            < MdKeyboardArrowRight className='my-auto text-2xl text-[#7879f1]'/>
          </div>
          <div className="flex gap-x-4 justify-start text-[#6418c3]">
          <AiOutlineSetting className='my-auto text-3xl'/>
            Settings
          </div>
        </div>
        <div className="bg-[#2e88dd] rounded-xl px-6 py-2  relative overflow-hidden grid gap-y-3">
            <PiDotsNine className='text-3xl'/>
          <p className='text-xl z-10'>Incerease your <br/>
          work with kanban</p>
          <AiOutlineArrowRight className='text-3xl ' />
          <div className='absolute h-full w-full -bottom-16 -right-52 bg-[#86bcf2] rounded-full '></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
