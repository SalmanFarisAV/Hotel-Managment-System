import React, { useState, useEffect } from "react";
import Topbar from "../../Components/Topbar";
import Hotel from "../../Components/Hotel";
import Footer from "../../Components/Footer";
import "./Ac.css";
import { database, ref, onValue, update } from "../../Components/Firebase";
import BookingConfirm from "../../Components/BookingConfirm";

function Ac() {
  const [a1price, setA1price] = useState(0);
  const [a2price, setA2price] = useState(0);
  const [a3price, setA3price] = useState(0);
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

  const retrievePrice = () => {
    onValue(ref(database, "Price/acRoom"), (snapshot) => {
      const value = snapshot.val();
      setA1price(value.A1);
      setA2price(value.A2);
      setA3price(value.A3);
    });
  };

  const roomPrices = {
    single: a1price,
    double: a2price,
    quad: a3price,
  };

  useEffect(() => {
    retrievePrice();
    const acRoomRef = ref(database, "Rooms/acRoom");

    onValue(acRoomRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setAvailableRooms({
          single: data.A1,
          double: data.A2,
          quad: data.A3,
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
      const acRoomRef = ref(database, "Rooms/acRoom");
      update(acRoomRef, {
        A1: updatedAvailableRooms.single,
        A2: updatedAvailableRooms.double,
        A3: updatedAvailableRooms.quad,
      });
      setAvailableRooms(updatedAvailableRooms);
      const totalPrice = calculateTotalPrice();
      setStoredTotalPrice(totalPrice);
      setNumRooms1(numRooms);
      setNumDays1(numDays);
      setNumRooms(1);
      setNumDays(1);
      openBookingWindow();
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
            <h1>AC ROOM</h1>
            <div className="booking-form">
              <p className="avail">
                Available Rooms : {availableRooms[roomType]}
              </p>
              <label className="lab">Select Room Type:</label>
              <select
                id="room-type"
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="quad">Quad Room</option>
              </select>
              <label className="lab">Number of Rooms:</label>
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
                Total Price: <span>{calculateTotalPrice()} rs</span>
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
          roomtype="AC"
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

export default Ac;
