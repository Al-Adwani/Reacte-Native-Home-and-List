import React from "react";
import { View, Text } from "react-native";
import shopStore from "../Stores/shopStore";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product._id} />
  ));
  return <View>{productList}</View>;
};

export default ProductList;
