import React, { useState } from "react";
import './ActivityItem.css'

const ActivityItem = () => {
  const [selectedIcon, setSelectedIcon] = useState("");

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="regist-container">
          <h1>Add Activity</h1>
          <h2>Select an Activity</h2>
      <div className="icon-list">
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
          src="https://github.com/changthatsmynem/Exercise-Tracking-App/blob/feature/editact/tracking-app/src/shared/components/icons/swimming_480.png"
          alt="swim"
          onClick={() => handleIconSelect("swim")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "swim" ? "2px solid blue" : "none",
          }}
        />
        <img
          src="https://github.com/changthatsmynem/Exercise-Tracking-App/blob/feature/editact/tracking-app/src/shared/components/icons/bicycle_480.png"
          alt="bike"
          onClick={() => handleIconSelect("bike")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "bike" ? "2px solid blue" : "none",
          }}
        />
        <img
          src="https://github.com/changthatsmynem/Exercise-Tracking-App/blob/feature/editact/tracking-app/src/shared/components/icons/hiking_480.png"
          alt="hike"
          onClick={() => handleIconSelect("hike")}
          style={{
            width: "100px",
            height: "100px",
            border: selectedIcon === "hike" ? "2px solid blue" : "none",
          }}
        />
      </div>
      </div>
      <h3>You have selected: {selectedIcon}</h3>
    </div>
  );
};

export default ActivityItem;