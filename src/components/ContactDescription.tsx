import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Heading, VStack, Text, HStack, IconButton } from "@chakra-ui/react";
import React from "react";
import SocialMediaContainer from "./SocialMediaContainer";

const ContactDescription = () => {
  return (
    <VStack>
      <Heading>Contact Info</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula
        nulla tincidunt id faucibus sed suscipit feugiat.
      </Text>
      <HStack>
        <IconButton
          size="lg"
          variant="outline"
          aria-label="Search database"
          isRound
          icon={<EmailIcon />}
        />
        <VStack>
          <Text>Email</Text>
          <Text>robelalemu2372@gmail.com</Text>
          <Text>robela149@gmail.com</Text>
        </VStack>
      </HStack>
      <HStack>
        <IconButton
          size="lg"
          variant="outline"
          aria-label="Search database"
          isRound
          icon={<PhoneIcon />}
        />
        <VStack>
          <Text>Phone</Text>
          <Text>+251924957735</Text>
        </VStack>
      </HStack>
      <HStack>
        <IconButton
          size="lg"
          variant="outline"
          aria-label="Search database"
          isRound
          icon={<EmailIcon />}
        />
        <VStack>
          <Text>Address</Text>
          <Text>2661 High Meadow Lane Bear Creek,</Text>
          <Text>Olancha, KY 93544</Text>
        </VStack>
      </HStack>
      <Heading fontSize="larger">
        Visite my social profile and get connected
      </Heading>
      <SocialMediaContainer />
    </VStack>
  );
};

export default ContactDescription;
