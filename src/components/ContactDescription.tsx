import { AddIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Heading,
  VStack,
  Text,
  HStack,
  IconButton,
  Box,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import SocialMediaContainer from "./SocialMediaContainer";
import styles from "../styles/Contact.module.css";
import { FaHouse } from "react-icons/fa6";

const ContactDescription = () => {
  return (
    <Box>
      <Heading paddingBottom={5}>Contact Info</Heading>
      <Text className={styles.description}>
        Always available for freelancing if the right project comes along, Feel
        free to contact me.
      </Text>
      <Flex paddingBottom={7}>
        <IconButton
          boxSize="52px"
          size="lg"
          variant="outline"
          aria-label="Search database"
          isRound
          icon={<EmailIcon />}
        />
        <Box paddingLeft={7}>
          <Text className={styles.contact}>Email</Text>
          <Text>robelalemu2372@gmail.com</Text>
          {/* <Text>robela149@gmail.com</Text> */}
        </Box>
      </Flex>
      <Flex paddingBottom={7}>
        <IconButton
          boxSize="52px"
          size="lg"
          variant="outline"
          aria-label="Search database"
          isRound
          icon={<PhoneIcon />}
        />
        <Box paddingLeft={7}>
          <Text className={styles.contact}>Phone</Text>
          <Text>+251924957735</Text>
        </Box>
      </Flex>
      <Flex paddingBottom={7}>
        <IconButton
          boxSize="52px"
          size="lg"
          variant="outline"
          aria-label="Search database"
          isRound
          icon={<FaHouse />}
        />
        <Box paddingLeft={7}>
          <Text className={styles.contact}>Address</Text>
          <Text>2661 High Meadow Lane Bear Creek,</Text>
          <Text>Olancha, KY 93544</Text>
        </Box>
      </Flex>

      <Heading fontSize="larger" paddingBottom={2}>
        Visite my social profile and get connected
      </Heading>
      <SocialMediaContainer section="contact" />
    </Box>
  );
};

export default ContactDescription;
