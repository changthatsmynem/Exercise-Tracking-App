import "./Layout.css";

const Layout = (props) => {
  return (
    <div
      className={`card-layout ${props.className} ${props.default && "card-layout-default"} ${
        props.success && "card-layout-success"
      } ${props.stop && "card-layout-stop"}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Layout;
