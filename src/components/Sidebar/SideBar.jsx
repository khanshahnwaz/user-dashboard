import {
  AiOutlineMenu,
  AiFillWechat,
  AiOutlineShop,
  AiOutlineSetting,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { TbDashboard, TbBrandWindows } from "react-icons/tb";
import {
  MdOutlineMarkEmailUnread,
  MdOutlineContactPage,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { FaUsersRectangle, FaFileInvoiceDollar } from "react-icons/fa6";
import { PiDotsNine } from "react-icons/pi";

import { RxDoubleArrowLeft } from "react-icons/rx";

import MobileViews from "./MobileViews";
const Left = (props) => {
  return (
    <div className="lg:w-1/5">
      <div
        className={` lg:w-1/5 w-full sm:w-max    h-max bg-[#0c122b] text-left py-10 lg:px-auto px-10  fixed ${props.controlSideBar} lg:left-0 z-50 transition-all ease-in-out duration-1000 `}
      >
        {/* <img src={tri} alt='triangle' className='indivne float-left'/> */}
        <div className="w-4/5 mx-auto sm:mx-0 lg:mx-auto text-left grid gap-y-5">
          <div className="flex lg:gap-x-4 lg:justify-start justify-between">
            <h1 className="text-white font-semibold text-left ">weframetech</h1>
            <AiOutlineMenu className=" lg:block hidden my-auto text-2xl text-[#7879f1]" />
            <RxDoubleArrowLeft
              onClick={() => props.setControlSideBar("-left-[200%]")}
              className="cursor-pointer lg:hidden my-auto text-3xl font-bold text-white"
            />
          </div>
          {/* designs that will be displayed on small scree size  */}
          <MobileViews />
          <div>
            <h3 className="text-white font-bold">MAIN MENU</h3>
          </div>
          <div className="text-sm space-y-6">
            <div className="flex gap-x-4 justify-start text-[#464366]">
              <TbDashboard className="my-auto text-2xl" />
              <p className="self-center">Dashboard</p>
            </div>
            <div className="flex justify-between text-[#464366]">
              <div className="flex justify-start gap-x-4 ">
                <MdOutlineMarkEmailUnread className="my-auto text-2xl" />
                <p className="self-center">Email</p>
              </div>
              <div className="flex justify-end gap-x-4 text-gray-100">
                <div className="rounded-full bg-blue-400 h-max w-max p-1 px-2  text-xs my-auto">
                  17
                </div>
                <MdKeyboardArrowDown className="my-auto text-2xl text-[#7879f1]" />
              </div>
            </div>
            <div className="flex gap-x-4 justify-start text-[#7879f1]">
              <AiFillWechat className="my-auto text-2xl" />
              <p className="self-center">Chat</p>
            </div>
            <div className="flex  justify-between text-[#6418c3]">
              <div className="flex justify-start gap-x-4">
                <TbBrandWindows className="my-auto text-2xl" />
                <p className="self-center">Kanban</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-xl text-[#7879f1]" />
            </div>
            <div className="flex gap-x-4 justify-start text-[#7879f1]">
              <MdOutlineContactPage className="my-auto text-2xl" />
              <p className="self-center">Contact</p>
            </div>
            <div className="flex justify-between text-[#7879f1]">
              <div className="flex justify-start gap-x-4">
                <BsFillCalendar2Fill className="my-auto text-xl" />
                <p className="self-center">Calender</p>
              </div>
              <div className="rounded-3xl p-1 bg-pink-500 text-sm px-2 text-white">
                New
              </div>
            </div>
            <div className="flex justify-between text-[#6418c3]">
              <div className="flex justify-start gap-x-4">
                <FaUsersRectangle className="my-auto text-2xl" />
                <p className="self-center">Courses</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-2xl text-[#7879f1]" />
            </div>
            <div className="flex gap-x-4 justify-start text-[#6418c3]">
              <AiOutlineShop className="my-auto text-2xl" />
              <p className="self-center">Shop</p>
            </div>
            <div className="flex justify-between text-[#6418c3]">
              <div className="flex justify-start gap-x-4">
                <FaFileInvoiceDollar className="my-auto text-2xl" />
                <p className="self-center">Invoices</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-2xl text-[#7879f1]" />
            </div>
            <div className="flex gap-x-4 justify-start text-[#6418c3]">
              <AiOutlineSetting className="my-auto text-2xl" />
              <p className="self-center">Settings</p>
            </div>
          </div>
          <div className="bg-[#2e88dd] rounded-xl px-6 py-2  relative overflow-hidden grid gap-y-3">
            <PiDotsNine className="text-2xl" />
            <p className="text-base z-10">
              Incerease your <br />
              work with kanban
            </p>
            <AiOutlineArrowRight className="text-3xl " />
            <div className="absolute h-full w-full -bottom-16 -right-52 bg-[#86bcf2] rounded-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
