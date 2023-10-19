import { Box } from "@chakra-ui/react";
import styles from "../styles/SharedStyle.module.css";
import React from "react";
interface Props {
  children: React.ReactNode;
  id: string;
}
const Container = ({ children, id }: Props) => {
  return (
    <Box
      className={
        id === "Portfolio" ? styles.containerPortfolio : styles.container
      }
      id={id}
    >
      <Box className={styles.divider}></Box>
      {children}
    </Box>
  );
};

export default Container;
