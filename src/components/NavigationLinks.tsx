import { Box, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}
const NavigationLinks = (props: Props) => {
  const { children } = props;
  return (
    <Box
      fontSize="15px"
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _active={{ color: "#FEC544" }}
      _hover={{
        textDecoration: "none",
        opacity: "60%",
        transform: "scale(0.9)",
        bg: "none",
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};
export default NavigationLinks;
