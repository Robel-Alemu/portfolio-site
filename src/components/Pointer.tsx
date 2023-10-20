import React, { useState, useEffect } from "react";
import styles from "../styles/Pointer.module.css";
import { Box } from "@chakra-ui/react";

const Pointer = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ left: e.clientX, top: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <Box
      className={styles.pointer}
      style={{ left: position.left, top: position.top }}
    ></Box>
  );
};

export default Pointer;
