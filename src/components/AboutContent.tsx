import {
  Box,
  Text,
  ListItem,
  Image,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import image from "../assets/about.jpg";
import styles from "../styles/About.module.css";

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
                <Text className={styles.subtitle}>Front-End Developer</Text>
                <Box className={styles.aboutText}>
                  <Text color="#a9adb8">
                    I am a Visual Designer with a strong focus on digital
                    branding. Visul design seeks to attract, inspire, create
                    desires and otivate people to respond to messages, with a
                    view to making a favorable impact.
                  </Text>
                </Box>
                <UnorderedList
                  listStyleType="none"
                  margin="0"
                  padding="0"
                  color="#a9adb8"
                >
                  <ListItem className={styles.listItem}>
                    <Text>Birthday</Text>{" "}
                    <Text>:&nbsp;&nbsp;February 12, 1998</Text>
                  </ListItem>
                  <ListItem className={styles.listItem}>
                    <Text>Phone</Text> <Text>:&nbsp;&nbsp;+251924957735</Text>
                  </ListItem>
                  <ListItem className={styles.listItem}>
                    <Text>Email</Text>{" "}
                    <Text>:&nbsp;&nbsp;robelalemu2372@gmail.com</Text>
                  </ListItem>
                  <ListItem className={styles.listItem}>
                    <Text>Eduation</Text>{" "}
                    <Text>
                      :&nbsp;&nbsp;HiLCoE School of computer science and
                      Technology
                    </Text>
                  </ListItem>
                  <ListItem className={styles.listItem}>
                    <Text>Language</Text>
                    <Text>:&nbsp;&nbsp;English, Amharic</Text>
                  </ListItem>
                  <ListItem className={styles.listItem}>
                    <Text>Freelance</Text>
                    <Text>:&nbsp;&nbsp;Available</Text>
                  </ListItem>
                  <ListItem className={styles.listItem}>
                    <Text>Location</Text>
                    <Text>:&nbsp;&nbsp;Addis Ababa, Ethiopia</Text>
                  </ListItem>
                </UnorderedList>
                <Button marginTop="35px" className={styles.downloadButton}>
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
