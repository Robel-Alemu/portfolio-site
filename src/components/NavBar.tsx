import {
  Box,
  Flex,
  Text,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavigationLinks from "./NavigationLinks";
import styles from "../styles/SharedStyle.module.css";

const Links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Cirtifications",
  "Resume",

  "|",

  "+251924957735",
];

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // <Center height="80px">
    <Box className={styles.container}>
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
          // justifyContent="center"
          spacing={6}
          textTransform="uppercase"
          display={{ base: "none", md: "none", lg: "flex" }}
        >
          {Links.map((link) => (
            <NavigationLinks key={link}>{link}</NavigationLinks>
          ))}
        </HStack>
      </Box>
      {isOpen ? (
        <Box pb={4} display={{ lg: "none" }} bg="#070d1b" width="100vw">
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavigationLinks key={link}>{link}</NavigationLinks>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
    // </Center>
  );
};

export default NavBar;
