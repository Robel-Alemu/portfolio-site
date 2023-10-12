import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/PortfolioCards.module.css";
import { Container } from "react-bootstrap";
const PortfolioDescription = () => {
  return (
    <Box className={styles.projectDetails}>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        accusamus autem itaque blanditiis enim debitis totam facilis reiciendis
        voluptate aspernatur!
      </Text>
      <Box className={styles.quote}></Box>
    </Box>
  );
};

export default PortfolioDescription;
