import { Box } from "@chakra-ui/react";
import styles from "../styles/SharedStyle.module.css";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const Container = ({ children }: Props) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.divider}></Box>
      {children}
    </Box>
  );
};

export default Container;
