import React, { useState } from "react";
import {
  Filter,
  Car,
  Bolt,
  Utensils,
  Footprints,
  Bike,
  Plug,
  Leaf,
} from "lucide-react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import BottomNav from "./BottomNav"; // Import Bottom Navigation

// Sample Data for Graph
const emissionsData = [
  { day: "Mon", emissions: 5 },
  { day: "Tue", emissions: 7 },
  { day: "Wed", emissions: 3 },
  { day: "Thu", emissions: 8 },
  { day: "Fri", emissions: 6 },
  { day: "Sat", emissions: 5 },
  { day: "Sun", emissions: 6 },
];

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 16px;
  padding-bottom: 90px; /* Space for BottomNav */
  max-width: 400px;
  margin: auto;
`;

// Styles (Unchanged)
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #6b7280;
  margin: 4px 0 0;
`;

const FilterIcon = styled(Filter)`
  cursor: pointer;
  color: #6b7280;
`;

const ChartCard = styled.div`
  background: white;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 12px;
`;

const EmissionStats = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 12px;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const FilterButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#17A86B" : "#E5E7EB")};
  color: ${(props) => (props.active ? "white" : "#6b7280")};
  transition: 0.3s;
  margin: 0 4px;

  &:hover {
    background-color: #17a86b;
    color: white;
  }
`;

const ActivityCard = styled.div`
  background: white;
  padding: 12px;
  border-radius: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActivityDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ActivityText = styled.div`
  text-align: left;
`;

const ActivityTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const ActivitySubtitle = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin: 2px 0 0;
`;

const EmissionValue = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

/* Component */
export default function ActivitiesPage({ navigate }) {
  const [activeFilter, setActiveFilter] = useState("transport");

  /* Activity Cards Based on Active Filter */
  const renderActivityCards = () => {
    if (activeFilter === "transport") {
      return (
        <>
          <ActivityCard>
            <ActivityDetails>
              <Car size={32} color="#17A86B" />
              <ActivityText>
                <ActivityTitle>Car Trip</ActivityTitle>
                <ActivitySubtitle>12km distance</ActivitySubtitle>
              </ActivityText>
            </ActivityDetails>
            <EmissionValue>2.4 kg CO₂</EmissionValue>
          </ActivityCard>

          <ActivityCard>
            <ActivityDetails>
              <Bike size={32} color="#17A86B" />
              <ActivityText>
                <ActivityTitle>Cycling</ActivityTitle>
                <ActivitySubtitle>8km distance</ActivitySubtitle>
              </ActivityText>
            </ActivityDetails>
            <EmissionValue>0.0 kg CO₂</EmissionValue>
          </ActivityCard>

          <ActivityCard>
            <ActivityDetails>
              <Footprints size={32} color="#17A86B" />
              <ActivityText>
                <ActivityTitle>Walking</ActivityTitle>
                <ActivitySubtitle>3km</ActivitySubtitle>
              </ActivityText>
            </ActivityDetails>
            <EmissionValue>0.8 kg CO₂</EmissionValue>
          </ActivityCard>
        </>
      );
    } else if (activeFilter === "energy") {
      return (
        <ActivityCard>
          <ActivityDetails>
            <Plug size={32} color="#17A86B" />
            <ActivityText>
              <ActivityTitle>Electricity Usage</ActivityTitle>
              <ActivitySubtitle>5 hours of AC</ActivitySubtitle>
            </ActivityText>
          </ActivityDetails>
          <EmissionValue>4.2 kg CO₂</EmissionValue>
        </ActivityCard>
      );
    } else if (activeFilter === "food") {
      return (
        <ActivityCard>
          <ActivityDetails>
            <Leaf size={32} color="#17A86B" />
            <ActivityText>
              <ActivityTitle>Food Consumption</ActivityTitle>
              <ActivitySubtitle>Vegetarian Meal</ActivitySubtitle>
            </ActivityText>
          </ActivityDetails>
          <EmissionValue>1.5 kg CO₂</EmissionValue>
        </ActivityCard>
      );
    }
  };

  return (
    <PageWrapper>
      {/* Header */}
      <HeaderContainer>
        <div>
          <Title>Activities</Title>
          <Subtitle>Track your environmental impact</Subtitle>
        </div>
        <FilterIcon size={24} />
      </HeaderContainer>

      {/* 🔹 CO2 Emission Overview (Always Visible) */}
      <ChartCard>
        <EmissionStats>
          <span>CO₂ Emissions Overview</span>
          <span style={{ color: "#17A86B" }}>-12% vs last month</span>
        </EmissionStats>

        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={emissionsData}>
            <XAxis dataKey="day" />
            <Bar dataKey="emissions" fill="#17A86B" barRadius={8} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 🔹 Category Filters (Bottom Three Tabs) */}
      <FiltersContainer>
        <FilterButton
          active={activeFilter === "transport"}
          onClick={() => setActiveFilter("transport")}
        >
          <Car size={16} /> Transport
        </FilterButton>
        <FilterButton
          active={activeFilter === "energy"}
          onClick={() => setActiveFilter("energy")}
        >
          <Bolt size={16} /> Energy
        </FilterButton>
        <FilterButton
          active={activeFilter === "food"}
          onClick={() => setActiveFilter("food")}
        >
          <Utensils size={16} /> Food
        </FilterButton>
      </FiltersContainer>

      {/* 🔹 Activity List Based on Filter */}
      {renderActivityCards()}

      {/* 🔹 Bottom Navigation */}
      <BottomNav activePage="activities" navigate={navigate} />
    </PageWrapper>
  );
}
