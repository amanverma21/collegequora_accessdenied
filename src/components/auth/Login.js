import React, { useState } from "react";
import "./Login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { auth, provider } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
  };

  const registerSignIn = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1IQyFoZLYRgOofcZaLaMO0WG8sKhJlVSwAA&usqp=CAU"
            alt=""
          />
        </div>
        <div className="login__desc">
          <p>Welcome to Arena of IIIT Surat</p>
          {/* <p style={{ color: "royalblue", fontSize: "25px" }}>
            HandCrafted with ❤️ by{" "}
          </p> */}
          <h3>Team Access_Denied</h3>
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn}>Continue With Google</p>
            </div>
            {/* <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span>Continue With Facebook</span>
            </div> */}
            <div className="login__authDesc">
              <p>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Sign Up With Email
                </span>
                . By continuing you indicate that you have read and agree to
                ColLab_IIIT Surat{" "}
                <span style={{ color: "grey" }}>
                  Terms of Service{" "}
                </span>
                and{" "}
                <span style={{ color: "grey" }}>
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
          <div className="login__emailPass">
            <div className="login__label">
              <h4>Login</h4>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <small>Forgot Password?</small>
              <button onClick={handleSignIn}>Login</button>
            </div>
            <button onClick={registerSignIn}>Register</button>
          </div>
        </div>
        <div className="login__lang">
        {"</>"}
          {/* <ArrowForwardIosIcon fontSize="small" /> */}
        </div>
        <div className="login__footer">
        <a href = "https://team-access-denied.netlify.app/">
          <p>About Us</p></a>
         
          
          {/* <p>Contact</p> */}
          <a href = "https://collegequora-access-denied.web.app/">
          <p>&copy; ColLab Inc. 2021</p></a>
        </div>
      </div>
    </div>
  );
}

export default Login;
