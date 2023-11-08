import React, { useEffect, useState } from "react";
import "./Home.css";
import Topbar from "../../Components/Topbar";
import Hotel from "../../Components/Hotel";
import vid1 from "../../Videos/vid1.mp4";
import Footer from "../../Components/Footer";
import ImageLoader from "../../Components/ImageLoader";
import { storage } from "../../Components/Firebase";
import { ref, getDownloadURL } from "firebase/storage";
function Home() {
  const [videoURL, setVideoURL] = useState(null);
  useEffect(() => {
    const videoRef = ref(storage, "vid1.mp4");

    getDownloadURL(videoRef)
      .then((url) => {
        setVideoURL(url);
      })
      .catch((error) => {
        console.error("Error retrieving video:", error);
      });
  }, []);
  return (
    <div className="home">
      <Topbar />
      <div className="homescroll">
        <Hotel />

        <div className="home1">
          {/* <video
            className="hmvid"
            src={videoURL}
            type="video/mp4"
            autoPlay
            loop
            muted
          /> */}
          <video className="hmvid" src={vid1} autoPlay loop muted />
          <ImageLoader cname="line" num={22} />

          <h2>Discover AquaVista Paradise</h2>
          <ImageLoader cname="line" num={23} />
          <h3>
            where your dream vacation becomes a reality. Nestled along the
            pristine shores of the Mediterranean, our resort offers a harmonious
            blend of natural beauty, luxury, and warm hospitality. From the
            moment you step into our tranquil haven, you'll be enchanted by the
            serenity that surrounds you.
          </h3>
          <div className="img1">
            <ImageLoader cname="hotelimg1" num={18} />

            <div className="img2">
              <ImageLoader cname="hotelimg2" num={19} />
              <ImageLoader cname="hotelimg3" num={20} />
            </div>
          </div>

          <br></br>
          <ImageLoader cname="line" num={22} />
          <h2>Our Mission</h2>
          <ImageLoader cname="line" num={23} />
          <h3>
            To provide a serene oasis where guests can escape the demands of
            daily life and immerse themselves in an experience of pure
            relaxation and rejuvenation.
          </h3>
          <ImageLoader cname="hotelimg4" num={21} />

          <br></br>
          <ImageLoader cname="line" num={22} />
          <h2>A Rich History</h2>
          <ImageLoader cname="line" num={23} />
          <h3>
            AquaVista Paradise has a storied past dating back to 2003 when it
            was originally established as a quaint beachfront retreat. Over the
            decades, it has undergone several renovations and expansions,
            evolving into the luxurious haven you see today.
          </h3>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
