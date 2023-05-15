import { useState } from "react";

//component
import Avatar from "./Avatar";
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
        <Avatar
          image={props.user ? props.userImg : defaultImg}
          alt={props.alt}
        />
      </div>
      <div className="profile-name-header">
        <h2>
          <span className="profile-first-name">{props.name}</span>
        </h2>
      </div>
      <div className="profile-info-container">
        <div className="profile-details-container">
          <div className="age-profile">
            <p>Age</p>
            <div className="age-number">{props.profile.age}</div>
          </div>
          <div className="height-profile">
            <p>Height</p>
            <div className="height-number">{props.profile.height}</div>
          </div>
          <div className="weight-profile">
            <p>Weight</p>
            <div className="weight-number">{props.profile.weight}</div>
          </div>
        </div>
      </div>
      <div className="edit-profile-container">
        <Button to="/editprofile" className="edit-profile-btn">
          <div>
            <EditIcon className="edit-profile-icon" />
            <h4>EDIT PROFILE</h4>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ProfileElements;
