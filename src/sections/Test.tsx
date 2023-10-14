import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import header from "../assets/header-bg.jpg";
import styles from "../styles/Test.module.css";
import hero from "../assets/hero-img.jpg";
import SocialMediaContainer from "../components/SocialMediaContainer";
const Test = () => {
  return (
    <Box position="relative" height="850px" bg="#080e1e">
      <Box
        backgroundImage={header}
        display="flex"
        height="710px"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        position="relative"
        overflow="hidden"
        zIndex="11"
      >
        <Box className={styles.divider}></Box>
        <Box className={styles.cont}>
          <Box>
            <Heading className={styles.hello}>Hello i'm</Heading>
            <Heading className={styles.name}>
              Robel <br /> Alemu{" "}
            </Heading>
            <Heading className={styles.title}>
              Robel <br /> Alemu{" "}
            </Heading>
            <Button className={styles.contact}>Contact me </Button>
          </Box>
        </Box>
        <Box className={styles.hero}>
          <Image src={hero} height="100%" width="100%" objectFit="cover" />
          <SocialMediaContainer section="introduction" />
        </Box>
      </Box>
    </Box>
  );
};

export default Test;
