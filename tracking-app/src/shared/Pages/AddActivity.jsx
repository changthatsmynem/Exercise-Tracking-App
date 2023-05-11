import { useState } from "react";
import MainNav from "../components/Navbar/MainNav";
import ActivityItem from "../components/Activity/ActivityItem.jsx"
import ExerciseTracker from "../components/Activity/ExerciseTracker";
import "./AddActivity.css";

const AddActivity = () => {
  return (
    <div>
      <div className="AddAct-bg">
        <MainNav/>
      </div>

      <div className="AddAct-container">
        <ActivityItem />
        <ExerciseTracker />
      </div>
      
    </div>
  
  )
};



export default AddActivity;
