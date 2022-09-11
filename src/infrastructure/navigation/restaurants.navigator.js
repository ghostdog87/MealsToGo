import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-details.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={
        {
          //headerShown: false,
        }
      }
    >
      <RestaurantStack.Screen
        name="RestaurantsStack"
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
