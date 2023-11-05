import React from "react";
import "./Hotel.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
function Hotel() {
  const navigate = useNavigate();
  return (
    <div className="hotel">
      <div className="comp1">
        <img className="logo" src="https://i.ibb.co/xDrzBtD/Logo1.png" alt="" />
        <div className="hotel1">
          <h2>AquaVista Paradise</h2>
          <div className="hotel2">
            <LocationOnIcon />
            <h4> Bolgatty Island, Kochi, Kerala, India, 682504</h4>
          </div>
          <div className="hotel3">
            <PhoneIcon />
            <h4>+91 79944 59893</h4>
          </div>
          <div className="hotel4">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
            <h4>+5K Reviews</h4>
          </div>
        </div>
        <Button
          onClick={() => navigate("/rooms")}
          className="book"
          variant="contained"
          size="large"
        >
          BOOK NOW
        </Button>
      </div>
      <Stack spacing={5} direction="row" className="comp2">
        <Button
          onClick={() => navigate("/home")}
          className="box"
          variant="text"
        >
          HOTEL
        </Button>
        <div>|</div>
        <Button
          onClick={() => navigate("/rooms")}
          className="box"
          variant="text"
        >
          ROOMS
        </Button>
        <div>|</div>
        <Button
          onClick={() => navigate("/dining")}
          className="box"
          variant="text"
        >
          DINING
        </Button>
        <div>|</div>
        <Button
          onClick={() => navigate("/photos")}
          className="box"
          variant="text"
        >
          PHOTOS
        </Button>
        <div>|</div>
        <Button
          onClick={() => navigate("/offers")}
          className="box"
          variant="text"
        >
          OFFER
        </Button>
      </Stack>
    </div>
  );
}

export default Hotel;
