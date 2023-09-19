import React from "react";
import Card from "./Card";
import { BiPlusMedical } from "react-icons/bi";
import items from "../../../public/json/data.json";

const TaskListing = () => {
  {
    /* {console.log("items is here", items)} */
  }
  return (
    <div className="m-4 flex justify-start gap-x-12 min-w-4/5  overflow-x-scroll">
      <div className="grid gap-y-3 h-max ">
        {/* todo */}
        <div className="flex justify-between w-full">
          <p className="text-lg font-bold">To-Do List ({items.todo.length})</p>
          <div className="bg-[#6418c3] rounded-3xl w-10 h-10 px-2 py-1">
            <BiPlusMedical className="text-3xl text-white font-bold  " />
          </div>
        </div>
        {items.todo.map((item, i) => {
          return <Card key={i} {...item} />;
        })}
      </div>
      <div className="grid gap-y-3 h-max">
        {/* doing */}
        <div className="flex justify-between w-full">
          <p className="text-lg font-bold">
            In Progress ({items.doing.length})
          </p>
          <div className="bg-[#211a75] rounded-3xl w-10 h-10 px-2 py-1">
            <BiPlusMedical className="text-3xl text-[#6418c3] font-bold" />
          </div>
        </div>
        {items.doing.map((item, i) => {
          if (i == 1) return <Card key={i} flag={true} {...item} />;
          else return <Card key={i} {...item} />;
        })}
      </div>
      <div className="grid gap-y-3 h-max">
        {/* done */}
        <div className="flex justify-between w-full">
          <p className="text-lg font-bold">Done ({items.done.length})</p>
          <div className="bg-[#211a75] rounded-3xl w-10 h-10 px-2 py-1">
            <BiPlusMedical className="text-3xl text-[#6418c3] font-bold" />
          </div>
        </div>
        {items.done.map((item, i) => {
          return <Card key={i} {...item} />;
        })}
      </div>
      <div className="grid gap-y-3 h-max ">
        {/* revised */}
        <div className="flex justify-between w-[400px]">
          <p className="text-lg font-bold">Revised ({items.revised.length})</p>
          <div className="bg-[#211a75] rounded-3xl w-10 h-10 px-2 py-1">
            <BiPlusMedical className="text-3xl text-[#6418c3] font-bold" />
          </div>
        </div>
        <div className="bg-[#211a75] rounded-3xl p-5">
          <div className="text-center border-2 border-dotted text-[#211a75] rounded-3xl bg-[#01061b] px-8 py-4">
            Move card here
          </div>
        </div>
      </div>
      <div className="grid gap-y-3 h-max">
        {/* contant */}
        <div className="flex justify-between w-full">
          <p className="text-lg font-bold">Contant ({items.contant.length})</p>
          <div className="bg-[#211a75] rounded-3xl w-10 h-10 px-2 py-1">
            <BiPlusMedical className="text-3xl text-[#6418c3] font-bold" />
          </div>
        </div>
        {items.contant.map((item, i) => {
          return <Card key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default TaskListing;
