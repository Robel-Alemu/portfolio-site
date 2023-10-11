import {
  Box,
  Card,
  Image,
  CardBody,
  SimpleGrid,
  Heading,
  Button,
} from "@chakra-ui/react";
import styles from "../styles/Skills.module.css";
import Container from "./Container";
import skills from "../utils/skills";
import { useState } from "react";

const Skills = () => {
  const [display, setDisplay] = useState(false);
  const [LoadMore, setLoadMore] = useState("Load More");
  const handleLoad = () => {
    if (display) {
      setDisplay(false);
      setLoadMore("Load More");
    } else {
      setDisplay(true);
      setLoadMore("Show Less");
    }
  };
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
            <Card
              paddingBottom="20px"
              className={styles.card}
              display={!display ? skill.display : "flex"}
            >
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
        <Button transition="all .10s ease" onClick={handleLoad}>
          {LoadMore}
        </Button>
      </Box>
    </Container>
  );
};

export default Skills;
