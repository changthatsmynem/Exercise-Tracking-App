import "./Layout.css";

const Layout = (props) => {
  return (
    <div
      className={`card-layout ${props.className} ${
        props.default === "default" && "card-layout-default"
      } ${props.default === "success" && "card-layout-success"} ${
        props.default === "cancel" && "card-layout-stop"
      }`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Layout;
