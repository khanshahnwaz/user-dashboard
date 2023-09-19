"use client";
import SideBar from "../components/Sidebar/SideBar";
import { useState } from "react";
import Main from "@/components/RecordContainer/Main";
export default function Home() {
  const [controlSideBar, setControlSideBar] = useState("-left-[200%]");

  return (
      <div className="flex">
        <SideBar
          controlSideBar={controlSideBar}
          setControlSideBar={setControlSideBar}
        />
        <Main setControlSideBar={setControlSideBar} />
      </div>
   
  );
}
