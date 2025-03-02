import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { CircleCheck, Menu } from "lucide-react";
import styled from "styled-components";

const data = [
  { name: "Electricity Usage", value: 30, color: "#F87171" },
  { name: "Solar Energy", value: 40, color: "#4ADE80" },
  { name: "Transportation", value: 15, color: "#FACC15" },
  { name: "Home Appliances", value: 15, color: "#60A5FA" },
];

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 16px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
`;

const MenuIcon = styled(Menu)`
  cursor: pointer;
  color: #1a1a1a;
`;

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: #ffffff;
  color: #1a1a1a;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  min-height: 80vh; /* Adjust height of the container */
  display: flex;
  flex-direction: column;
`;

const ChartContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Subtitle = styled.p`
  color: #6b7280;
  font-size: 1rem;
`;

const ChartTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
  margin-top: 24px;
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatusLabel = styled.p`
  font-weight: 600;
  font-size: 1rem;
`;

const StatusText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const GoalContainer = styled.div`
  text-align: right;
`;

const GoalText = styled.p`
  font-weight: 600;
`;

const GoalPercentage = styled.span`
  color: #17a86b;
`;

const ProgressBar = styled.div`
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 999px;
  height: 8px;
  margin-top: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  background-color: #17a86b;
  height: 100%;
  border-radius: 999px;
`;

export default function EcoTrackDashboard() {
  return (
    <PageWrapper>
      {/* Header with Hi, Sarah and Burger Menu */}
      <HeaderContainer>
        <span>Hi, Sarah 👋</span>
        <MenuIcon size={28} />
      </HeaderContainer>

      {/* White Container */}
      <Container>
        <Subtitle>Welcome to EcoTrack! 🌍</Subtitle>
        <ChartTitle>CO₂ Footprint Breakdown</ChartTitle>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <StatusContainer>
          <StatusItem>
            <CircleCheck color="#17A86B" />
            <div>
              <StatusLabel>Status</StatusLabel>
              <StatusText>Currently Tracking</StatusText>
            </div>
          </StatusItem>

          <GoalContainer>
            <GoalText>
              Weekly Goal <GoalPercentage>78%</GoalPercentage>
            </GoalText>
            <ProgressBar>
              <ProgressFill style={{ width: "78%" }} />
            </ProgressBar>
          </GoalContainer>
        </StatusContainer>
      </Container>
    </PageWrapper>
  );
}
