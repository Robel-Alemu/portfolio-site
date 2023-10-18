import React from "react";
import {
  Progress,
  Box,
  CircularProgress,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProgressBar = () => {
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      height="100%"
      backgroundColor="rgba(0, 0, 0, 0.7)" /* Adjust the opacity as needed */
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="1000" /* Adjust the z-index as needed */
    >
      {/* <Progress bg="white" size="lg" isIndeterminate colorScheme="green" /> */}
      <VStack>
        {" "}
        <CircularProgress isIndeterminate color="green.300" size="60px" />
        <Text>Please Wait, Sending Message...</Text>
      </VStack>
    </Box>
  );
};

export default ProgressBar;
