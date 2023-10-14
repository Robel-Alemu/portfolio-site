import Container from "../components/Container";
import SkillCards from "../components/SkillsCards";
import SectionHeading from "../components/SectionHeading";
import { Box } from "@chakra-ui/react";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  return (
    <Container id="Skills">
      {/* <Box className={styles.divider}></Box> */}
      <SectionHeading heading="Skills" />

      <SkillCards />
    </Container>
  );
};

export default Skills;
