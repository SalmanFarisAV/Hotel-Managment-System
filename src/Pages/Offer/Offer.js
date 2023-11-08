import React from "react";
import "./Offer.css";
import Topbar from "../../Components/Topbar";
import Hotel from "../../Components/Hotel";
// import studio from "../../Pics/studio.webp";
// import villa from "../../Pics/villa.webp";
// import delux from "../../Pics/delux.webp";
// import psuit from "../../Pics/presidentialsuite.webp";
import Footer from "../../Components/Footer";
import offer from "../../Pics/offer.png";
import { useNavigate } from "react-router-dom";
import ImageLoader from "../../Components/ImageLoader";
function Offer() {
  const navigate = useNavigate();
  return (
    <div className="offer">
      <Topbar />
      <div className="homescroll">
        <Hotel />
        <div className="offer1">
          <div className="ac-nonac1">
            <div
              onClick={() => navigate("/rooms/presidential")}
              className="ac1"
            >
              <ImageLoader cname="acimg1" num={26} />
              <h3 className="roomh31">Presidential Suite</h3>
              <img className="offerimg" src={offer} alt="" />
            </div>
            <div onClick={() => navigate("/rooms/deluxe")} className="nonac1">
              <ImageLoader cname="acimg1" num={27} noanimation={true} />
              <h3 className="roomh31">Deluxe</h3>
              <img className="offerimg1" src={offer} alt="" />
            </div>
          </div>
          <div className="ac-nonac1">
            <div onClick={() => navigate("/rooms/villa")} className="ac1">
              <ImageLoader cname="acimg1" num={28} noanimation={true} />
              <h3 className="roomh31">Villas</h3>
              <img className="offerimg" src={offer} alt="" />
            </div>
            <div onClick={() => navigate("/rooms/studio")} className="nonac1">
              <ImageLoader cname="acimg1" num={29} noanimation={true} />
              <h3 className="roomh31">Studio</h3>
              <img className="offerimg1" src={offer} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Offer;
