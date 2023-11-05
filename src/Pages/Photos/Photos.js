import React from "react";
import "./Photos.css";
import Topbar from "../../Components/Topbar";
import Hotel from "../../Components/Hotel";

import Footer from "../../Components/Footer";
import ImageLoader from "../../Components/ImageLoader";
function Photos() {
  return (
    <div className="photos">
      <Topbar />
      <div className="homescrollpics">
        <Hotel />
        <div className="photos1">
          <div className="picss">
            <ImageLoader cname="hotelphotos" num={0} />
            <ImageLoader cname="hotelphotos" num={1} />
          </div>

          <div className="picss">
            <ImageLoader cname="hotelphotos" num={2} />
            <ImageLoader cname="hotelphotos" num={3} />
          </div>

          <div className="picss">
            <ImageLoader cname="hotelphotos" num={4} />
            <ImageLoader cname="hotelphotos" num={5} />
          </div>

          <div className="picss">
            <ImageLoader cname="hotelphotos" num={6} />
            <ImageLoader cname="hotelphotos" num={7} />
          </div>

          <div className="picss">
            <ImageLoader cname="hotelphotos" num={8} />
            <ImageLoader cname="hotelphotos" num={9} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Photos;
