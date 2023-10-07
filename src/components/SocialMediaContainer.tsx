import { Box } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import styles from "./SocialMedia.module.css";
import SocialMediaLinks from "./SocialMediaLinks";
import { useState } from "react";

const SocialMediaContainer = () => {
  return (
    <>
      <Box
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="1000"
        className={styles.socialContainer}
      >
        <Box className={styles.socialLink}>
          <SocialMediaLinks isActive={true} iconName="Linkedin">
            <FaLinkedin className={styles.iconProperty} />
          </SocialMediaLinks>
          <SocialMediaLinks iconName="Twitter">
            <FaXTwitter className={styles.iconProperty} />
          </SocialMediaLinks>
          <SocialMediaLinks iconName="Instagram">
            <FaInstagramSquare className={styles.iconProperty} />
          </SocialMediaLinks>
          <SocialMediaLinks iconName="Github">
            <ImGithub className={styles.iconProperty} />
          </SocialMediaLinks>
        </Box>
      </Box>
    </>
  );
};

export default SocialMediaContainer;
