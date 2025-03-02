import React from "react";
import { Home, BarChart, Plus, Users, User } from "lucide-react"; // Icons
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px; /* Matches content width */
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 1000;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: ${(props) => (props.active ? "#17A86B" : "#6b7280")};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #17a86b;
  }
`;

const FloatingButton = styled.div`
  background: #17a86b;
  color: white;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: -28px; /* Moves it halfway above the navbar */
  cursor: pointer;
`;

export default function BottomNav({ activePage, navigate }) {
  return (
    <NavBar>
      <NavItem active={activePage === "home"} onClick={() => navigate("home")}>
        <Home size={24} />
        Home
      </NavItem>

      <NavItem
        active={activePage === "activities"}
        onClick={() => navigate("activities")}
      >
        <BarChart size={24} />
        Activities
      </NavItem>

      <FloatingButton onClick={() => navigate("track")}>
        <Plus size={28} />
      </FloatingButton>

      <NavItem
        active={activePage === "community"}
        onClick={() => navigate("community")}
      >
        <Users size={24} />
        Community
      </NavItem>

      <NavItem
        active={activePage === "profile"}
        onClick={() => navigate("profile")}
      >
        <User size={24} />
        Profile
      </NavItem>
    </NavBar>
  );
}
