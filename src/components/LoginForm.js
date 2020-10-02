import React, { useState } from "react";
import "./LoginForm.css";

// if'y sprawdzajace czy haslo ma >8 znakow i liczbe
//errory zeby wyskakiwaly

function LoginForm() {
  const [toggle, setToggle] = useState("true");
  const [inputName, setInputName] = useState("");
  const [inputLast, setInputLast] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [base, setBase] = useState([]);
  // const [errorName, setErrorName] = useState("true");
  // const [errorLast, setErrorLast] = useState("true");
  // const [errorEmail, setErrorEmail] = useState("true");
  const [errorPassword, setErrorPassword] = useState("true");

  const toggling = () => {
    setToggle(!toggle);
    // console.log(toggle);
  };

  const inputNameHandler = (e) => {
    setInputName(e.target.value);

    // console.log(inputName);
  };
  const inputLastHandler = (e) => {
    setInputLast(e.target.value);
    // console.log(inputLast);
  };
  const inputEmailHandler = (e) => {
    setInputEmail(e.target.value);
    // console.log(inputEmail);
  };
  const inputPasswordHandler = (e) => {
    setInputPassword(e.target.value);
    // console.log(inputPassword);
  };

  const submitInput = (e) => {
    if (inputPassword.length >= 8 && /\d/.test(inputPassword)) {
      setBase([
        ...base,
        {
          name: inputName,
          last: inputLast,
          email: inputEmail,
          password: inputPassword,
          id: Math.random() * 1000,
        },
      ]);

      setInputName("");
      setInputLast("");
      setInputEmail("");
      setInputPassword("");
    } else errorPasswordPopUp();
  };
  const errorPasswordPopUp = () => {
    setErrorPassword(!errorPassword);
    setInputName("");
    setInputLast("");
    setInputEmail("");
    setInputPassword("");
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__label">Create Account</h1>
        <div className="login__name login__text">First Name</div>
        <div onChange={inputNameHandler} className="login__nameInput input">
          <input value={inputName} type="text" />
        </div>
        {/* <p className={`login__textErrors`}>
          Please enter a first name using letters only
        </p> */}
        <div className="login__last login__text">Last Name</div>
        <div onChange={inputLastHandler} className="login__lastInput input">
          <input value={inputLast} type="text" />
        </div>
        {/* <p className={`login__textErrors `}>
          Please enter a first name using letters only
        </p> */}
        <div className="login__email login__text">Email Address</div>
        <div onChange={inputEmailHandler} className="login__emailInput input">
          <input value={inputEmail} type="email" />
        </div>
        {/* <p className={`login__textErrors `}>Please enter a valid email</p> */}
        <div className="login__coverPI">
          <div className="login__password login__text">Password</div>
          <div
            onMouseEnter={toggling}
            onMouseLeave={toggling}
            className="login__infoIcon login__text"
          >
            <i className="fas fa-info-circle"></i>
          </div>
          <span
            className={`login__infoIconText ${
              toggle ? "" : "login__infoIconTextActive"
            }`}
          >
            please enter a valid password that has minimum of eight characters.
            Password must have at least one number and one letter
          </span>
        </div>
        <div
          onChange={inputPasswordHandler}
          className="login__passwordInput input"
        >
          <input value={inputPassword} type="password" />
        </div>
        <p
          className={`login__textErrors ${errorPassword ? "" : "errorShowUp"}`}
        >
          Please enter a valid password that has a minimum of eight characters.
          Password must have at least one number and one letter.
        </p>
        <button onClick={submitInput} className="login__submit">
          CREATE ACCOUNT
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
