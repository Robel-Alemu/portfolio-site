import {
  Box,
  Card,
  Image,
  CardBody,
  SimpleGrid,
  Text,
  Button,
} from "@chakra-ui/react";
import styles from "../styles/Skills.module.css";
import skills from "../utils/skills";
import { useState } from "react";

const SkillCards = () => {
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
    <Box margin="auto" maxWidth="82%">
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 4 }}
        spacing={10}
        paddingY="5"
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
            <Text textAlign="center" fontSize="medium">
              {skill.name}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
      <Box display="flex" justifyContent="center" paddingTop="40px">
        <Button
          paddingX="40px"
          paddingY="25px"
          onClick={handleLoad}
          bg="#101624"
          color="#FDFEFFs"
          colorScheme="gray"
        >
          {LoadMore}
        </Button>
      </Box>
    </Box>
  );
};

export default SkillCards;
