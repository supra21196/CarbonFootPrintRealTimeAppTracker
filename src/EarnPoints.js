import React from "react";
import { Container, Typography } from "@mui/material";

export default function EarnPoints() {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", padding: "40px" }}>
      <Typography variant="h4">🎯 Earn EcoPoints</Typography>
      <Typography variant="body1" style={{ marginTop: "10px" }}>
        Track your eco-friendly actions and earn rewards!
      </Typography>
    </Container>
  );
}
