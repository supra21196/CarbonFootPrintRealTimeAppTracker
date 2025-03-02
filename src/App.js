import "./styles.css";
import React, { useState } from "react";
import { Container } from "@mui/material";
import SplashScreen from "./SplashScreen";
import Homepage from "./Homepage";
import ActivitiesPage from "./ActivitiesPage";
import BottomNav from "./BottomNav"; // Import Bottom Navigation

export default function App() {
  const [currentPage, setCurrentPage] = useState("splash"); // Start with SplashScreen

  return (
    <Container
      style={{
        textAlign: "center",
        padding: "20px",
        maxWidth: "375px",
        margin: "0 auto",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        position: "relative",
        paddingBottom: "90px", // Space for BottomNav
      }}
    >
      {currentPage === "splash" ? (
        <SplashScreen navigate={setCurrentPage} />
      ) : (
        <>
          {currentPage === "home" && <Homepage navigate={setCurrentPage} />}
          {currentPage === "activities" && (
            <ActivitiesPage navigate={setCurrentPage} />
          )}
          <BottomNav activePage={currentPage} navigate={setCurrentPage} />
        </>
      )}
    </Container>
  );
}
