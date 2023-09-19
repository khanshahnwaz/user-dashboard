'use client';
import TaskHeader from '@/components/TaskHeader'
import Header from '../components/Header'
import Left from '../components/SideBar'
import { useState } from 'react';
export default function Home() {
  const [controlSideBar,setControlSideBar]=useState('-left-full');

  return (
    <>
    <div className='flex'>
<Left controlSideBar={controlSideBar} setControlSideBar={setControlSideBar}/>
<TaskHeader setControlSideBar={setControlSideBar} />
{/* <Header/> */}
    </div>
   
    </>
   
  )
}
