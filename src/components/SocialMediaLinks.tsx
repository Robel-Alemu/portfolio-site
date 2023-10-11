import { Box, Text, Link } from "@chakra-ui/react";
import styles from "../styles/SocialMedia.module.css";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  iconName: string;
  isActive?: boolean;
}
const SocialMediaLinks = ({ children, iconName, isActive }: Props) => {
  const [isLinkedinActive, setIsLinkdenActive] = useState(true);

  const active = isLinkedinActive && isActive ? styles.active : "";
  return (
    <>
      <Link
        _hover={{ textDecoration: "none" }}
        onMouseEnter={() => setIsLinkdenActive(false)}
        textDecoration="none"
        className={`${styles.socialButton} ${active}`}
      >
        <Box className={styles.socialIcon}>{children}</Box>
        <Text className={styles.iconName}>{iconName}</Text>
      </Link>
    </>
  );
};

export default SocialMediaLinks;
