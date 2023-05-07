import "./ProfileElements.css";

const ProfileElements = (props) => {
  return (
    <div
      className={`profile-card__dashboard ${props.className}`}
      style={props.style}
    >
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.with, height: props.height }}
      />
    </div>
  );
};

export default ProfileElements;
