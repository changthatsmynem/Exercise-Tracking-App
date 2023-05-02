import { useState } from "react";
import MainNav from "../components/Navbar/MainNav";
import ActivityItem from "../components/Activity/ActivityItem.jsx"
// import ExerciseActivityForm from "../components/Activity/ExerciseActivityForm.jsx";
import ExerciseTracker from "../components/Activity/ExerciseTracker";

const AddActivity = () => {


  return (
    <div>
      <div>
        <MainNav/>
      </div>

      <div className="activity-formcard">
        <FormCard/>
      </div>
      
    </div>
  
  )
};

const FormCard = () => {

  return (
    <div>
      {/* <div className="Header-form">
        <div className="Head-field">
          <h1>Add Activity</h1>
          <p>Activity Type</p>
        </div>
        </div> */}
      <ActivityItem />
      <ExerciseTracker />
    </div>
  )
};

// const HeaderForm = () => {
//   return (
//     <div className="Header-form">
//       <div className="Head-field">
//         <h1>Add Activity</h1>
//         <p>Activity Type</p>
//       </div>
//     </div>
//   )
// };



export default AddActivity;
