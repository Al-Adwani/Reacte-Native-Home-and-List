import { observer } from "mobx-react";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import cartStore from "../Stores/cartStore";
import { Button, HStack, Icon, Spinner, VStack } from "native-base";
import { baseUrl } from "../Stores/instance";
import NumericInput from "react-native-numeric-input";
import CartDeleteButton from "./Buttons/CartDeleteButton";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleAdd = (value) => {
    setQuantity(value);

    cartStore.addItemToCart(item.product, value);
  };
  return (
    <View>
      <Image style={styles.itemImage} source={{ uri: item.product.image }} />
      <Text>Name:{item.product.name}</Text>
      <Text>Price:{item.product.price}</Text>
      <Text>Quantity:{item.quantity}</Text>
      <Text>Total Price:{item.product.price * item.quantity}</Text>
      <HStack>
        <NumericInput value={quantity} onChange={(value) => handleAdd(value)} />
        {/* <Button onPress={handleAdd}>Add</Button> */}
        <CartDeleteButton productId={item.product._id} />
      </HStack>
    </View>
  );
};

export default observer(CartItem);
const styles = StyleSheet.create({
  itemImage: {
    width: 150,
    height: 150,
  },
});
