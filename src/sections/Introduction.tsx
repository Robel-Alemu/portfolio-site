import { Box, Button, Heading, Text } from "@chakra-ui/react";
import header from "../assets/header-bg.jpg";
import me from "../assets/me_.webp";
import { Image } from "@chakra-ui/react";
import { Hide } from "@chakra-ui/react";
import styles from "../styles/SharedStyle.module.css";
import SocialMediaContainer from "../components/SocialMediaContainer";

const Introduction = () => {
  return (
    <>
      <Box
        id="Introduction"
        // backgroundImage={header}
        height="850px"
        bg="#080e1e"
        position="relative"
        backgroundPosition="center center"
        backgroundSize="cover"
      >
        <Box
          backgroundImage={header}
          height="710px"
          position="relative"
          overflow="hidden"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex="11"
          flexWrap="wrap"
        >
          <Box className={styles.container}>
            <Text
              className={styles.hello}
              fontSize="30px"
              lineHeight="60px"
              fontWeight="300"
              color="#FEC544"
            >
              Hello, I’m
            </Text>
            <Text
              className={styles.name}
              lineHeight="none"
              fontSize="120px"
              fontWeight="900"
              color="#FDFEFF"
              letterSpacing={4}
            >
              Robel <br /> Alemu
            </Text>

            <Text
              className={styles.title}
              marginY={7}
              color="#A9ADB8"
              fontWeight="normal"
              opacity="70%"
              fontSize="36px"
            >
              Full-Stack Developer
            </Text>
            <Button as="a" href="#Contact" className={styles.contactButton}>
              Contact Me
            </Button>
          </Box>
        </Box>

        <Hide below="lg">
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
              // src={image}
              src={me}
            ></Image>
            <SocialMediaContainer section="introduction" />
          </Box>
        </Hide>
      </Box>
    </>
  );
};

export default Introduction;
