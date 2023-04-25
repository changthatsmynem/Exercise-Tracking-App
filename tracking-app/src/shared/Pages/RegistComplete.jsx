import MainNav from "../components/Navbar/MainNav";
import "./RegistComplete.css"

const RegistComplete = () => {
    return(

        <div>
            <div className="regist-bg">
                <MainNav/>
            </div>
            <div className="regist-container">
                <img src="App logo"/>
                <h1>Register Complete</h1>
                <p>Thank you for signing up with us</p>
                <a href="/signin"><span>Sign in here!</span></a>
            </div>
        

        </div>
    
    )
  };
  
  export default RegistComplete;