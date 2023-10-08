import { Box, Heading, Hide } from "@chakra-ui/react";
import styles from "../styles/Introduction.module.css";
import style2 from "../styles/About2.module.css";
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
