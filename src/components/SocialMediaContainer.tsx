import { Box } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import styles from "../styles/SocialMedia.module.css";
import SocialMediaLinks from "./SocialMediaLinks";
interface Props {
  section: string;
}
const SocialMediaContainer = ({ section }: Props) => {
  return (
    <>
      <Box
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="1000"
        className={
          section === "introduction"
            ? styles.socialContainer
            : styles.socialContainerContact
        }
      >
        <Box className={styles.socialLink}>
          <SocialMediaLinks
            isActive={true}
            iconName="Linkedin"
            address="https://linkedin.com/in/robel-alemu-98a34321a"
          >
            <FaLinkedin className={styles.iconProperty} />
          </SocialMediaLinks>
          <SocialMediaLinks
            iconName="Twitter"
            address="https://x.com/RobelJap?t=HD0iDXeh1dH1u_0TTXzFgQ&s=09"
          >
            <FaXTwitter className={styles.iconProperty} />
          </SocialMediaLinks>
          <SocialMediaLinks
            iconName="Instagram"
            address="https://instagram.com/robel_jap?igshid=NzZlODBkYWE4Ng=="
          >
            <FaInstagramSquare className={styles.iconProperty} />
          </SocialMediaLinks>
          <SocialMediaLinks
            iconName="Github"
            address="https://github.com/Robel-Alemu"
          >
            <ImGithub className={styles.iconProperty} />
          </SocialMediaLinks>
        </Box>
      </Box>
    </>
  );
};

export default SocialMediaContainer;
