import { useState } from "react";
import MainNav from "../components/Navbar/MainNav";

const AddAct2 = () => {
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
      <ActivityItem />
      <ExerciseTracker />
    </div>
  )
};


const HeaderForm = () => {
  return (
    <div className="Header-form">
      <div className="Head-field">
        <h1>Add Activity</h1>
        <p>Activity Type</p>
      </div>
    </div>
  )
};

const ActivityItem = () => {
  const [selectedIcon, setSelectedIcon] = useState("");

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="regist-container">
      <h2>Select an Activity</h2>
      <div className="icon-selector-container">
        <img
          src="./walk_480.png"
          alt="walk"
          onClick={() => handleIconSelect("walk")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "walk" ? "2px solid blue" : "none",
          }}
        />
        <img
          src="./running_480.png"
          alt="run"
          onClick={() => handleIconSelect("run")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "run" ? "2px solid blue" : "none",
          }}
        />
        <img
          src="./swim_480.png"
          alt="swim"
          onClick={() => handleIconSelect("swim")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "swim" ? "2px solid blue" : "none",
          }}
        />
        <img
          src="./bicycle_480.png"
          alt="bike"
          onClick={() => handleIconSelect("bike")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "bike" ? "2px solid blue" : "none",
          }}
        />
        <img
          src="./hiking_480.png"
          alt="hike"
          onClick={() => handleIconSelect("hike")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "hike" ? "2px solid blue" : "none",
          }}
        />
      </div>
      <h3>You have selected: {selectedIcon}</h3>
    </div>
  );
};

const ExerciseForm = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [picture, setPicture] = useState("");
  const [distance, setDistance] = useState("");

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.value);
  };

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const handleExerciseSubmit = (e) => {
    e.preventDefault();
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
    console.log("Picture:", picture);
    console.log("Distance:", distance);
  };

  return (
    <form onSubmit={handleExerciseSubmit}
    className="form-container">
      <div
      className="form-field">
        <label htmlFor="start-time"
        className="form-field label">
        Start Time:</label>
        <input
          type="time"
          id="start-time"
          value={startTime}
          onChange={handleStartTimeChange}
        />
      </div>
      <div
      className="form-field">
        <label htmlFor="end-time"
        className="form-field label">
        End Time:</label>
        <input
          type="time"
          id="end-time"
          value={endTime}
          onChange={handleEndTimeChange}
        />
      </div>
      <div
      className="form-field">
        <label htmlFor="picture"
        className="form-field label">Picture:</label>
        <input
          type="file"
          id="picture"
          value={picture}
          onChange={handlePictureChange}
        />
      </div>
      <div
      className="form-field">
        <label htmlFor="distance"
        className="form-field label">Distance (km):</label>
        <input
          type="number"
          id="distance"
          value={distance}
          onChange={handleDistanceChange}
        />
      </div>
    </form>
  );
};

const ActivityForm = () => {
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState("");

  const handleActivityChange = (e) => {
    setActivity(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleExerciseSubmit = (e) => {
    e.preventDefault();
    console.log("Activity:", activity);
    console.log("Date:", date);
  };

  return (
    <form onSubmit={handleExerciseSubmit} 
    className="form-container">
      <div
      className="form-field">
        <label htmlFor="activity">Activity:</label>
        <input
          type="text"
          id="activity"
          value={activity}
          onChange={handleActivityChange}
        />
      </div>
      <div
      className="form-field">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          className="react-calendar"
        />
      </div>
    </form>
  );
};

const ExerciseTracker = () => {
  const handleTrackerSubmit = (e) => {
    e.preventDefault();
    console.log("Exercise Form Submitted");
    console.log("Activity Form Submitted");
  };

  return (
    <div
    className="form-container">
      <h1>Exercise Tracker</h1>
      <form onSubmit={handleTrackerSubmit}
      className="form-container">
        <ExerciseForm />
        <ActivityForm />
        <button type="submit"
        className="form-field button">
        Add
        </button>
      </form>
    </div>
  );
};

export default AddAct2;