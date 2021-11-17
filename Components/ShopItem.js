import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { baseUrl } from "../Stores/instance";
import { HStack, Pressable } from "native-base";

const ShopItem = ({ shop, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ShopDetail", { shop: shop });
      }}
    >
      <HStack w="100%" alignItems="center" space="3">
        <Image
          style={styles.shopImage}
          source={{ uri: baseUrl + shop.image }}
        />
        <Text>{shop.name}</Text>
      </HStack>
    </Pressable>
  );
};

export default observer(ShopItem);

const styles = StyleSheet.create({
  shopImage: {
    width: 150,
    height: 150,
  },
});
