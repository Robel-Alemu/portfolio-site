import {
  Box,
  Card,
  Image,
  CardBody,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import Container from "./Container";
import skills from "../utils/skills";

const Skills = () => {
  return (
    <Container>
      <Box padding="60px">
        <SimpleGrid
          //   marginX="5%"
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={10}
          paddingY="5"
          overflow={"hidden"}
          justifyContent="space-around"
        >
          {skills.map((skill) => (
            <Card paddingBottom="20px">
              <CardBody
                padding="35px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={skill.logo} />
              </CardBody>
              <Heading textAlign="center" fontSize="medium">
                {skill.name}
              </Heading>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Skills;
