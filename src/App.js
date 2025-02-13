import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import HomePage from "./Homepage";
import CO2Tracker from "./CO2Tracker";
import SyncDevices from "./SyncDevices";
import EarnPoints from "./EarnPoints";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Container
      style={{
        textAlign: "center",
        padding: "20px",
        maxWidth: "375px",
        margin: "0 auto",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      {currentPage === "home" ? (
        <HomePage navigate={setCurrentPage} />
      ) : (
        <CO2Tracker navigate={setCurrentPage} />
      )}
    </Container>
  );
}
