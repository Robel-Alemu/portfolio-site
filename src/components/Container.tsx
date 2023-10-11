import { Box } from "@chakra-ui/react";
import styles from "../styles/Introduction.module.css";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const Container = ({ children }: Props) => {
  return <Box className={styles.container}>{children}</Box>;
};

export default Container;
