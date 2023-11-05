import React from "react";
import Avatar from "@mui/material/Avatar";
import prof from "../Pics/prof.jpg";
import "./Topbar.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
function Topbar() {
  const navigate = useNavigate();
  return (
    <div className="top">
      <h3>Dive into Luxury</h3>

      <Stack className="topsign" spacing={2} direction="row">
        <Avatar className="topavatar" src={prof} />
        <Button
          onClick={() => navigate("/")}
          className="topbutton"
          size="small"
          variant="contained"
        >
          SignIn or Join
        </Button>
      </Stack>
    </div>
  );
}

export default Topbar;
