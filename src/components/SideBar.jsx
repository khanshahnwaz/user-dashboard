import {AiOutlineMenu,AiFillWechat,AiOutlineShop,AiOutlineSetting,AiOutlineArrowRight} from 'react-icons/ai'
import {TbDashboard,TbBrandWindows} from 'react-icons/tb'
import {MdOutlineMarkEmailUnread,MdOutlineContactPage,MdKeyboardArrowDown, MdKeyboardArrowRight} from 'react-icons/md'
import { BsFillCalendar2Fill} from 'react-icons/bs'
import {FaUsersRectangle,FaFileInvoiceDollar} from 'react-icons/fa6'
import {PiDotsNine} from 'react-icons/pi'
const Left = (props) => {
  return (
    <>
      <div className={` w-1/5  md:block hidden h-screen bg-[#0c122b] text-left py-10 `}>
        {/* <img src={tri} alt='triangle' className='indivne float-left'/> */}
        <div className="w-4/5 mx-auto text-left grid gap-y-10">

       <div className='flex gap-x-4 justify-start'>
        <h1 className="text-white font-semibold text-left text-lg ">
          weframetech
        </h1>
        <AiOutlineMenu className='my-auto text-3xl text-[#7879f1]'/>
        </div>

        <div>
            <h3 className='text-white font-bold text-xl'>MAIN MENU</h3>
        </div>
        <div className="text-xl space-y-6">
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
            <PiDotsNine className='text-4xl'/>
          <p className='text-xl z-10'>Incerease your <br/>
          work with kanban</p>
          <AiOutlineArrowRight className='text-3xl ' />
          <div className='absolute h-full w-full -bottom-16 -right-52 bg-[#86bcf2] rounded-full '></div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Left;
