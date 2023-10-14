import { Badge, Box, Text, Image, SimpleGrid } from "@chakra-ui/react";
import styles from "../styles/PortfolioCards.module.css";
import PortfolioDescription from "./PortfolioDescription";
import portfolio from "../utils/portfolio";
const PortfolioCards = () => {
  return (
    <SimpleGrid
      className={styles.row}
      columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
      spacing="50px"
      paddingY="5"
      justifyContent="space-around"
    >
      {portfolio.map((project) => (
        <Box>
          <Box className={styles.content} paddingBottom={2}>
            <Box className={styles.overlay}></Box>
            <Image className={styles.contentImage} src={project.image} />
            <Box
              className={`${styles.details} ${styles.fadeInTop} ${styles.fadeInRight}`}
            >
              <Text>{project.name}</Text>
            </Box>
          </Box>
          {project.techs.map((tech) => (
            <Badge
              variant="outline"
              colorScheme="green"
              marginRight={5}
              paddingX="4px"
              textTransform="capitalize"
            >
              {tech}
            </Badge>
          ))}
          <PortfolioDescription description={project.description} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default PortfolioCards;
