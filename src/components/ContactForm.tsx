import {
  Box,
  Button,
  FormControl,
  Text,
  Input,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import styles from "../styles/Contact.module.css";
import { useRef, useState } from "react";
import MessageModal from "./MessageModal";

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const subject = subjectRef.current?.value || "";
    const message = messageRef.current?.value || "";
    const inbox = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    console.log(inbox);
    fetch("http://localhost:8080/api/send-mail", {
      method: "POST",
      body: JSON.stringify(inbox),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      console.log(response.status);
      setIsModalOpen(true);
    });
  };
  // setShowModal(false);

  return (
    <>
      {isModalOpen && <MessageModal onClose={() => setIsModalOpen(false)} />}
      <Box>
        <Text fontSize="30px" paddingBottom={5}>
          Get in touch
        </Text>
        <form onSubmit={submitHandler}>
          <FormControl isRequired>
            <Input
              className={styles.input}
              placeholder="Your Name"
              marginBottom="35px"
              type="text"
              ref={nameRef}
              paddingY={6}
            />

            <Input
              className={styles.input}
              type="email"
              placeholder="Your Email"
              marginBottom="35px"
              ref={emailRef}
              paddingY={6}
            />
            <Input
              className={styles.input}
              placeholder="Subject"
              marginBottom="35px"
              ref={subjectRef}
              type="text"
              paddingY={6}
            />
            <Textarea
              className={styles.input}
              placeholder="Your Comment..."
              marginBottom="10px"
              ref={messageRef}
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
        </form>
      </Box>
    </>
  );
};

export default ContactForm;
