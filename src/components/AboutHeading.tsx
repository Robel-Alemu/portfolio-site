import { Box, Heading, Hide } from "@chakra-ui/react";
import React from "react";
import styles from "./Introduction.module.css";
import style2 from "./About2.module.css";
const AboutHeading = () => {
  return (
    <Box className={styles.container}>
      <Box className={style2.heading}>
        <Heading className={style2.title}>About Me</Heading>
        <Hide below="md">
          <Heading className={style2.subtitle}>About Me</Heading>
        </Hide>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default AboutHeading;
