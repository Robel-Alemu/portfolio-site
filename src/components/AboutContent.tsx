import {
  Box,
  Text,
  ListItem,
  Image,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import image from "../assets/about-me_.webp";
import styles from "../styles/About.module.css";
import resume from "../assets/Resume.pdf";

const AboutContent = () => {
  return (
    <Box>
      {/* <Box className={styles.divider}></Box> */}
      <Box className={styles.row}>
        <Box className={styles.insideRow}>
          <Box className={styles.imageWrap}>
            <Image
              objectFit="cover"
              minHeight="550px"
              maxWidth="100%^"
              src={image}
            ></Image>
          </Box>
        </Box>

        <Box className={styles.insideRow}>
          <Box className={styles.descriptionWrap}>
            <Box className={styles.descriptionContent}>
              <Box className={styles.contentContainer}>
                <Text className={styles.name}>Hi There! I’m Robel Alemu</Text>
                {/* <Text className={styles.subtitle}>Front-End Developer</Text> */}
                <Box className={styles.aboutText}>
                  <Text color="#a9adb8">
                    I am a solution-driven Full-Stack developer with a two-year
                    journey in web development, valued for thriving in
                    close-knit and collaborative workspaces. <br /> <br />
                    Proficient in the art of React with TypeScript, JavaScript,
                    and a strong grasp of back-end technologies like Node.js,
                    Express.js, MongoDB, PostgreSQL and other backend
                    technologies. My passion lies in crafting innovative
                    solutions, underpinned by unwavering dedication, an
                    organizational flair, and natural talent for reasoning.{" "}
                    <br />
                    <br /> In the realm of team dynamics, I'm in my element,
                    fostering an atmosphere of companionship. Continually
                    broadening my skill set, I find joy in contributing to our
                    shared success through the application of technical
                    expertise, making every day a warm welcome to new
                    possibilities.
                    <br /> <br />
                    You are most welcome to join me in celebrating our
                    forthcoming success!
                    <br /> <br /> Eduation&nbsp; :&nbsp;HiLCoE School of
                    computer science and Technology
                  </Text>
                </Box>

                <Button
                  as="a"
                  download
                  href={resume}
                  marginTop="25px"
                  className={styles.downloadButton}
                >
                  Download CV
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutContent;
