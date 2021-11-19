import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";
import { Button } from "native-base";
import { VStack, Badge } from "native-base";
import cartStore from "../../Stores/cartStore";
import { observer } from "mobx-react-lite";
import userAuthStore from "../../Stores/authStore";
const CartButton = ({ navigation }) => {
  const handleSubmit = () => {
    if (userAuthStore.user) {
      navigation.navigate("CartList");
    } else {
      Alert.alert(
        "Signin",
        "You need to Signin to access your cart",
        [
          { text: "Cancel", onPress: () => alert("Canceled"), style: "cancel" },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
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
            handleSubmit();
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
