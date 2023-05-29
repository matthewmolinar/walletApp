import { View } from "react-native";
import React from "react";
import styled from "styled-components";

import Text from "./Text";
import {MaterialIcons} from "@expo/vector-icons";

export default function NumberPad(
    {onPress}
) {
    const buttons = [
        "1", "2", "3",
        "4", "5", "6",
        "7", "8", "9", "0",
        <MaterialIcons name="keyboard-backspace" size={24} color="#ffffff" />,
    ]
  return (
    <KeyPad>
       {buttons.map((item, index) => {
        return (
            <Number key={index} onPress={() => onPress(item, index)} delayPressIn={0}>
                <Text large heavy>
                    {item}
                </Text>
            </Number>
        )
       })}
    </KeyPad>
  );
}


const KeyPad = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    margin: 0 30px;
    `;

const Number = styled.TouchableOpacity`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    align-items: center;
    justify-content: center;
    margin: 5px 20px;
    border-width: 1px;
    border-color: #ffffff20;`;


