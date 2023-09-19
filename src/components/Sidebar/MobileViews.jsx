import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { FaUsersRectangle } from "react-icons/fa6";

const MobileViews = () => {
  return (
    <div className="grid gap-y-7">
      <div className="lg:hidden flex justify-around gap-x-4 bg-[#211a75] p-3 h-max rounded-2xl my-auto">
        <BiSearch className="my-auto text-2xl text-[#7879f1]" />
        <input
          placeholder="Search icons"
          className="bg-inherit outline-none "
        />
      </div>
      <div className="lg:hidden flex justify-between gap-x-5 cursor-pointer">
        <div className="relative my-auto">
          <IoNotifications className=" text-[#7879f1] text-3xl" />
          <div className="rounded-full bg-blue-400 h-max w-max px-2 py-1  text-xs my-auto absolute -top-2 -right-1">
            17
          </div>
        </div>
        <div className="relative my-auto">
          <FaUsersRectangle className=" text-3xl text-[#464366]" />
          <div className="rounded-full bg-blue-400 h-max w-max px-2 py-1  text-xs my-auto absolute -top-2 -right-1">
            5
          </div>
        </div>
        <div className="relative my-auto">
          <BsCalendar2CheckFill className=" text-[#7879f1] text-3xl" />
          <div className="rounded-full bg-blue-400 h-max w-max px-2 py-1  text-xs my-auto absolute -top-2 -right-1">
            2
          </div>
        </div>
        <div className="relative my-auto">
          <BsFillCalendar2Fill className=" text-[#7879f1] text-3xl" />
          <div className="rounded-full bg-pink-400 h-max w-max px-2 py-1  text-xs my-auto absolute -top-2 -right-1">
            !
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileViews;
