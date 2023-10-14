import Container from "../components/Container";
import { SimpleGrid } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import ContactDescription from "../components/ContactDescription";
import SectionHeading from "../components/SectionHeading";

const Contact = () => {
  return (
    <Container id="Contact">
      <SectionHeading heading="Contact Me" />
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
        spacing={10}
        paddingY="5"
      >
        <ContactForm />
        <ContactDescription />
      </SimpleGrid>
    </Container>
  );
};

export default Contact;
