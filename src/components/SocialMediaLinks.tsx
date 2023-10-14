import { Box, Text, Link } from "@chakra-ui/react";
import styles from "../styles/SocialMedia.module.css";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  iconName: string;
  isActive?: boolean;
  address: string;
}
const SocialMediaLinks = ({ children, iconName, isActive, address }: Props) => {
  const [isLinkedinActive, setIsLinkdenActive] = useState(true);

  const active = isLinkedinActive && isActive ? styles.active : "";
  return (
    <>
      <Link
        as="a"
        target="_blank"
        href={address}
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
