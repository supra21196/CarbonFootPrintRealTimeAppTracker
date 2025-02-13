import React, { useState, useEffect } from "react";
import { Button, Container, Typography, Paper, Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { predictAIEmissions } from "./co2Prediction";

export default function CO2Tracker({ navigate }) {
  const [speed, setSpeed] = useState(0);
  const [transportMode, setTransportMode] = useState("Detecting...");
  const [distance, setDistance] = useState(0);
  const [emission, setEmission] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [startCoords, setStartCoords] = useState(null);
  const [co2History, setCo2History] = useState(() => {
    return JSON.parse(localStorage.getItem("co2History")) || {};
  });
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    let watchId;
    if (isTracking) {
      if ("geolocation" in navigator) {
        watchId = navigator.geolocation.watchPosition(
          (position) => {
            if (!startCoords) {
              setStartCoords(position.coords);
            } else {
              const newDistance = calculateDistance(
                startCoords.latitude,
                startCoords.longitude,
                position.coords.latitude,
                position.coords.longitude
              );
              const newSpeed = position.coords.speed * 3.6 || 0;

              setDistance((prev) => prev + newDistance);
              setSpeed(newSpeed);
              setStartCoords(position.coords);

              if (newSpeed < 5) {
                setTransportMode("Walking");
              } else if (newSpeed >= 5 && newSpeed < 20) {
                setTransportMode("Cycling");
              } else if (newSpeed >= 20 && newSpeed < 60) {
                setTransportMode("Public Transport");
              } else {
                setTransportMode("Car");
              }

              calculateCO2Emission(newSpeed, newDistance);
            }
          },
          (error) => console.error("Geolocation error:", error),
          { enableHighAccuracy: true, maximumAge: 5000 }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [isTracking, startCoords]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const calculateCO2Emission = async (speed, traveledDistance) => {
    if (traveledDistance > 0) {
      let emissionValue = await predictAIEmissions(
        transportMode.toLowerCase(),
        traveledDistance
      );
      setEmission(emissionValue.toFixed(2));

      // Store data in localStorage for dashboard
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
      setCo2History((prev) => {
        const updatedHistory = {
          ...prev,
          [today]: (prev[today] || 0) + parseFloat(emissionValue),
        };
        localStorage.setItem("co2History", JSON.stringify(updatedHistory));
        return updatedHistory;
      });
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{ textAlign: "center", padding: isMobile ? "20px" : "40px" }}
    >
      <Paper
        elevation={3}
        style={{ padding: "20px", borderRadius: "12px", background: "#f5f5f5" }}
      >
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", color: "#2c3e50" }}
        >
          CO₂ Tracker
        </Typography>
        <Typography variant="h6" style={{ marginTop: "10px", color: "#555" }}>
          Monitor your carbon footprint in real-time.
        </Typography>

        <Box marginTop="20px">
          <Typography variant="h5">
            🚗 Detecting Mode of Transport: {transportMode}
          </Typography>
        </Box>

        <Box marginTop="20px">
          <Typography variant="h6">
            🚶 Distance Traveled: {distance.toFixed(2)} km
          </Typography>
        </Box>

        <Box marginTop="20px">
          <Typography variant="h6">
            🌍 Your CO₂ Emission:{" "}
            {emission ? `${emission} kg` : "Calculating..."}
          </Typography>
        </Box>

        <Box marginTop="20px">
          <Button
            variant="contained"
            color={isTracking ? "secondary" : "primary"}
            fullWidth
            onClick={() => setIsTracking((prev) => !prev)}
          >
            {isTracking ? "Stop Tracking" : "Start Tracking"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
