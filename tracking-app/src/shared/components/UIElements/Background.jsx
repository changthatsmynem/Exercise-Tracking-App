import "./Background.css";

const Background = (props) => {
  return (
    <div className={`Layout-Background ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Background;
