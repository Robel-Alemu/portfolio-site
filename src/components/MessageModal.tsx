import { CheckCircleIcon } from "@chakra-ui/icons";
import { BiSolidMessageError } from "react-icons/bi";
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
  IconButton,
  FormErrorIcon,
  Box,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import SocialMediaContainer from "./SocialMediaContainer";
import SocialMediaModal from "./SocialMediaModal";
interface MessageResponse {
  status: number;
  message: string;
}
interface Props {
  onClose: () => void;
  message: MessageResponse;
}
const MessageModal = ({ onClose, message }: Props) => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Modal isOpen onClose={onClose} size="xl">
      <ModalOverlay bg="rgba(0, 0, 0, 0.7)" />
      <ModalContent bg="#FDFEFF">
        <ModalHeader
          color="#070d1b"
          bg="#FEC544"
          display="flex"
          alignItems="center"
        >
          {message.status === 200 ? (
            <>
              <FaCheckCircle color="green" />
              <Text marginLeft={3}>Message sent!</Text>
            </>
          ) : (
            <>
              <BiSolidMessageError size={25} color="red" />
              <Text marginLeft={3}>Message Failed!</Text>
            </>
          )}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingTop={8}>
          <Heading fontSize="md" color="#000">
            {message.message}
          </Heading>
          {message.status !== 200 ? (
            //   <SocialMediaContainer section="contact" />
            <SocialMediaModal />
          ) : (
            ""
          )}
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
  );
};

export default MessageModal;
