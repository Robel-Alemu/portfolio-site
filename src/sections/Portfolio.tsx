import { Box, SimpleGrid } from "@chakra-ui/react";
import Container from "../components/Container";
import PortfolioCard from "../components/PortfolioCard";
import PortfolioCards from "../components/PortfolioCards";
import SectionHeading from "../components/SectionHeading";
import projects from "../utils/portfolio";
import styles from "../styles/SharedStyle.module.css";

const Portfolio = () => {
  return (
    <Container id="Portfolio">
      <SectionHeading heading="Portfolio" />
      {/* <PortfolioCards /> */}
      <SimpleGrid
        marginBottom={10}
        // className={styles.row}
        columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
        spacing="40px"
        paddingY="5"
        justifyContent="space-between"
      >
        {projects.map((project) => (
          <PortfolioCard portfolio={project} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Portfolio;
