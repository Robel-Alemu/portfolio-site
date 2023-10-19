import { Box, Center, IconButton } from "@chakra-ui/react";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const SocialMediaModal = () => {
  const social = [
    {
      name: "linkedin",
      address: "https://linkedin.com/in/robel-alemu-98a34321a",
      icon: <FaLinkedin />,
    },
    {
      name: "Twitter",
      address: "https://x.com/RobelJap?t=HD0iDXeh1dH1u_0TTXzFgQ&s=09",
      icon: <FaXTwitter />,
    },
    {
      name: "Instagram",
      address: "https://instagram.com/robel_jap?igshid=NzZlODBkYWE4Ng==",
      icon: <FaInstagram />,
    },
    {
      name: "Gmail",
      address: "mailto:robelalemu2372@gmail.com",
      icon: <BiLogoGmail />,
    },
  ];
  return (
    <Box marginTop={5}>
      {social.map((contact) => (
        <IconButton
          as="a"
          href={contact.address}
          target="_blank"
          marginLeft={3}
          colorScheme="telegram"
          //   boxSize="25px"
          size="lg"
          fontSize="25px"
          variant="solid"
          aria-label="Search database"
          //   isRound
          icon={contact.icon}
        />
      ))}
    </Box>
  );
};

export default SocialMediaModal;
