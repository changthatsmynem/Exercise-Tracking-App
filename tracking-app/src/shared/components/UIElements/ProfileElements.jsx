import { useState } from "react";

//style
import "./ProfileElements.css";

const PROFILE = {};

const ProfileElements = (props) => {
  const defaultImg =
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1683577342~exp=1683577942~hmac=86e6e4928a827cf59bebcc8d6607c038b8299ee833ed41ab1036dc8971c87525";
  const [userProfile, setUserProfile] = useState(defaultImg);

  return (
    <div
      className={`profile-card__dashboard ${props.className}`}
      style={props.style}
    >
      <div className="profile-image-container">
        <img
          src={props.user ? props.userImg : defaultImg}
          alt={props.alt}
          width={120}
          height={120}
        />
      </div>
      <div className="profile-info-container">
        <h2>
          <span className="profile-first-name">{props.firstName}</span>
        </h2>
        <h2>
          <span className="profile-last-name">{props.lastName}</span>
        </h2>
        <div className="profile-details-container">
          <div className="age-profile">
            <p>{props.age}</p>
          </div>
          <div className="height-profile">
            <p>{props.height}</p>
          </div>
          <div className="weight-profile">
            <p>{props.weight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileElements;
