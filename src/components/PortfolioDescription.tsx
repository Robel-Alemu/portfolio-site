import { Box, Text } from "@chakra-ui/react";
import styles from "../styles/PortfolioCards.module.css";
interface Props {
  description: string;
}
const PortfolioDescription = ({ description }: Props) => {
  return (
    <Box className={styles.projectDetails}>
      <Text color="#a9adb8">{description}</Text>
      <Box className={styles.quote}></Box>
    </Box>
  );
};

export default PortfolioDescription;
