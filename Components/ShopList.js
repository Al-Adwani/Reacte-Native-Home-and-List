import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import shopStore from "../Stores/shopStore";
import ShopItem from "./ShopItem";
const ShopList = () => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} />
  ));
  return <View>{shopList}</View>;
};

export default observer(ShopList);


