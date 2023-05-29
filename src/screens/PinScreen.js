import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Text from "../components/Text";
import { Fontisto } from "@expo/vector-icons";
import NumberPad from "../components/NumberPad";

export default function PinScreen({ navigation }) {
  const [pinCount, setPinCount] = useState(0);
  const totalPins = 6;

  useEffect(() => {
    if (pinCount === totalPins) {
      navigation.navigate("Tabs");
    }
  }
    , [pinCount]);

  const renderPins = () => {
    const pins = [];
    for (let x = 1; x <= totalPins; x++) {
      pins.push(
        x <= pinCount ? (
          <PinContainer key={x}>
            <Pin />
          </PinContainer>
        ) : (
          <PinContainer key={x} />
        )
      );
    }
    return pins;
  };

  const pressKey = (_, index) => {
    setPinCount((prev) => {
      if (index === 10) {
        return prev - 1;
      }
      return prev >= totalPins ? prev : prev + 1;
    });
  };

  return (
    <Container>
      <Text center heavy title color="#964ff0" margin="32px 0 0 0">
        Bank App
      </Text>
      <Text center heavy medium margin="32px 0 0 0">
        Enter your PIN code.
      </Text>

      <AccessPin>{renderPins()}</AccessPin>

      <Text center bold margin="8pt 0 0 0" color="#9c9c9f">
        Forgot PIN?
      </Text>

      <UseTouch onPress={() => navigation.navigate("Touch")} delayPressIn={0}>
        <Fontisto name="locked" color="#964ffB" size={16} />
        <Text bold margin="0 0 0 8px" color="#964ff0">
          Use touch ID
        </Text>
      </UseTouch>

      <NumberPad onPress={pressKey} />

      <StatusBar barStyle="light-content" />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const AccessPin = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 32px 64px 16px 64px;
`;

const UseTouch = styled.TouchableOpacity`
  margin: 32px 0 64px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StatusBar = styled.StatusBar``;

const PinContainer = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #5196f4;
  align-items: center;
  justify-content: center;
`;

const Pin = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #5196f4;
`;
