import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import styles from "../styles/About.module.css";
const ContactForm = () => {
  return (
    <>
      <Heading>Just say Hello</Heading>
      <FormControl isRequired>
        {/* <FormLabel>First name</FormLabel> */}
        <Input
          placeholder="Your Name"
          marginBottom="30px"
          paddingY={7}
          bg="#101624"
        />

        <Input
          type="email"
          placeholder="Your Name"
          marginBottom="30px"
          paddingY={7}
          bg="#101624"
        />
        <Input
          placeholder="Subject"
          marginBottom="30px"
          paddingY={7}
          bg="#101624"
        />
        <Textarea
          placeholder="Your Comment..."
          marginBottom="10px"
          rows={5}
          bg="#101624"
        />
        <Button
          marginTop="35px"
          className={styles.downloadButton}
          marginBottom="30px"
          type="submit"
        >
          Send Message
        </Button>
      </FormControl>
    </>
  );
};

export default ContactForm;
