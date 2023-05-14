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
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTOuched: false,
    isValid: props.initialValid || false,
  });

  const changeHandler = ({ target }) => {
    dispatch({
      type: "CHANGE",
      value: target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
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
        onBlur={touchHandler}
        value={inputState.value}
        required
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`input-custom ${
        !inputState.isValid && inputState.isTouched && "input-custom--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
