import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import shopStore from "../Stores/shopStore";
import { baseUrl } from "../Stores/instance";
import { Spinner } from "native-base";
import ProductList from "./ProductList";
const ShopDetail = ({ route, navigation }) => {
  if (shopStore.isLoading) return <Spinner />;
  /* const shop = shopStore.shops[0]; */
  const { shop } = route.params;

  return (
    <View style={styles.shopDetailWrapper}>
      <Image
        style={styles.shopDetailImage}
        source={{ uri: baseUrl + shop.image }}
      />
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
      <ProductList products={shop.products} />
    </View>
  );
};

export default ShopDetail;

const styles = StyleSheet.create({
  shopDetailWrapper: {
    marginTop: 50,
  },
  shopDetailImage: {
    width: 150,
    height: 150,
  },
  shopDetailTitle: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
