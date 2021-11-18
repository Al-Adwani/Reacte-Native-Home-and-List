import React from "react";
import { Button } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import cartStore from "../../Stores/cartStore";
const CartDeleteButton = ({ productId }) => {
  return (
    <View>
      <Button
        style={styles.RemoveBtn}
        onPress={() => {
          cartStore.removeItemFromCart(productId);
        }}
      >
        Remove Item
      </Button>
    </View>
  );
};

export default CartDeleteButton;

const styles = StyleSheet.create({
  RemoveBtn: {
    backgroundColor: "crimson",
    marginTop: "4%",
    marginLeft: "5%",
  },
});
