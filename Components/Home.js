import React from "react";
import { Box, Button, Center } from "native-base";
export const Home = () => {
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
};

export default () => {
  return (
    
      <Center flex={1} px="3">
        <Home />
        <Button margin="10%" onPress={() => console.log("hello world")}>
          Primary
        </Button>
      </Center>
    
  );
};
