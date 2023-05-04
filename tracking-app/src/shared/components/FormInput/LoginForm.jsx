import { useState } from "react";

//form validate
import { VALIDATE_EMAIL, VALIDATE_PASSWORD } from "../../validators/validate";

//components
import Layout from "../UIElements/Layout";
import MainNav from "../Navbar/MainNav";
import Button from "../UIElements/Button";
import Input from "./InputForm";

//style
import "./LoginForm.css";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <MainNav />
      <div className="bg-for-login-page">
        <Layout className="login-form">
          <form onSubmit={handleSubmit}>
            <Input
              element="input"
              id="email"
              type="email"
              label="Email"
              errorText="Please enter a valid email address."
              validators={[VALIDATE_EMAIL()]}
            />
            <Input
              element="input"
              id="password"
              type="password"
              label="Password"
              errorText="Your password should includes at least 1 Lowercase, 1 Uppercase and 1 number with at least 6 characters"
              validators={[VALIDATE_PASSWORD()]}
            />
            <div className="checkbox-remember">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <h6 style={{ fontWeight: "400" }}>Remember Me</h6>
              <h5>
                <a href="/register">Forgot Password?</a>
              </h5>
            </div>
            <div className="button-div-login">
              <Button
                inverse
                to={"/register"}
                type={"button"}
                className="signup-login-form-btn"
              >
                Sign up
              </Button>
              <Button type={"submit"}>Login</Button>
            </div>
          </form>
        </Layout>
      </div>
    </>
  );
};

export default LoginForm;
