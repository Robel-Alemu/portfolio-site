import { AddIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Text, VStack, HStack, IconButton, Box, Flex } from "@chakra-ui/react";
import React from "react";
import SocialMediaContainer from "./SocialMediaContainer";
import styles from "../styles/Contact.module.css";
import { FaHouse } from "react-icons/fa6";

const ContactDescription = () => {
  return (
    <Box>
      <Text fontSize="30px" paddingBottom={3}>
        Contact Info
      </Text>
      <Text color="#a9adb8" className={styles.description}>
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
          <Text color="#a9adb8">robelalemu2372@gmail.com</Text>
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
          <Text color="#a9adb8">+251924957735</Text>
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
          <Text color="#a9adb8">2661 High Meadow Lane Bear Creek,</Text>
          <Text color="#a9adb8">Olancha, KY 93544</Text>
        </Box>
      </Flex>

      <Text fontSize="larger" paddingBottom={2}>
        Visite my social profile and get connected
      </Text>
      <SocialMediaContainer section="contact" />
    </Box>
  );
};

export default ContactDescription;
