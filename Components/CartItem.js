import { observer } from "mobx-react";
import React from "react";
import { View, Text } from "react-native";
import cartStore from "../Stores/cartStore";
import { Spinner } from "native-base";

const CartItem = ({ item }) => {
  if (cartStore.isLoading) return <Spinner />;
  console.log(item);

  return (
    <View>
      <Text>Name:{item.product.name}</Text>
      <Text>Price:{item.product.price}</Text>
      <Text>Quantity:{item.quantity}</Text>
      <Text>Total Price:{item.product.price * item.quantity}</Text>
    </View>
  );
};

export default observer(CartItem);
