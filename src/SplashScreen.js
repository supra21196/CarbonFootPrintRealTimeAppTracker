import React from "react";
import { Leaf } from "lucide-react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  text-align: center;
  padding: 24px;
`;

const Logo = styled(Leaf)`
  color: #17a86b;
  width: 56px;
  height: 56px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #1a1a1a;
`;

const Description = styled.p`
  color: #6b7280;
  margin-top: 8px;
  font-size: 18px;
  max-width: 320px;
`;

const Button = styled.button`
  margin-top: 32px;
  background-color: #17a86b;
  color: white;
  padding: 12px 40px;
  border-radius: 999px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #14945e;
  }
`;

const LoginText = styled.p`
  margin-top: 16px;
  color: #6b7280;
  font-size: 16px;
`;

const LoginLink = styled.a`
  color: #17a86b;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function SplashScreen({ navigate }) {
  return (
    <Container>
      <Logo />
      <Title>Welcome to EcoTrack!</Title>
      <Description>
        Track your carbon footprint effortlessly and in real-time.
      </Description>
      <Button onClick={() => navigate("home")}>Get Started</Button>
      <LoginText>
        Already have an account? <LoginLink href="#">Log In</LoginLink>
      </LoginText>
    </Container>
  );
}
