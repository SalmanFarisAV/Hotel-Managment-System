import React from "react";
import "./Admin.css";
import vid3 from "../../Videos/vid3.mp4";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Admin() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    pass: "",
  });
  var passs = "Admin@123";

  const handleSubmission = (e) => {
    e.preventDefault();
    if (values.pass == passs) {
      navigate("/admin");
    }
  };
  return (
    <div className="adminloginpage">
      <div className="adminvid">
        <video className="loginvid" src={vid3} autoPlay loop muted />
      </div>
      <div className="adminsign">
        <div class="subscribe">
          <p>ADMIN LOGIN</p>
          <input
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            name="password"
            type="password"
            class="input"
            placeholder="Password"
          />

          <div onClick={handleSubmission} class="submit-btn">
            SUBMIT
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
