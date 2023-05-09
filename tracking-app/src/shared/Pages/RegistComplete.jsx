//component
import MainNav from "../components/Navbar/MainNav";
import Background from "../components/UIElements/Background";

//style
import "./RegistComplete.css";

const RegistComplete = () => {
  return (
    <Background>
      <MainNav />
      <div className="regist-container">
        <img
          src="https://cdn.discordapp.com/attachments/1082855767092232295/1098455167646576650/logo.png"
          width={110}
          height={100}
        />
        <h1>Register Complete</h1>
        <p>Thank you for signing up with us</p>
        <a href="/login">
          <span>Sign in here!</span>
        </a>
      </div>
    </Background>
  );
};

export default RegistComplete;
