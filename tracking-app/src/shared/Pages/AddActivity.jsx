import { useState } from "react";
import MainNav from "../components/Navbar/MainNav";

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
      <HeaderForm />
      <ActivityChoices />
      <FormActInput />
    </div>
  )
};

const HeaderForm = () => {
  return (
    <div className="Header-form">
      <h1>Add Activity</h1>
      <p>Activity Type</p>
    </div>
  )
};

const ActivityChoices = () => {
// const [selectActivity, SetSelectActivity] = useState(null);
  return (
    <div className="activity-choices">
      {/* <ActivityItem/> */}
    </div>
  )
};

const FormActInput = () => {

};

export default AddActivity;
