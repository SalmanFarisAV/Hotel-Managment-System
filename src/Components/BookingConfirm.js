import React, { useRef } from "react";
import "./BookingConfirm.css";
import logo from "../Pics/Logo2.png";
// import logo1 from "../Pics/Logo1.png";
import Button from "@mui/material/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// import { toPng } from "html-to-image";
function BookingConfirm({
  Openwindow,
  closewindow,
  roomtype,
  bedtype,
  numroom,
  numdays,
  price,
}) {
  const bookingWindowRef = useRef();
  const downloadPdf = () => {
    html2canvas(bookingWindowRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };
  if (!Openwindow) return null;
  return (
    <div className="bookingwindow">
      <div className="bookedbox" ref={bookingWindowRef}>
        <button className="bookedclose" onClick={closewindow}>
          Close
        </button>
        <img className="bookingimg" src={logo} alt="" />
        <label className="bookinglabel">Booking Successful!</label>
        <div className="booking2">
          <label className="blab">RoomType : {roomtype}</label>
          <label className="blab">BedType : {bedtype}</label>
          <label className="blab">Total Room : {numroom}</label>
          <label className="blab">Total Days : {numdays}</label>
          <label className="blab">Total Price : {price}</label>
        </div>
        <br></br>
        <Button onClick={downloadPdf} className="bookdown" variant="contained">
          Download
        </Button>
      </div>
    </div>
  );
}

export default BookingConfirm;
