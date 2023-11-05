import React from "react";
import "./LoginSignup.css";
import vid3 from "../../Videos/vid3.mp4";
import { useNavigate } from "react-router-dom";
function LoginSignup() {
  const navigate = useNavigate();
  return (
    <div className="loginsignup">
      <div className="logvid">
        <video className="loginvid" src={vid3} autoPlay loop muted />
      </div>
      <div className="loginsignup2">
        <div class="wrapper">
          <div class="card-switch">
            <label class="switch">
              <input type="checkbox" class="toggle" />
              <span class="slider"></span>
              <span class="card-side"></span>
              <div class="flip-card__inner">
                <div class="flip-card__front">
                  <div class="title">Log in</div>
                  <form class="flip-card__form" action="">
                    <input
                      class="flip-card__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                    <input
                      class="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                    <button
                      onClick={() => navigate("/home")}
                      class="flip-card__btn"
                    >
                      Let`s go!
                    </button>
                  </form>
                </div>
                <div class="flip-card__back">
                  <div class="title">Sign up</div>
                  <form class="flip-card__form" action="">
                    <input
                      class="flip-card__input"
                      placeholder="Name"
                      type="name"
                    />
                    <input
                      class="flip-card__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                    <input
                      class="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                    <button
                      onClick={() => navigate("/loginsignup")}
                      class="flip-card__btn"
                    >
                      Confirm!
                    </button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
