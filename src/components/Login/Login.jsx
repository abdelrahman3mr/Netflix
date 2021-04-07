import React, { useState } from "react";
import SignUpScreen from "../SignUp/SignUp";
import "./Login.css";
import Jumbotron from "../../containers/jumbotron";

const Login = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="login">
      <div
        className="login__background"
        style={{
          background: 'url("/signinbg.jpg") center no-repeat',
          position: "relative",
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        <img
          src="/netflix.png"
          alt="Netflix Logo"
          className="login__logo"
          onClick={() => setLogin(false)}
        />
        <button className="login__button" onClick={() => setLogin(true)}>
          Sign In
        </button>
        <div className="login__gradient" />
      </div>

      <div className="login__body">
        {login ? (
          <SignUpScreen />
        ) : (
          <>
            <h1> Unlimitied films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or reset your
              membership
            </h3>

            <div className="login__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="login__getStarted"
                  onClick={() => setLogin(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
      <Jumbotron />
    </div>
  );
};

export default Login;
