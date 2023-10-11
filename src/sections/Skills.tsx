import Container from "../components/Container";
import SkillCards from "../components/SkillsCards";
import SectionHeading from "../components/SectionHeading";
import { Box } from "@chakra-ui/react";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  return (
    <Container>
      <Box className={styles.divider}></Box>
      <SectionHeading heading="Skills" />
      <Box className={styles.divider2}></Box>
      <SkillCards />
    </Container>
  );
};

export default Skills;
