import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/PortfolioCards.module.css";
import { Container } from "react-bootstrap";
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
