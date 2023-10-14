import Container from "../components/Container";
import SkillCards from "../components/SkillsCards";
import SectionHeading from "../components/SectionHeading";

const Skills = () => {
  return (
    <Container id="Skills">
      <SectionHeading heading="Skills" />

      <SkillCards />
    </Container>
  );
};

export default Skills;
