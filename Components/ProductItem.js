import React from "react";
import { View, Text, Image } from "react-native";
import { HStack } from "native-base";
import { baseUrl } from "../Stores/instance";
import { useState } from "react";
import NumericInput from "react-native-numeric-input";
import cartStore from "../Stores/cartStore";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const handleAdd = (value) => {
    setQuantity(value);
    cartStore.addItemToCart(product, value);
  };
  return (
    <HStack w="100%" alignItems="center" space="3">
      <Image
        source={{
          uri: baseUrl + product.image,
        }}
        alt="image"
        style={{ width: 100, height: 100 }}
      />
      <Text>{product.name}</Text>
      <NumericInput value={quantity} onChange={(value) => handleAdd(value)} />
    </HStack>
  );
};

export default ProductItem;
