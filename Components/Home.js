import React from "react";
import { Box, Button, Center } from "native-base";
/* export const Home = ({ navigation }) => {
  return (
    <>
      <Box
        bg="primary.500"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
          margin: "10%",
        }}
      >
        This is a Box
      </Box>
    </>
  );
}; */

export default function Home({ navigation }) {
  return (
    <Center flex={1} px="3">
      <Button margin="10%" onPress={() => navigation.navigate("ShopList")}>
        Click Here
      </Button>
    </Center>
  );
}
