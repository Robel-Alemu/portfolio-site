import {
  Box,
  Card,
  Image,
  CardBody,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import styles from "../styles/Skills.module.css";
import Container from "./Container";
import skills from "../utils/skills";

const Skills = () => {
  return (
    <Container>
      <Box margin="auto" maxWidth="80%">
        <SimpleGrid
          //   marginX="5%"
          columns={{ sm: 2, md: 3, lg: 4, xl: 4 }}
          spacing={10}
          paddingY="5"
          //   overflow={"hidden"}
          justifyContent="space-around"
        >
          {skills.map((skill) => (
            <Card paddingBottom="20px" className={styles.card}>
              <CardBody
                padding="25px"
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
