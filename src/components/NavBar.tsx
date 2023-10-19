import {
  Box,
  Text,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Flex,
  Hide,
  Show,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, PhoneIcon } from "@chakra-ui/icons";
import NavigationLinks from "./NavigationLinks";
import styles from "../styles/SharedStyle.module.css";
import navigation from "../utils/navigation";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box className={styles.containerNavBar}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="80px"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Box textTransform="uppercase">
            <Text>Logo</Text>
          </Box>
        </Box>
        <HStack
          spacing={6}
          textTransform="uppercase"
          display={{ base: "none", md: "none", lg: "flex" }}
        >
          {navigation.map((link) => (
            <NavigationLinks id={link.address} key={link.name}>
              {link.name}
            </NavigationLinks>
          ))}
        </HStack>
        <Hide below="lg">
          <Text fontSize="smaller" opacity="60%" paddingLeft="40px">
            |
          </Text>
          <Flex alignItems="center" marginLeft="40px">
            <PhoneIcon opacity="90%" marginRight="15px" />
            <Text color="#FEC544"> +251&nbsp;92&nbsp;495&nbsp;7735</Text>
          </Flex>
        </Hide>
      </Box>
      {isOpen ? (
        <Box pb={4} display={{ lg: "none" }} bg="#070d1b" width="100vw">
          <Stack as={"nav"} spacing={4}>
            {navigation.map((link) => (
              <NavigationLinks id={link.address} key={link.name}>
                {link.name}
              </NavigationLinks>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;
