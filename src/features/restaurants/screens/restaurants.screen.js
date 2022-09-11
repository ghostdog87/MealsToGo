import React, { useContext } from "react";

import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "@react-native-material/core";
import { Search } from "../components/search.component";

const CardList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <Loading>
          <ActivityIndicator size="large" />
        </Loading>
      )}
      <CardList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantDetails", { restaurant: item });
              }}
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
