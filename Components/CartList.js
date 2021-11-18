import React from "react";
import { StyleSheet, Text, View } from "react-native";
import cartStore from "../Stores/cartStore";
import CartItem from "./CartItem";
import { VStack } from "native-base";
import { observer } from "mobx-react";
import { ScrollView } from "native-base";
const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  return <ScrollView>{cartList}</ScrollView>;
};

export default observer(CartList);

const styles = StyleSheet.create({});
