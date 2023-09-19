import React from "react";
import Header from "../Header";
import TaskHeader from "./TaskHeader";
import TaskListing from "./TaskListing";

const Main = (props) => {
  return (
    <div className="w-full lg:w-4/5">
      <Header {...props} />
      <TaskHeader  />
      <TaskListing />
    </div>
  );
};

export default Main;
