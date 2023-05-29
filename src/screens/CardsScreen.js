import { View, TouchableOpacity } from "react-native";
import React from "react";

import Text from "../components/Text";
import styled from "styled-components";

export default function CardsScreen() {
  const myCards = [
    {
      id: "1",
      color: "#bfeaf5",
      number: "9012",
      exp: "02/24",
      logo: require("../../assets/visa.png"),
    },
  ];

  const renderCard = ({ item }) => {
    return (
      <CardContainer>
        <Card>
          <CardLogoContainer>
            <CardLogo source={item.logo} resizeMode="contain" />
          </CardLogoContainer>
          <CardDetails>
            <CardTitle>
              <Text heavy>{item.number}</Text>
            </CardTitle>
            <Text bold color="#727479" margin="5px 0 0 0">
              {item.exp}
            </Text>
          </CardDetails>
        </Card>
      </CardContainer>
    );
  };

  const handleAddCard = () => {
    // Handle the logic for adding a card here
  };

  return (
    <Container>
      <Text center large heavy>
        My Solana Wallet
      </Text>

      <Cards data={myCards} renderItem={renderCard} />

      <TouchableOpacity onPress={handleAddCard} style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <StatusBar barStyle="light-content" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #1e1e1e;
  padding: 54px 0 0 0;
`;

const Cards = styled.FlatList``;

const StatusBar = styled.StatusBar``;

const CardContainer = styled.View`
  align-items: center;
  margin-top: 16px;
`;

const Card = styled.View`
  background-color: #bfeaf5;
  padding: 20px 25px;
  border-radius: 12px;
  width: 335px;
  height: 200px;
  justify-content: space-between;
`;

const CardLogoContainer = styled.View`
  align-items: flex-end;
`;

const CardLogo = styled.Image`
  width: 40px;
  height: 40px;
`;

const CardDetails = styled.View``;

const CardTitle = styled.View``;

const styles = {
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#5196f4",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  fabText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
};
