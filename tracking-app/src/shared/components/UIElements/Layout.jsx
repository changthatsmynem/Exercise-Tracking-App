import "./Layout.css";

const Layout = (props) => {
  return (
    <div className={`card-layout ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Layout;
