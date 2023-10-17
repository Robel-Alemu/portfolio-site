import {
  Badge,
  Box,
  Text,
  Image,
  SimpleGrid,
  Flex,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import styles from "../styles/PortfolioCards.module.css";
import PortfolioDescription from "./PortfolioDescription";
import portfolio from "../utils/portfolio";
import { FaGithub, FaLink } from "react-icons/fa";
import { ExternalLinkIcon } from "@chakra-ui/icons";
const PortfolioCards = () => {
  return (
    <SimpleGrid
      marginBottom={10}
      className={styles.row}
      columns={{ sm: 1, md: 1, lg: 1, xl: 2 }}
      spacing="50px"
      paddingY="5"
      justifyContent="space-around"
    >
      {portfolio.map((project) => (
        <Box>
          <Box className={styles.content} paddingBottom={3}>
            <Box className={styles.overlay}></Box>
            <Image className={styles.contentImage} src={project.image} />
            <Box
              className={`${styles.details} ${styles.fadeInTop} ${styles.fadeInRight}`}
            >
              <Text>{project.name}</Text>
            </Box>
          </Box>
          <Flex justifyContent="space-between">
            {/* <SimpleGrid columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}> */}
            <Flex>
              {" "}
              {project.techs.map((tech) => (
                <Badge
                  _hover={{ transform: "scale(0.9)" }}
                  variant="solid"
                  colorScheme="green"
                  marginRight={5}
                  paddingX="4px"
                  textTransform="capitalize"
                >
                  {tech}
                </Badge>
              ))}
            </Flex>
            <Flex>
              {project.github ? (
                <IconButton
                  paddingLeft={5}
                  href={project.github}
                  target="_blank"
                  as="a"
                  _hover={{ transform: "scale(1.2)" }}
                  boxSize="20px"
                  size="lg"
                  variant="link"
                  icon={<FaGithub />}
                  aria-label={""}
                />
              ) : (
                ""
              )}

              <IconButton
                href={project.address}
                target="_blank"
                as="a"
                _hover={{ transform: "scale(1.2)" }}
                boxSize="20px"
                size="lg"
                variant="link"
                icon={<ExternalLinkIcon />}
                aria-label={""}
              />
            </Flex>
            {/* </SimpleGrid> */}
          </Flex>

          {/* <PortfolioDescription description={project.description} /> */}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default PortfolioCards;
