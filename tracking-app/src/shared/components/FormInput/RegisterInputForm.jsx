import "./RegisterForm.css";
import { useState } from "react";

const RegisterInputForm = (props) => {
    const { label,onChange, errorMessage, id, ...inputProps } = props;
   
    return (
        <div className="register-input-form">
            <label className="register-label">{label}</label>
            <input  
                className="register-input"
                {...inputProps}
                onChange={onChange}
                 
            />
            <p className="error-registration-message">{errorMessage} </p>
        </div>
    );
};

export default RegisterInputForm;