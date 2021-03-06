import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
`;

export default function App() {
  return (
    <Container>
      <Title>Open up App.js to start working on your app!</Title>
    </Container>
  );
}
