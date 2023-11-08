import React, { useEffect, useState } from "react";
import "./Login.css";
import vid3 from "../../Videos/vid3.mp4";
import { useNavigate } from "react-router-dom";
import { storage } from "../../Components/Firebase";
import { ref, getDownloadURL } from "firebase/storage";
function Login() {
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
  return (
    <div className="loginpage">
      <div className="logvid">
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
        <video
          className="loginvid"
          src={vid3}
          type="video/mp4"
          autoPlay
          loop
          muted
        />
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
