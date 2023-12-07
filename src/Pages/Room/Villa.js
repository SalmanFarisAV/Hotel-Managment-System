import React, { useState, useEffect } from "react";
import Topbar from "../../Components/Topbar";
import Hotel from "../../Components/Hotel";
import Footer from "../../Components/Footer";
import "./Ac.css";
import { database, ref, onValue, update } from "../../Components/Firebase";
import BookingConfirm from "../../Components/BookingConfirm";
function Villa() {
  const [a1price, setA1price] = useState(0);

  const [roomType, setRoomType] = useState("single");
  const [numRooms, setNumRooms] = useState(1);
  const [numDays, setNumDays] = useState(1);
  const [availableRooms, setAvailableRooms] = useState({
    single: 0,
    double: 0,
    quad: 0,
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBookingWindow = () => {
    setIsBookingOpen(true);
  };
  const closeBookingWindow = () => {
    setIsBookingOpen(false);
  };
  const [numRooms1, setNumRooms1] = useState(1);
  const [numDays1, setNumDays1] = useState(1);
  const [storedTotalPrice, setStoredTotalPrice] = useState(0);
  var aa = 1;
  if (aa === 0) {
    setRoomType();
  }

  const retrievePrice = () => {
    onValue(ref(database, "Price/villaRoom"), (snapshot) => {
      const value = snapshot.val();
      setA1price(value.A1);
    });
  };

  const roomPrices = {
    single: a1price,
  };

  useEffect(() => {
    retrievePrice();
    const acRoomRef = ref(database, "Rooms/villaRoom");

    onValue(acRoomRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setAvailableRooms({
          single: data.A1,
        });
      }
    });
  }, []);

  const calculateTotalPrice = () => {
    const totalPrice = roomPrices[roomType] * numRooms * numDays;
    return totalPrice;
  };

  const bookRoom = () => {
    const updatedAvailableRooms = { ...availableRooms };
    updatedAvailableRooms[roomType] -= numRooms;
    if (updatedAvailableRooms[roomType] >= 0) {
      const acRoomRef = ref(database, "Rooms/villaRoom");
      update(acRoomRef, {
        A1: updatedAvailableRooms.single,
      });
      setAvailableRooms(updatedAvailableRooms);
      const totalPrice = calculateTotalPrice();
      setStoredTotalPrice(totalPrice);
      setNumRooms(1);
      setNumDays(1);
    } else {
      alert("Not enough available rooms for the selected type.");
      setNumRooms(1);
      setNumDays(1);
    }
  };
  return (
    <div className="a1">
      <Topbar />
      <div className="homescroll">
        <Hotel />
        <div className="aa1">
          <div className="bookingbox">
            <h1>Villas</h1>
            <div className="booking-form">
              <p className="avail">
                Available Villas : {availableRooms[roomType]}
              </p>
              <br></br>
              <label className="lab">Number of Villas:</label>
              <input
                type="number"
                id="num-rooms"
                min="1"
                value={numRooms}
                onChange={(e) => setNumRooms(e.target.value)}
              />
              <label className="lab">Number of Days:</label>
              <input
                type="number"
                id="num-days"
                min="1"
                value={numDays}
                onChange={(e) => setNumDays(e.target.value)}
              />
              <p className="pricetag">
                Offer Price: <span>{calculateTotalPrice()} rs</span>
              </p>
              <button className="bb" id="book-button" onClick={bookRoom}>
                BOOK
              </button>
            </div>
          </div>
        </div>

        <BookingConfirm
          Openwindow={isBookingOpen}
          closewindow={closeBookingWindow}
          roomtype="Villa"
          bedtype={roomType}
          numroom={numRooms1}
          numdays={numDays1}
          price={storedTotalPrice}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Villa;
