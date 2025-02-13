import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Paper,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function HomePage({ navigate }) {
  const [showDetails, setShowDetails] = useState(false);

  // Simulated weekly CO2 emission data
  const thisWeekEmissions = {
    Monday: 2.1,
    Tuesday: 3.2,
    Wednesday: 1.8,
    Thursday: 2.5,
    Friday: 3.9,
    Saturday: 2.3,
    Sunday: 1.5,
  };

  const lastWeekEmissions = {
    Monday: 2.5,
    Tuesday: 2.8,
    Wednesday: 1.9,
    Thursday: 2.2,
    Friday: 4.0,
    Saturday: 2.1,
    Sunday: 1.8,
  };

  // Calculate total emissions for this week and last week
  const totalThisWeek = Object.values(thisWeekEmissions).reduce(
    (a, b) => a + b,
    0
  );
  const totalLastWeek = Object.values(lastWeekEmissions).reduce(
    (a, b) => a + b,
    0
  );

  // Calculate the increase or decrease in emissions
  const difference = (totalThisWeek - totalLastWeek).toFixed(2);
  const trend = difference >= 0 ? "Increased" : "Decreased";

  return (
    <Container maxWidth="md" style={{ textAlign: "center", padding: "40px" }}>
      <Paper
        elevation={3}
        style={{ padding: "30px", borderRadius: "12px", background: "#f5f5f5" }}
      >
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", color: "#2c3e50" }}
        >
          Welcome to CO₂ Tracker
        </Typography>
        <Typography variant="h6" style={{ marginTop: "10px", color: "#555" }}>
          Track your carbon footprint and participate in eco-friendly
          challenges.
        </Typography>

        {/* Dashboard Section */}
        <Box marginTop="30px">
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", color: "#388e3c" }}
          >
            🌍 Total CO₂ Emission This Week: {totalThisWeek.toFixed(2)} kg
          </Typography>
          <Typography
            variant="h6"
            style={{ color: trend === "Increased" ? "#d32f2f" : "#388e3c" }}
          >
            {trend} by {Math.abs(difference)} kg from last week
          </Typography>

          {/* Toggle Breakdown */}
          <IconButton
            onClick={() => setShowDetails(!showDetails)}
            style={{ marginTop: "10px" }}
          >
            {showDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>

          <Collapse in={showDetails}>
            <List>
              {Object.keys(thisWeekEmissions).map((day) => (
                <ListItem key={day}>
                  <ListItemText
                    primary={day}
                    secondary={`CO₂ Emission: ${thisWeekEmissions[day]} kg`}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>

        {/* Start Tracking Button */}
        <Box display="flex" justifyContent="center" marginTop="20px">
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{
              padding: "12px 24px",
              fontSize: "18px",
              borderRadius: "8px",
            }}
            onClick={() => navigate("tracker")}
          >
            Start Tracking
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
