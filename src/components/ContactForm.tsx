import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import styles from "../styles/About.module.css";
const ContactForm = () => {
  return (
    <VStack>
      <Heading textAlign="left">Just say Hello</Heading>
      <FormControl isRequired>
        {/* <FormLabel>First name</FormLabel> */}
        <Input
          className={styles.input}
          placeholder="Your Name"
          marginBottom="30px"
          paddingY={7}
          //   variant="filled"
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
    </VStack>
  );
};

export default ContactForm;
