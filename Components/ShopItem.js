import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { observer } from "mobx-react-lite";
import { baseUrl } from "../Stores/instance";

const ShopItem = ({ shop }) => {
  return (
    <View>
      <Image style={styles.shopImage} source={{ uri: baseUrl + shop.image }} />
      <Text>{shop.name}</Text>
    </View>
  );
};

export default observer(ShopItem);

const styles = StyleSheet.create({
  shopImage: {
    width: 150,
    height: 150,
  },
});
