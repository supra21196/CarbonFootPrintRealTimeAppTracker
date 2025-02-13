import React from "react";
import { Container, Typography } from "@mui/material";

export default function SyncDevices() {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", padding: "40px" }}>
      <Typography variant="h4">🔌 Sync Smart Devices</Typography>
      <Typography variant="body1" style={{ marginTop: "10px" }}>
        Connect your smart home devices for real-time energy tracking.
      </Typography>
    </Container>
  );
}
