import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import header from "../assets/header-bg.jpg";
import image from "../assets/hero-img.jpg";
import { Image } from "@chakra-ui/react";
import { Show, Hide } from "@chakra-ui/react";
import styles from "./Introduction.module.css";
import SocialMediaContainer from "./SocialMediaContainer";

const Introduction = () => {
  return (
    <Box
      backgroundImage={header}
      height="850px"
      position="relative"
      backgroundPosition="center center"
      backgroundSize="cover"
    >
      {/* <Box
          // marginLeft="10%"
          // maxWidth="1140px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        > */}
      <Box
        height="710px"
        // marginTop={20}
        position="relative"
        overflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex="11"
        flexWrap="wrap"
      >
        <Box className={styles.container}>
          <Heading
            as="h3"
            fontSize="30px"
            lineHeight="35px"
            fontWeight="300"
            color="#FEC544"
            fontFamily="inter"
          >
            Hello, I’m
          </Heading>
          <Heading lineHeight="none" as="h1" fontSize="9xl" color="#FDFEFF">
            Robel <br /> Alemu
          </Heading>

          <Heading
            marginY={7}
            color="#A9ADB8"
            fontWeight="normal"
            opacity="70%"
            fontSize="36px"
          >
            Front-End Developer
          </Heading>
          <Button className={styles.contactButton}>Contact Me</Button>
        </Box>
      </Box>
      {/* </Box> */}
      <Hide below="md">
        <Box
          position="absolute"
          top="0"
          right="0"
          height="100%"
          width="45%"
          zIndex="11"
        >
          <Image
            width="100%"
            objectFit="cover"
            height="100%"
            src={image}
          ></Image>
          <SocialMediaContainer />
        </Box>
      </Hide>
    </Box>
  );
};

export default Introduction;
