import { AiOutlineArrowLeft } from "react-icons/ai"
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BiSolidUserPlus,BiMessageDots,BiPlusMedical} from 'react-icons/bi'
import Header from "./Header"
import Card from "./Card"
import items from '../../public/json/data.json'
const TaskHeader = () => {
    // console.log("items",items)
  return (
    <div className="w-full">
    <Header/>
    <div className="bg-[#0c122b] m-4 rounded-lg p-4 h-max">
      <div className="w-full flex justify-between h-max">
        <div>
            <div className="flex justify-start gap-x-3">
                <div className="bg-gray-200 rounded-full p-2 h-10">
                  <AiOutlineArrowLeft className="text-black my-auto text-2xl font-bold"/>
                </div>
               <div className="grid gap-y-4">
                <p className="font-bold text-2xl">School November Tasks</p>
                <p>Created by Instructor Day on November 31,2022</p>

               <div className="flex justify-start gap-x-4">
                <div className="flex ">
                <span className="inline-block z-40"><img className="h-10 rounded-full border-2 border-white" src='/img/user1.jpg' alt='user'></img></span>
                <span className="inline-block relative -left-4 z-30"><img className="h-10 rounded-full border-2 border-white"src='/img/user2.jpg' alt='user'></img></span>
                 <span className="inline-block relative -left-5 z-20"><img className="h-10 rounded-full border-2 border-white" src='/img/user3.jpg' alt='user'></img></span>
                 <span className="inline-block relative -left-7 z-10"><img className="h-10 rounded-full border-2 border-white" src='/img/user4.jpg' alt='user'></img></span>
                 <span className='inline-block relative -left-8 bg-white h-10 text-black rounded-full p-2'>
                    +4
                 </span>
            </div>
            <div className="flex justify-between px-3 py-3 gap-x-3 rounded-xl bg-[#6418c3] w-max h-max font-bold ">
                <BiSolidUserPlus className=" text-white text-3xl"/>
                <p className="self-center">Invite People</p>
            </div>
            <div className="px-3 py-3 rounded-xl border-2 border-[#6418c3] w-max h-max font-bold">
                Private
            </div>
            <div className="px-3 py-3 rounded-xl border-2 bg-[#7879f1] w-max h-max font-bold">
                Edit
            </div>
            <div className="flex justify-between gap-x-3 px-3 py-3 rounded-xl border-2 border-[#6418c3] w-max h-max font-bold">
                <BiMessageDots className="text-2xl my-auto"/>
                45 Comments
            </div>
            </div>
               </div>
           
            </div>
        </div>
<div className="grid gap-y-5 w-max">
        <div className="flex justify-end gap-x-3">
            <div className="">
                <p className="font-bold text-2xl">Centered Marital Arts</p>
                <p className="text-gray-200 text-base">Sunnyvale, Ca</p>
            </div>
            <div className="">
                <img src='/img/circled.png' alt='circle' className="h-14 bg-white rounded-xl"/>
                </div>
                < BsThreeDotsVertical className="text-white text-2xl"/>
        </div>
        <div className="flex justify-end gap-x-4 ">
            <p className="font-bold text-lg self-center">Total Progress 60% </p>
            <div className="h-3 rounded-3xl bg-white w-56 my-auto">
                <div className="rounded-3xl h-full w-3/5 bg-[#6418c3]">
              
                </div>
            </div>
        </div>
        </div>
        
      </div>



      {/* second part  */}
      <div>
        <div>
           
        </div>
      </div>
    </div>
    {/* todo list  */}
    {console.log("items is here",items)}
    <div className="m-4 flex justify-evenly gap-x-4 ">

        <div className="grid gap-y-3 h-max ">
            {/* todo */}
            <div className="flex justify-between w-full">
                <p className="text-lg font-bold" >To-Do List ({items.todo.length})</p>
                <div className="bg-[#6418c3] rounded-3xl w-10 h-10 px-2 py-1">
                <BiPlusMedical className="text-3xl text-white font-bold  "/>
                </div>
            </div>
            {items.todo.map((item,i)=>{
                return <Card key={i}{...item}/>
            })}
        </div>
        <div className="grid gap-y-3 h-max">
            {/* doing */}
            <div className="flex justify-between w-full">
                <p className="text-lg font-bold" >In Progress ({items.doing.length})</p>
                <div className="bg-[#211a75] rounded-3xl w-10 h-10 px-2 py-1">
                <BiPlusMedical className="text-3xl text-[#6418c3] font-bold"/>
                </div>
            </div>
            {items.doing.map((item,i)=>{
                return <Card key={i}{...item}/>
            })}
        </div>
        <div className="grid gap-y-3 h-max">
            {/* done */}
            <div className="flex justify-between w-full">
                <p className="text-lg font-bold" >Done ({items.done.length})</p>
                <div className="bg-[#211a75] rounded-3xl w-10 h-10 px-2 py-1">
                <BiPlusMedical className="text-3xl text-[#6418c3] font-bold"/>
                </div>
            </div>
            {items.done.map((item,i)=>{
                return <Card key={i}{...item}/>
            })}
        </div>
        <div className="grid gap-y-3 h-max">
            {/* revised */}
            <div className="flex justify-between w-full">
                <p className="text-lg font-bold" >Revised ({items.revised.length})</p>
                <div className="bg-[#211a75] rounded-3xl w-10 h-10 px-2 py-1">
                <BiPlusMedical className="text-3xl text-[#6418c3] font-bold"/>
                </div>
                
            </div>
            <div className="bg-[#211a75] rounded-3xl p-5">
                     <div className="text-center border-2 border-dotted text-[#211a75] rounded-3xl bg-[#01061b] px-8 py-4">
                        Move card here
                     </div>
                </div>
        </div>
    </div>
    </div>
  )
}

export default TaskHeader;