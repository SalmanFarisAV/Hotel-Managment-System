import React, { useEffect, useState } from "react";
import "./Admin.css";
import vid3 from "../../Videos/vid3.mp4";
import { useNavigate } from "react-router-dom";
import { storage } from "../../Components/Firebase";
import { ref, getDownloadURL } from "firebase/storage";
function Admin() {
  const navigate = useNavigate();
  const [videoURL, setVideoURL] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const videoRef = ref(storage, "vid3.mp4");

    getDownloadURL(videoRef)
      .then((url) => {
        setVideoURL(url);
      })
      .catch((error) => {
        console.error("Error retrieving video:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const [values, setValues] = useState({
    pass: "",
  });
  var passs = "Admin@123";

  const handleSubmission = (e) => {
    e.preventDefault();
    if (values.pass === passs) {
      navigate("/admin");
    }
  };
  return (
    <div className="adminloginpage">
      <div className="adminvid">
        {/* {isLoading ? (
          <div class="three-body">
            <div class="three-body__dot"></div>
            <div class="three-body__dot"></div>
            <div class="three-body__dot"></div>
          </div>
        ) : (
          <video
            className="loginvid"
            src={videoURL}
            type="video/mp4"
            autoPlay
            loop
            muted
          />
        )} */}

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
