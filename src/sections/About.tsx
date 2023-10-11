import {
  Box,
  Heading,
  ListItem,
  Text,
  Image,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import image from "../assets/about.jpg";
import styles from "../styles/About.module.css";
import classes from "../styles/Introduction.module.css";
import Container from "../components/Container";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <Container>
      <AboutContent />
    </Container>
  );
};

export default About;
