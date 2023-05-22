import { useState, useEffect } from "react";

//component
import MainNav from "../../shared/components/Navbar/MainNav";
import Background from "../../shared/components/UIElements/Background";

import WALK from "../../assets/images/walk_480.png";
import RUN from "../../assets/images/running_480.png";
import BICYCLE from "../../assets/images/bicycle_480.png";
import SWIM from "../../assets/images/swimming_480.png";
import HIKE from "../../assets/images/hiking_480.png";

//style
import "./AddActivity.css";

const AddActivity = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState({
    activityType: "",
    activityName: "",
    activityDetail: "",
    startTime: "",
    finishTime: "",
    distance: "",
    file: "",
  });

  const handleClick = (theActivity) => {
    setSelectedActivity(theActivity);
  };

  useEffect(
    () => setData({ ...data, activityType: selectedActivity }),
    [selectedActivity]
  );

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data);
    }
  }, [formErrors]);

  const validate = (data) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!data.activityType) {
      errors.activityType = "Please select an activity type.";
    }
    if (!data.activityName) {
      errors.activityName = "Activity name is required!";
    }
    if (!data.activityDetail) {
      errors.activityDetail = "Activity detail is required!";
    }
    if (!data.startTime) {
      errors.startTime = "Start time is required!";
    }
    if (!data.finishTime) {
      errors.finishTime = "Finish time is required!";
    }
    return errors;
  };

  return (
    <>
      <MainNav />
      <Background className="add-activity-bg">
        <div className="add-activity-container">
          <div className="add-activity-header">
            <h1>Add Activity</h1>
            <h4>Select an activity</h4>
          </div>
          <div className="add-activity-icons">
            <button
              onClick={() => handleClick("Biking")}
              style={{
                backgroundColor: selectedActivity === "Biking" ? "white" : null,
              }}
            >
              <img src={BICYCLE} alt="bicycle-icon" />
            </button>
            <button
              onClick={() => handleClick("Hiking")}
              style={{
                backgroundColor: selectedActivity === "Hiking" ? "white" : null,
              }}
            >
              <img src={HIKE} alt="hiking-icon" />
            </button>
            <button
              onClick={() => handleClick("Running")}
              style={{
                backgroundColor:
                  selectedActivity === "Running" ? "white" : null,
              }}
            >
              <img src={RUN} alt="running-icon" />
            </button>
            <button
              onClick={() => handleClick("Walking")}
              style={{
                backgroundColor:
                  selectedActivity === "Walking" ? "white" : null,
              }}
            >
              <img src={WALK} alt="walking-icon" />
            </button>
            <button
              onClick={() => handleClick("Swimming")}
              style={{
                backgroundColor:
                  selectedActivity === "Swimming" ? "white" : null,
              }}
            >
              <img src={SWIM} alt="swimming-icon" />
            </button>
          </div>
          <div className="add-activity-forminput">
            <form onSubmit={handleSubmit} action="/">
              <div>
                <label id="activityType">Activity: {selectedActivity}</label>
                <br />
                <p id="type-error" className="error-message">
                  {formErrors.activityType}
                </p>
              </div>
              <div>
                <label id="activityName">Activity name</label>
                <br />
                <input
                  type="text"
                  name="activityName"
                  value={data.activityName}
                  onChange={handleChange}
                />
                <p className="error-message">{formErrors.activityName}</p>
              </div>
              <div>
                <label id="activityDetail">Activity detail</label>
                <br />
                <input
                  type="text"
                  name="activityDetail"
                  value={data.activityDetail}
                  onChange={handleChange}
                />
                <p className="error-message">{formErrors.activityDetail}</p>
              </div>
              <div>
                <label className="startTime">Start time</label>
                <br />
                <input
                  type="datetime-local"
                  name="startTime"
                  value={data.startTime}
                  onChange={handleChange}
                />
                <p className="error-message">{formErrors.startTime}</p>
              </div>
              <div>
                <label className="finishTime">Finish time</label>
                <br />
                <input
                  type="datetime-local"
                  name="finishTime"
                  value={data.finishTime}
                  onChange={handleChange}
                />
                <p className="error-message">{formErrors.finishTime}</p>
              </div>
              <div>
                <label id="distance">Distance (optional)</label>
                <br />
                <input
                  type="number"
                  name="distance"
                  value={data.distance}
                  placeholder="km"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label id="file">Attach an image</label>
                <br />
                <input
                  type="file"
                  name="file"
                  value={data.file}
                  onChange={handleChange}
                />
              </div>
              <button className="addNewActivity-btn" type="submit">
                {" "}
                Add New Activity{" "}
              </button>
            </form>
          </div>
        </div>
      </Background>
    </>
  );
};
export default AddActivity;
