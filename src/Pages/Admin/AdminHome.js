import React, { useState, useEffect } from "react";
import "./AdminHome.css";
import Button from "@mui/material/Button";
import { database, ref, set, onValue } from "../../Components/Firebase";
function AdminHome() {
  const [Ac1, setAc1] = useState(0);
  const [Ac2, setAc2] = useState(0);
  const [Ac3, setAc3] = useState(0);
  const [NonAc1, setNonAc1] = useState(0);
  const [NonAc2, setNonAc2] = useState(0);
  const [NonAc3, setNonAc3] = useState(0);
  const [Presid1, setPresid1] = useState(0);
  const [Presid2, setPresid2] = useState(0);
  const [Presid3, setPresid3] = useState(0);
  const [Delux1, setDelux1] = useState(0);
  const [Delux2, setDelux2] = useState(0);
  const [Delux3, setDelux3] = useState(0);
  const [Villa1, setVilla1] = useState(0);

  const [Studio1, setStudio1] = useState(0);
  const [Studio2, setStudio2] = useState(0);
  const [Studio3, setStudio3] = useState(0);

  const [Ac1p, setAc1p] = useState(0);
  const [Ac2p, setAc2p] = useState(0);
  const [Ac3p, setAc3p] = useState(0);
  const [NonAc1p, setNonAc1p] = useState(0);
  const [NonAc2p, setNonAc2p] = useState(0);
  const [NonAc3p, setNonAc3p] = useState(0);
  const [Presid1p, setPresid1p] = useState(0);
  const [Presid2p, setPresid2p] = useState(0);
  const [Presid3p, setPresid3p] = useState(0);
  const [Delux1p, setDelux1p] = useState(0);
  const [Delux2p, setDelux2p] = useState(0);
  const [Delux3p, setDelux3p] = useState(0);
  const [Villa1p, setVilla1p] = useState(0);

  const [Studio1p, setStudio1p] = useState(0);
  const [Studio2p, setStudio2p] = useState(0);
  const [Studio3p, setStudio3p] = useState(0);

  const updatePrice = () => {
    set(ref(database, "Price/acRoom/A1"), Ac1p);
    set(ref(database, "Price/acRoom/A2"), Ac2p);
    set(ref(database, "Price/acRoom/A3"), Ac3p);

    set(ref(database, "Price/nonacRoom/A1"), NonAc1p);
    set(ref(database, "Price/nonacRoom/A2"), NonAc2p);
    set(ref(database, "Price/nonacRoom/A3"), NonAc3p);

    set(ref(database, "Price/presidRoom/A1"), Presid1p);
    set(ref(database, "Price/presidRoom/A2"), Presid2p);
    set(ref(database, "Price/presidRoom/A3"), Presid3p);

    set(ref(database, "Price/deluxRoom/A1"), Delux1p);
    set(ref(database, "Price/deluxRoom/A2"), Delux2p);
    set(ref(database, "Price/deluxRoom/A3"), Delux3p);

    set(ref(database, "Price/villaRoom/A1"), Villa1p);

    set(ref(database, "Price/studioRoom/A1"), Studio1p);
    set(ref(database, "Price/studioRoom/A2"), Studio2p);
    set(ref(database, "Price/studioRoom/A3"), Studio3p);

    alert("Price Updated!");
  };

  const updateRoom = () => {
    set(ref(database, "Rooms/acRoom/A1"), Ac1);
    set(ref(database, "Rooms/acRoom/A2"), Ac2);
    set(ref(database, "Rooms/acRoom/A3"), Ac3);

    set(ref(database, "Rooms/nonacRoom/A1"), NonAc1);
    set(ref(database, "Rooms/nonacRoom/A2"), NonAc2);
    set(ref(database, "Rooms/nonacRoom/A3"), NonAc3);

    set(ref(database, "Rooms/presidRoom/A1"), Presid1);
    set(ref(database, "Rooms/presidRoom/A2"), Presid2);
    set(ref(database, "Rooms/presidRoom/A3"), Presid3);

    set(ref(database, "Rooms/deluxRoom/A1"), Delux1);
    set(ref(database, "Rooms/deluxRoom/A2"), Delux2);
    set(ref(database, "Rooms/deluxRoom/A3"), Delux3);

    set(ref(database, "Rooms/villaRoom/A1"), Villa1);

    set(ref(database, "Rooms/studioRoom/A1"), Studio1);
    set(ref(database, "Rooms/studioRoom/A2"), Studio2);
    set(ref(database, "Rooms/studioRoom/A3"), Studio3);

    alert("Rooms Updated!");
  };

  const retrieveRoom = () => {
    onValue(ref(database, "Rooms/acRoom"), (snapshot) => {
      const roomData = snapshot.val();
      if (roomData) {
        setAc1(roomData.A1);
        setAc2(roomData.A2);
        setAc3(roomData.A3);
      }
    });
    onValue(ref(database, "Rooms/nonacRoom"), (snapshot) => {
      const roomData = snapshot.val();
      if (roomData) {
        setNonAc1(roomData.A1);
        setNonAc2(roomData.A2);
        setNonAc3(roomData.A3);
      }
    });
    onValue(ref(database, "Rooms/presidRoom"), (snapshot) => {
      const roomData = snapshot.val();
      if (roomData) {
        setPresid1(roomData.A1);
        setPresid2(roomData.A2);
        setPresid3(roomData.A3);
      }
    });

    onValue(ref(database, "Rooms/deluxRoom"), (snapshot) => {
      const roomData = snapshot.val();
      if (roomData) {
        setDelux1(roomData.A1);
        setDelux2(roomData.A2);
        setDelux3(roomData.A3);
      }
    });
    onValue(ref(database, "Rooms/villaRoom"), (snapshot) => {
      const roomData = snapshot.val();
      if (roomData) {
        setVilla1(roomData.A1);
      }
    });
    onValue(ref(database, "Rooms/studioRoom"), (snapshot) => {
      const roomData = snapshot.val();
      if (roomData) {
        setStudio1(roomData.A1);
        setStudio2(roomData.A2);
        setStudio3(roomData.A3);
      }
    });
  };

  const retrievePrice = () => {
    onValue(ref(database, "Price/acRoom"), (snapshot) => {
      const roomData = snapshot.val();
      if (roomData) {
        setAc1p(roomData.A1);
        setAc2p(roomData.A2);
        setAc3p(roomData.A3);
      }
    });
    onValue(ref(database, "Price/nonacRoom"), (snapshot) => {
      const roomData = snapshot.val();
      if (roomData) {
        setNonAc1p(roomData.A1);
        setNonAc2p(roomData.A2);
        setNonAc3p(roomData.A3);
      }
    });
    onValue(ref(database, "Price/presidRoom"), (snapshot) => {
      const roomData = snapshot.val();
      if (roomData) {
        setPresid1p(roomData.A1);
        setPresid2p(roomData.A2);
        setPresid3p(roomData.A3);
      }
    });
    onValue(ref(database, "Price/deluxRoom"), (snapshot) => {
      const roomData = snapshot.val();
      if (roomData) {
        setDelux1p(roomData.A1);
        setDelux2p(roomData.A2);
        setDelux3p(roomData.A3);
      }
    });
    onValue(ref(database, "Price/villaRoom"), (snapshot) => {
      const roomData = snapshot.val();
      if (roomData) {
        setVilla1p(roomData.A1);
      }
    });
    onValue(ref(database, "Price/studioRoom"), (snapshot) => {
      const roomData = snapshot.val();
      if (roomData) {
        setStudio1p(roomData.A1);
        setStudio2p(roomData.A2);
        setStudio3p(roomData.A3);
      }
    });
  };

  useEffect(() => {
    retrieveRoom();
    retrievePrice();
  }, []);

  return (
    <div className="adminhome">
      <h2 class="animate-charcter">ADMIN PANEL</h2>
      <div className="ad1">
        <div className="price">
          <h3 className="adhead">Add Room</h3>
          <div className="price1">
            <div className="price2">
              <h4 className="adminh4">AC</h4>
              <div className="price3">
                <label className="pp1">Single</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Ac1}
                  onChange={(e) => setAc1(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp2">Double</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Ac2}
                  onChange={(e) => setAc2(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp3">Quad</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Ac3}
                  onChange={(e) => setAc3(e.target.value)}
                />
              </div>
            </div>

            <div className="price2">
              <h4 className="adminh4">Non-AC</h4>
              <div className="price3">
                <label className="pp1">Single</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={NonAc1}
                  onChange={(e) => setNonAc1(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp2">Double</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={NonAc2}
                  onChange={(e) => setNonAc2(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp3">Quad</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={NonAc3}
                  onChange={(e) => setNonAc3(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="price1">
            <div className="price2">
              <h4 className="adminh4">Presidential</h4>
              <div className="price3">
                <label className="pp1">Single</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Presid1}
                  onChange={(e) => setPresid1(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp2">Double</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Presid2}
                  onChange={(e) => setPresid2(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp3">Quad</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Presid3}
                  onChange={(e) => setPresid3(e.target.value)}
                />
              </div>
            </div>

            <div className="price2">
              <h4 className="adminh4">Delux</h4>
              <div className="price3">
                <label className="pp1">Single</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Delux1}
                  onChange={(e) => setDelux1(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp2">Double</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Delux2}
                  onChange={(e) => setDelux2(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp3">Quad</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Delux3}
                  onChange={(e) => setDelux3(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="price1">
            <div className="price2">
              <h4 className="adminh4">Villa</h4>
              <div className="price3">
                <label className="pp1">Single</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Villa1}
                  onChange={(e) => setVilla1(e.target.value)}
                />
              </div>
            </div>

            <div className="price2">
              <h4 className="adminh4">Studio</h4>
              <div className="price3">
                <label className="pp1">Single</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Studio1}
                  onChange={(e) => setStudio1(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp2">Double</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Studio2}
                  onChange={(e) => setStudio2(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp3">Quad</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Studio3}
                  onChange={(e) => setStudio3(e.target.value)}
                />
              </div>
            </div>
          </div>
          <Button onClick={updateRoom} className="adprsbtn" variant="contained">
            Add
          </Button>
        </div>

        <div className="price">
          <h3 className="adhead">Change Price</h3>
          <div className="price1">
            <div className="price2">
              <h4 className="adminh4">AC</h4>
              <div className="price3">
                <label className="pp1">Single</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Ac1p}
                  onChange={(e) => setAc1p(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp2">Double</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Ac2p}
                  onChange={(e) => setAc2p(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp3">Quad</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Ac3p}
                  onChange={(e) => setAc3p(e.target.value)}
                />
              </div>
            </div>

            <div className="price2">
              <h4 className="adminh4">Non-AC</h4>
              <div className="price3">
                <label className="pp1">Single</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={NonAc1p}
                  onChange={(e) => setNonAc1p(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp2">Double</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={NonAc2p}
                  onChange={(e) => setNonAc2p(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp3">Quad</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={NonAc3p}
                  onChange={(e) => setNonAc3p(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="price1">
            <div className="price2">
              <h4 className="adminh4">Presidential</h4>
              <div className="price3">
                <label className="pp1">Single</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Presid1p}
                  onChange={(e) => setPresid1p(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp2">Double</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Presid2p}
                  onChange={(e) => setPresid2p(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp3">Quad</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Presid3p}
                  onChange={(e) => setPresid3p(e.target.value)}
                />
              </div>
            </div>

            <div className="price2">
              <h4 className="adminh4">Delux</h4>
              <div className="price3">
                <label className="pp1">Single</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Delux1p}
                  onChange={(e) => setDelux1p(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp2">Double</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Delux2p}
                  onChange={(e) => setDelux2p(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp3">Quad</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Delux3p}
                  onChange={(e) => setDelux3p(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="price1">
            <div className="price2">
              <h4 className="adminh4">Villa</h4>
              <div className="price3">
                <label className="pp1">Single</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Villa1p}
                  onChange={(e) => setVilla1p(e.target.value)}
                />
              </div>
            </div>

            <div className="price2">
              <h4 className="adminh4">Studio</h4>
              <div className="price3">
                <label className="pp1">Single</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Studio1p}
                  onChange={(e) => setStudio1p(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp2">Double</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Studio2p}
                  onChange={(e) => setStudio2p(e.target.value)}
                />
              </div>
              <div className="price3">
                <label className="pp3">Quad</label>
                <input
                  type="number"
                  min="0"
                  className="priceinpt"
                  value={Studio3p}
                  onChange={(e) => setStudio3p(e.target.value)}
                />
              </div>
            </div>
          </div>
          <Button
            onClick={updatePrice}
            className="adprsbtn"
            variant="contained"
          >
            Change
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
