import React, { useState } from "react";
import './ExerciseTracker.css';

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
    <div>
      <form onSubmit={handleTrackerSubmit}
      className="form-container">
        <h1>Exercise Tracker</h1>
        <ExerciseForm />
        <ActivityForm />
        <button type="submit"
        className="button">
        Add
        </button>
      </form>
    </div>
  );
};

export default ExerciseTracker;
