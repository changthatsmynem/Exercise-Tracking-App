import { useState } from "react";

//style
import "../pages/Register/RegisterForm.css";

const RegisterInputForm = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
    // const value = e.target.value;
    // value.toUpperCase();
    setFocused(true);
  };

  return (
    <div className="register-input-form">
      <label className="register-label">{label}</label>
      <input
        className="register-input"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <p className="error-registration-message">{errorMessage}</p>
    </div>
  );
};

export default RegisterInputForm;
