import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";
import { Button } from "native-base";
const CartButton = ({ navigation }) => {
  return (
    <Icon
      name="shopping-cart"
      size={30}
      color="#900"
      style={styles.cartImage}
      onPress={() => {
        navigation.navigate("CartList");
      }}
    />
  );
};

export default CartButton;

const styles = StyleSheet.create({
  cartImage: {
    marginRight: "5%",
  },
});
