import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";
import { Button } from "native-base";
import { VStack, Badge } from "native-base";
import cartStore from "../../Stores/cartStore";
import { observer } from "mobx-react-lite";
const CartButton = ({ navigation }) => {
  return (
    <View>
      <VStack>
        <Badge
          colorScheme="Blue"
          rounded="999px"
          mb={-3}
          mr={0}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{ fontSize: 12 }}
        >
          {cartStore.totalQuantity}
        </Badge>

        <Icon
          name="shopping-cart"
          size={30}
          color="#900"
          style={styles.cartImage}
          onPress={() => {
            navigation.navigate("CartList");
          }}
        />
      </VStack>
    </View>
  );
};

export default observer(CartButton);

const styles = StyleSheet.create({
  cartImage: {
    marginRight: "5%",
  },
});
