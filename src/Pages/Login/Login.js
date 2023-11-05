import React from "react";
import "./Login.css";
import vid3 from "../../Videos/vid3.mp4";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="loginpage">
      <div className="logvid">
        <video className="loginvid" src={vid3} autoPlay loop muted />
      </div>

      <div className="logbutton">
        <div onClick={() => navigate("/home")} className="userbutton">
          USER
        </div>
        <div onClick={() => navigate("/adminlogin")} className="adminbutton">
          ADMIN
        </div>
      </div>
    </div>
  );
}

export default Login;
