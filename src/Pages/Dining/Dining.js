import React, { useEffect, useState } from "react";
import "./Dining.css";
import Topbar from "../../Components/Topbar";
import Hotel from "../../Components/Hotel";
import dinvid from "../../Videos/dinvid.mp4";
import line1 from "../../Pics/line1.1.png";
import line2 from "../../Pics/line1.2.png";
import Footer from "../../Components/Footer";
import ImageLoader from "../../Components/ImageLoader";
import { storage } from "../../Components/Firebase";
import { ref, getDownloadURL } from "firebase/storage";
function Dining() {
  const [videoURL, setVideoURL] = useState(null);
  useEffect(() => {
    const videoRef = ref(storage, "dinvid.mp4");

    getDownloadURL(videoRef)
      .then((url) => {
        setVideoURL(url);
      })
      .catch((error) => {
        console.error("Error retrieving video:", error);
      });
  }, []);
  return (
    <div className="dining">
      <Topbar />
      <div className="homescroll">
        <Hotel />
        <div className="dining1">
          {/* <video
            className="diningvid"
            src={videoURL}
            type="video/mp4"
            autoPlay
            loop
            muted
          /> */}
          <video className="diningvid" src={dinvid} autoPlay loop muted />
          <div className="dining2">
            <img src={line1} alt="" className="lines" />
            <h2>Culinary Delights at AquaVista Paradise</h2>
            <img src={line2} alt="" className="lines" />
            <h3>
              Welcome to our world of gastronomic exploration. At AquaVista
              Paradise, we take pride in offering an exquisite array of culinary
              experiences that will tantalize your taste buds and leave you
              craving for more. Our dining options include a diverse range of
              cuisines to cater to every palate.
            </h3>
            <div className="din1">
              <ImageLoader cname="foodpic" num={10} />
              <ImageLoader cname="foodpic" num={11} />
            </div>
            <div className="din2">
              <ImageLoader cname="foodpic" num={12} />
              <ImageLoader cname="foodpic" num={13} />
            </div>
            <h1></h1>
            <img src={line1} alt="" className="lines" />
            <h2>A World of Flavors</h2>
            <img src={line2} alt="" className="lines" />
            <h3>
              Explore a diverse culinary journey with our carefully curated
              dining options. Choose from an array of cuisines, each crafted
              with passion and precision. Our culinary team is dedicated to
              delivering an unforgettable dining experience.
            </h3>
            <div className="din3">
              <div className="c1">
                <ImageLoader cname="cuisine1" num={14} />

                <div className="c1t1">
                  <h2 className="dintitle1">Indian Cuisine</h2>
                  <h3 className="dindisp1">
                    Savor the rich and aromatic flavors of India with our
                    authentic Indian cuisine. From savory curries to tandoori
                    specialties, our Indian kitchen offers a taste of tradition.
                  </h3>
                </div>
              </div>

              <div className="c2">
                <div className="c2t1">
                  <h2 className="dintitle2">Chinese Cuisine</h2>
                  <h3 className="dindisp2">
                    Delight in the bold and tantalizing flavors of Chinese
                    cuisine. Our expert chefs use the finest ingredients to
                    create dishes that will transport your palate to the heart
                    of China.
                  </h3>
                </div>
                <ImageLoader cname="cuisine2" num={15} />
              </div>

              <div className="c1">
                <ImageLoader cname="cuisine1" num={16} />

                <div className="c1t1">
                  <h2 className="dintitle1">Mediterranean Cuisine</h2>
                  <h3 className="dindisp1">
                    Experience the sun-kissed Mediterranean on your plate. Our
                    Mediterranean menu boasts fresh seafood, vibrant salads, and
                    the essence of coastal dining.
                  </h3>
                </div>
              </div>

              <div className="c2">
                <div className="c2t1">
                  <h2 className="dintitle2">Continental Cuisine</h2>
                  <h3 className="dindisp2">
                    Immerse yourself in the art of continental dining. Our
                    international menu offers a fusion of flavors, from Italian
                    pastas to French delicacies.
                  </h3>
                </div>
                <ImageLoader cname="cuisine2" num={17} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dining;
