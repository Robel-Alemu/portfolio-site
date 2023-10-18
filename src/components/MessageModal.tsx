import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
interface Props {
  onClose: () => void;
}
const MessageModal = ({ onClose }: Props) => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen onClose={onClose} size="xl">
        <ModalOverlay bg="#070d1bc1" />
        <ModalContent bg="#FDFEFF">
          <ModalHeader
            color="#FDFEFF"
            bg="#659A8C"
            display="flex"
            alignItems="center"
          >
            <FaCheckCircle color="green" />
            <Text marginLeft={3}>Message sent!</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingY={9}>
            <Heading fontSize="md" color="#000">
              Thank you! I will be in touch shortly!
            </Heading>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="#070d1b"
              color="#FDFEFF"
              _hover={{ transform: "scale(0.9)" }}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MessageModal;
