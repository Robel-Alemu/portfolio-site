import {
  Box,
  Button,
  FormControl,
  Text,
  Input,
  Textarea,
} from "@chakra-ui/react";
import styles from "../styles/Contact.module.css";
const ContactForm = () => {
  return (
    <Box>
      <Text fontSize="30px" paddingBottom={5}>
        Get in touch
      </Text>
      <FormControl isRequired>
        <Input
          className={styles.input}
          placeholder="Your Name"
          marginBottom="35px"
          paddingY={6}
        />

        <Input
          className={styles.input}
          type="email"
          placeholder="Your Email"
          marginBottom="35px"
          paddingY={6}
        />
        <Input
          className={styles.input}
          placeholder="Subject"
          marginBottom="35px"
          paddingY={6}
        />
        <Textarea
          className={styles.input}
          placeholder="Your Comment..."
          marginBottom="10px"
          rows={6}
        />
        <Button
          marginTop="35px"
          className={styles.contactButton}
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
