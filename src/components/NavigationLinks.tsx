import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  id: string;
}
const NavigationLinks = ({ children, id }: Props) => {
  return (
    <Box
      fontSize="15px"
      as="a"
      px={2}
      py={1}
      // rounded={"md"}
      _hover={{
        textDecoration: "none",
        opacity: "60%",
        transform: "scale(0.9)",
        bg: "none",
      }}
      href={id}
    >
      {children}
    </Box>
  );
};
export default NavigationLinks;
