import { Box, SimpleGrid } from "@chakra-ui/react";
import Container from "./Container";

const Skills = () => {
  return (
    <Container>
      <Box padding="40px">
        <SimpleGrid
          //   marginX="5%"
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={10}
          paddingY="5"
          overflow={"hidden"}
          justifyContent="space-around"
        >
          <Box bg="#101624">ssdfsdfsdfsf</Box>
          <Box bg="yellow">s</Box>
          <Box bg="red">s</Box>
          <Box bg="green">s</Box>
          <Box bg="yellow">s</Box>
          <Box bg="red">s</Box>
          <Box bg="green ">s</Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Skills;
