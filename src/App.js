import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Room from "./Pages/Room/Room";
import Dining from "./Pages/Dining/Dining";
import Photos from "./Pages/Photos/Photos";
import Offer from "./Pages/Offer/Offer";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/Admin/Admin";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import AdminHome from "./Pages/Admin/AdminHome";
import Ac from "./Pages/Room/Ac";
import Nonac from "./Pages/Room/Nonac";
import Presid from "./Pages/Room/Presid";
import Delux from "./Pages/Room/Delux";
import Villa from "./Pages/Room/Villa";
import Studio from "./Pages/Room/Studio";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="rooms" element={<Room />} />
        <Route path="rooms/nonac" element={<Nonac />} />
        <Route path="rooms/ac" element={<Ac />} />
        <Route path="rooms/presidential" element={<Presid />} />
        <Route path="rooms/deluxe" element={<Delux />} />
        <Route path="rooms/villa" element={<Villa />} />
        <Route path="rooms/studio" element={<Studio />} />
        <Route path="dining" element={<Dining />} />
        <Route path="photos" element={<Photos />} />
        <Route path="offers" element={<Offer />} />
        <Route path="/" element={<Login />} />
        <Route path="adminlogin" element={<Admin />} />
        <Route path="loginsignup" element={<LoginSignup />} />
        <Route path="admin" element={<AdminHome />} />
      </Routes>
    </div>
  );
}

export default App;
