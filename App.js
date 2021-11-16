import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Components/Home";
import { NativeBaseProvider } from "native-base";
import ShopList from "./Components/ShopList";
import ShopDetail from "./Components/ShopDetail";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./Components/Navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
