import RegisterInputForm from "./RegisterInputForm";
import "./RegisterForm.css";
import { useState } from "react";
import MainNav from "../Navbar/MainNav";

const RegisterForm = () => {
  const [values,setValues] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  })

  const input = [
    {
      id:1,
      name:"firstName",
      type:"text",
      placeholder:"First name",
      errorMessage:"First name should be English at least 3 letters and not contain any spacial characters.",
      label: "Firstname",
      pattern:"^[A-Za-z0-9 ]{3,30}$",
       

    },
    {
      id:2,
      name:"lastName",
      type:"text",
      placeholder:"Last name",
      errorMessage:"Last name should be English at least 3 letters and not contain any spacial characters.",
      label: "Lastname",
      pattern:"^[A-Za-z0-9 ]{3,30}$",
      
    },
    {
      id:3,
      name:"email",
      type:"text",
      placeholder:"Email",
      errorMessage:"Email should be valid , *This app is support only @gmail and @hotmail only*",
      label: "Email",
      pattern:("^[A-Za-z0-9]+@[gmailhotmail]+\\.(com|co\\.th|net)$"),
      
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:
      "Password should have 8-20 characters and include at least 1 Lowercase, 1 Uppercase and 1 number.",
      label: "Password",
      pattern:`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`, 
      
    },
    { 
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm password",
      errorMessage:"Password doesn't match.",
      label: "Confirm password",
      pattern:values.password,
       //จริงๆต้องใช้คำสั่ง required แต่เเก้ยังไงก็ไม่ได้เลย ลบทิ้ง
    },
  ]

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const onChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  };


  console.log(values);
  
  
  return (
    <div className="registration-page"> 
      <div className="edit-nav-registration">
        <MainNav />
      </div>
      <div className="register-form">
        <form className="registration-form-section" onSubmit={handleSubmit}>
          <h1 className="header-registration-word">Registration</h1>
          {input.map((input) =>  (
            <RegisterInputForm 
            key={input.id} 
            {...input}  
            value={values[input.name]} 
            onChange={onChange} 
            />
          ))}
          <div className="div-submit-btn">
            <button className="submit-registration-btn">Submit</button>
          </div>  
          <h1 className="last-sentence">Already has an account? <a href="" className="signIn-InRegistration-link">Sign in</a> here!</h1>
        </form>
      </div>
    </div>     
  );
};

export default RegisterForm;


