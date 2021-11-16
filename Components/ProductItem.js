import React from "react";
import { View, Text, Image } from "react-native";
import { HStack } from "native-base";
import { baseUrl } from "../Stores/instance";
const ProductItem = ({ product }) => {
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
    </HStack>
  );
};

export default ProductItem;
