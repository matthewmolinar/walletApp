import { View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons";
import Text from "../components/Text";
import purchaseData from "../../purchases";
import { LineChart } from "react-native-chart-kit";

export default function HomeScreen() {
  const renderPurchase = ({ item }) => {
    return (
      <Purchase>
        <PurchaseInfo>
          <Text heavy>{item.product}</Text>
          <Text bold>{item.store}</Text>
          <Text>{item.address}</Text>
        </PurchaseInfo>
        <Text heavy>{item.price}</Text>
      </Purchase>
    );
  };

  return (
    <Container>
      <Header>
        <ProfilePhoto
          source={require("../../assets/MovesLogoSummerSticker.png")}
        />
        <Welcome>
          <Text heavy medium>
            Welcome,
          </Text>
          <Text>Matt Molinar</Text>
        </Welcome>
        <FontAwesome5 name="cog" size={24} color="#565656" />
      </Header>

      <Text center heavy title black>
        $13,337
      </Text>
      <Text center medium color="#727479">
        Current Balance
      </Text>

      <Chart>
        <LineChart
          data={{
            labels: ["May", "June", "July", "Aug", "Sep", "Oct"],
            datasets: [
              {
                data: [
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={250}
          yAxisLabel="$"
          yAxisSuffix="k"
          chartConfig={{
            backgroundGradientFrom: "#1e1e1e",
            backgroundGradientTo: "#1e1e1e",
            color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
            labelColor: () => `rgba(255, 255, 255, 0.2)`,
            strokeWidth: 3,
          }}
          withVerticalLines={false}
          withHorizontalLines={false}
          bezier
        />
      </Chart>

      <Purchases
        ListHeaderComponent={
          <>
            <TransactionsHeader>
              <HeaderContainer>
                <Text>Recent Purchases</Text>
                <MaterialIcons name="sort" size={24} color="#5196f4" />
              </HeaderContainer>

              <SearchContainer>
                <AntDesign name="search1" size={18} color="#5196f4" />
                <Search placeholder="Search Transactions" />
              </SearchContainer>
            </TransactionsHeader>
          </>
        }
        data={purchaseData}
        renderItem={renderPurchase}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar barStyle="light-content" />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 16px 32px 16px;
`;

const ProfilePhoto = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

const Welcome = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const Purchases = styled.FlatList`
  background-color: #2c2c2c;
  padding: 16px;
`;

const TransactionsHeader = styled.View`
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.View`
  background-color: #3d3d3d;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  border-radius: 6px;
  margin: 16px 0;
`;

const Search = styled.TextInput`
  flex: 1;
  padding: 8px 16px;
  color: #dbdbdb;
`;

const StatusBar = styled.StatusBar``;

const HeaderContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Purchase = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #393939;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const PurchaseInfo = styled.View`
  flex: 1;
  margin-left: 16px;
`;

const Chart = styled.View`
  margin: 32px 0;
`;
