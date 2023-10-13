import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Text,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import styles from "../styles/About.module.css";
const ContactForm = () => {
  return (
    <Box>
      <Text fontSize="30px" paddingBottom={5}>
        Get in touch
      </Text>
      <FormControl isRequired>
        {/* <FormLabel>First name</FormLabel> */}
        <Input
          className={styles.input}
          placeholder="Your Name"
          marginBottom="35px"
          paddingY={7}
          //   variant="filled"
          bg="#101624"
        />

        <Input
          type="email"
          placeholder="Your Name"
          marginBottom="35px"
          paddingY={7}
          bg="#101624"
        />
        <Input
          placeholder="Subject"
          marginBottom="35px"
          paddingY={7}
          bg="#101624"
        />
        <Textarea
          placeholder="Your Comment..."
          marginBottom="10px"
          rows={6}
          bg="#101624"
        />
        <Button
          marginTop="35px"
          className={styles.downloadButton}
          marginBottom="35px"
          type="submit"
        >
          Send Message
        </Button>
      </FormControl>
    </Box>
  );
};

export default ContactForm;
