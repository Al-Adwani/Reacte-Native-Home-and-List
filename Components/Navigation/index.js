import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import CartList from "../CartList";
import CartButton from "../Buttons/CartButton";
export default function RootNavigator() {
  const { Navigator, Screen } = createStackNavigator();
  /* const RootNavigator = () => {}; */
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="ShopList"
        component={ShopList}
        options={({ navigation }) => {
          return {
            headerStyle: {
              backgroundColor: "crimson",
            },
            headerRight: () => <CartButton navigation={navigation} />,
          };
        }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ navigation, route }) => {
          const { shop } = route.params;
          return {
            headerStyle: {
              backgroundColor: "crimson",
            },
            headerRight: () => <CartButton navigation={navigation} />,
            title: shop.name,
          };
        }}
      />
      <Screen name="CartList" component={CartList} />
    </Navigator>
  );
}
