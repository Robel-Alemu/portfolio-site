import Container from "../components/Container";
import AboutContent from "../components/AboutContent";
import SectionHeading from "../components/SectionHeading";

const About = () => {
  return (
    <Container>
      <SectionHeading heading="About Me" />
      <AboutContent />
    </Container>
  );
};

export default About;
