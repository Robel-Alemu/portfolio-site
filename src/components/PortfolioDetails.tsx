import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Box,
  Text,
  Badge,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
interface Portfolio {
  name: string;
  image: string;
  techs: string[];
  description: string;
  address: string;
  github: string;
}

interface Props {
  onClose: () => void;
  portfolio: Portfolio;
}
function PortfolioDetails({ onClose, portfolio }: Props) {
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
        isOpen
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay bg="rgba(0, 0, 0, 0.7)" />
        <ModalContent bg="#2d3747">
          <Image
            src={portfolio.image}
            bg="linear-gradient(to bottom, white, gray)"
          />
          <ModalHeader paddingBottom="10px">
            {" "}
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Text color="white">{portfolio.name}</Text>
              </Box>

              <Flex>
                {portfolio.github ? (
                  <IconButton
                    paddingLeft={5}
                    href={portfolio.github}
                    target="_blank"
                    as="a"
                    color="white.200"
                    _hover={{ transform: "scale(1.2)" }}
                    boxSize="20px"
                    size="lg"
                    variant="link"
                    icon={<FaGithub />}
                    aria-label={""}
                  />
                ) : (
                  ""
                )}

                <IconButton
                  href={portfolio.address}
                  target="_blank"
                  as="a"
                  color="white.200"
                  _hover={{ transform: "scale(1.2)" }}
                  boxSize="20px"
                  size="lg"
                  variant="link"
                  icon={<ExternalLinkIcon />}
                  aria-label={""}
                />
              </Flex>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div dangerouslySetInnerHTML={{ __html: portfolio.description }} />{" "}
            <br />
            <Box>
              {portfolio.techs.map((tech) => (
                <Badge margin={1} colorScheme="teal" variant="solid">
                  {tech}
                </Badge>
              ))}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              color="white"
              _hover={{ bg: "white", color: "#1a202c" }}
              target="_blank"
              as="a"
              href={portfolio.address}
              variant="outline"
              marginRight={3}
            >
              View Demo
            </Button>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PortfolioDetails;
