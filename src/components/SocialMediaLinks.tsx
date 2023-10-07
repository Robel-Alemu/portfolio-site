import { Box, Text, Link } from "@chakra-ui/react";

import styles from "./SocialMedia.module.css";
interface Props {
  children: React.ReactNode;
  iconName: string;
}
const SocialMediaLinks = ({ children, iconName }: Props) => {
  return (
    <>
      <Link
        _hover={{ textDecoration: "none" }}
        textDecoration="none"
        className={`${styles.socialButton} `}
      >
        <Box className={styles.socialIcon}>{children}</Box>
        <Text className={styles.iconName}>{iconName}</Text>
      </Link>
    </>
  );
};

export default SocialMediaLinks;
