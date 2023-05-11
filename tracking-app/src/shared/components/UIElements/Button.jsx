import { useState } from "react";
import { Link } from "react-router-dom";

//styles
import "./Button.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`button-main button--${props.size || "default"}${
          props.danger && "button--danger"
        } ${props.inverse && "button--inverse"} ${props.className}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }

  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button-main button--${props.size || "default"} ${
          props.danger && "button--danger"
        } ${props.inverse && "button--inverse"} ${props.className}`}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={`button-main button--${props.size || "default"} ${
        props.danger && "button--danger"
      } ${props.inverse && "button--inverse"} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
