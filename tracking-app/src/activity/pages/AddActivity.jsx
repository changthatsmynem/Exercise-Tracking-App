import { useState } from "react";
//component
import MainNav from "../../shared/components/Navbar/MainNav";
import ActivityItem from "../components/AddActivity/ActivityItem";
import ExerciseTracker from "../components/AddActivity/ExerciseTracker";
import Background from "../../shared/components/UIElements/Background";

//style
import "./AddActivity.css";

const AddActivity = () => {
  return (
    <>
      <MainNav />
      <Background className='add-activity-bg'>
        <div className="AddAct-container">
          <ActivityItem />
          <ExerciseTracker />
        </div>
      </Background>
    </>
  );
};

export default AddActivity;
