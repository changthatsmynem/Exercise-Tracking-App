import { useState, useReducer } from "react";

//validator
import { validate } from "../../validators/validate";

//style
import "./InputForm.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: true,
  });

  const changeHandler = ({ target }) => {
    dispatch({
      type: "CHANGE",
      value: target.value,
      validators: props.validators,
    });
  };

  // const [inputState, setInputState] = useState({ value: "", isValid: true });

  // const changeHandler = ({ target }) => {
  //   const value = target.value;
  //   const isValid = validate(value, props.validators);

  //   setInputState({ value: value, isValid: isValid });
  // };

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
        required
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`input-custom ${
        !inputState.isValid && "input-custom--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
