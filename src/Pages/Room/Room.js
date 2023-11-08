import React from "react";
import "./Room.css";
import Topbar from "../../Components/Topbar";
import Hotel from "../../Components/Hotel";
import Footer from "../../Components/Footer";
import offer from "../../Pics/offer.png";
import { useNavigate } from "react-router-dom";
import ImageLoader from "../../Components/ImageLoader";
function Room() {
  const navigate = useNavigate();
  return (
    <div className="room">
      <Topbar />
      <div className="homescroll">
        <Hotel />
        <div className="room1">
          <div className="ac-nonac">
            <div onClick={() => navigate("/rooms/ac")} className="ac">
              <ImageLoader cname="acimg" num={24} />
              <h3 className="roomh3">AC</h3>
            </div>
            <div onClick={() => navigate("/rooms/nonac")} className="nonac">
              <ImageLoader cname="acimg" num={25} noanimation={true} />
              <h3 className="roomh3">Non-AC</h3>
            </div>
          </div>
          <div className="ac-nonac">
            <div onClick={() => navigate("/rooms/presidential")} className="ac">
              <ImageLoader cname="acimg" num={26} noanimation={true} />
              <h3 className="roomh3">Presidential Suite</h3>
              <img className="offerimg" src={offer} alt="" />
            </div>
            <div onClick={() => navigate("/rooms/deluxe")} className="nonac">
              <ImageLoader cname="acimg" num={27} noanimation={true} />
              <h3 className="roomh3">Deluxe</h3>
              <img className="offerimg1" src={offer} alt="" />
            </div>
          </div>
          <div className="ac-nonac">
            <div onClick={() => navigate("/rooms/villa")} className="ac">
              <ImageLoader cname="acimg" num={28} noanimation={true} />
              <h3 className="roomh3">Villas</h3>
              <img className="offerimg" src={offer} alt="" />
            </div>
            <div onClick={() => navigate("/rooms/studio")} className="nonac">
              <ImageLoader cname="acimg" num={29} noanimation={true} />
              <h3 className="roomh3">Studio</h3>
              <img className="offerimg1" src={offer} alt="" />
            </div>
          </div>
          <br></br>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Room;
