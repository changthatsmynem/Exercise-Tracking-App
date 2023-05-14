import { useState } from "react";

//component
import Button from "../../shared/components/UIElements/Button";
import EditIcon from "@mui/icons-material/Edit";

//style
import "./ProfileElements.css";

//image
import DEFAULT_AVATAR from "../../assets/images/default-avatar.jpeg";

const PROFILE = {};

const ProfileElements = (props) => {
  const defaultImg = DEFAULT_AVATAR;
  const [userProfile, setUserProfile] = useState(defaultImg);

  return (
    <div className="profile-card__dashboard" style={props.style}>
      <div className="profile-image-container">
        <img src={props.user ? props.userImg : defaultImg} alt={props.alt} />
      </div>
      <div className="profile-info-container">
        <div className="profile-name-header">
          <h2>
            Name:
            <span className="profile-first-name">{props.firstName}</span>
            <span className="profile-last-name">{props.lastName}</span>
          </h2>
        </div>
        <div className="profile-details-container">
          <div className="age-profile">
            <p>Age: {props.age}</p>
          </div>
          <div className="height-profile">
            <p>Height: {props.height}</p>
          </div>
          <div className="weight-profile">
            <p>Weight: {props.weight}</p>
          </div>
        </div>
      </div>
      <div className="edit-profile-container">
        <Button className="edit-profile-btn">
          <div>
            <EditIcon className="edit-profile-icon"/>
            <h4>EDIT PROFILE</h4>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ProfileElements;
