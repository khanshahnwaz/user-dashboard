import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {IoMdTimer} from 'react-icons/io'
const Card = (props) => {
    const color=props.color;
  return (
    <div className={`rounded-3xl px-5 py-10 grid gap-y-7  bg-[#211a75] min-w-full  ${props.flag?'rotate-12 translate-x-5 translate-y-10':''}`}>
      <div className='flex justify-between w-full'>
        <div className='flex justify-start gap-x-3'>
            <div className={`h-4 w-4 rounded-full bg-${color} my-auto`}>

            </div>
            <p className={`text-${props.color} text-lg`}>{props.priority}</p>
        </div>
       <BsThreeDots  className='my-auto'/>
      </div>
      <p className='w-full'>
        {props.description}
      </p>
      <div className="h-2 rounded-3xl bg-white w-full my-auto ">
                <div className={`rounded-3xl h-full w-${props.progress} bg-${props.color}`}>
              
                </div>
            </div>
      <div className='flex justify-between w-full'>
      <div className="flex ">
                <span className="inline-block z-40"><img className="h-10 rounded-full border-2 border-white" src='/img/user1.jpg' alt='user'></img></span>
                <span className="inline-block relative -left-5 z-30"><img className="h-10 rounded-full border-2 border-white"src='/img/user2.jpg' alt='user'></img></span>
                 <span className="inline-block relative -left-9 z-20"><img className="h-10 rounded-full border-2 border-white" src='/img/user3.jpg' alt='user'></img></span>
                 <span className="inline-block relative -left-12 z-10"><img className="h-10 rounded-full border-2 border-white" src='/img/user4.jpg' alt='user'></img></span>
                 
            </div>
            <div className='flex justify-end gap-x-3 text-[#464366]'>
                <IoMdTimer className='my-auto'/>
                <p className='text-sm self-center'>Due in 4 days </p>
            </div>
      </div>
    </div>
  )
}

export default Card