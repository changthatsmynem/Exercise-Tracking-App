import MainNav from "../components/Navbar/MainNav";
import "./RegistComplete.css"

const RegistComplete = () => {
    return(

        <div className="Main-bg">
            <div className="regist-bg">
                <MainNav/>
            </div>
            <div className="regist-container">
                <img src="https://cdn.discordapp.com/attachments/1082855767092232295/1098455167646576650/logo.png"
                width={100} height={100}
                />
                <h1>Register Complete</h1>
                <p>Thank you for signing up with us</p>
                <a href="/login"><span>Sign in here!</span></a>
            </div>
        

        </div>
    
    )
  };
  
  export default RegistComplete;