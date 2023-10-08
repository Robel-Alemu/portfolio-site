import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavigationLinks from "./NavigationLinks";
import styles from "./Introduction.module.css";

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
    <>
      <Box className={styles.container} height="80px">
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ lg: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={10} paddingX="20px" textTransform="uppercase">
              <Box>Logo</Box>
            </HStack>{" "}
          </Flex>

          <HStack
            textTransform="uppercase"
            fontFamily="Roboto,sans-serif"
            spacing={6}
            justifyContent="end"
            as={"nav"}
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            {Links.map((link) => (
              <NavigationLinks key={link}>{link}</NavigationLinks>
            ))}
          </HStack>
          {/* <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Action
            </Button>
          </Flex> */}
        </Flex>

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
    </>
  );
};

export default NavBar;
