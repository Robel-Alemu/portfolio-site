import { Badge, Box, Heading, Icon, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/PortfolioCards.module.css";
import image from "../assets/hero-img.jpg";
import PortfolioDescription from "./PortfolioDescription";
import portfolio from "../utils/portfolio";
const PortfolioCards = () => {
  return (
    <SimpleGrid
      className={styles.row}
      columns={{ sm: 2, md: 3, lg: 2, xl: 3 }}
      spacing={10}
      //   paddingX={10}
      paddingY="5"
      justifyContent="space-around"
    >
      {portfolio.map((project) => (
        <Box>
          {/* <PortfolioDescription /> */}
          <Box className={styles.content}>
            <Box className={styles.overlay}></Box>
            <Image className={styles.contentImage} src={project.image} />
            <Box
              className={`${styles.details} ${styles.fadeInTop} ${styles.fadeInRight}`}
            >
              <Heading>{project.name}</Heading>
            </Box>
          </Box>
        </Box>
      ))}
      {/* 
      <Box>
        <PortfolioDescription />
        <Box className={styles.content}>
          <Box className={styles.overlay}></Box>
          <Image className={styles.contentImage} src={image} />
          <Box
            className={`${styles.details} ${styles.fadeInTop} ${styles.fadeInRight}`}
          >
            <Heading>Title</Heading>
            <Heading>Title</Heading>
          </Box>
        </Box>
      </Box>

      <Box>
        <PortfolioDescription />
        <Box className={styles.content}>
          <Box className={styles.overlay}></Box>
          <Image className={styles.contentImage} src={image} />
          <Box
            className={`${styles.details} ${styles.fadeInTop} ${styles.fadeInRight}`}
          >
            <Heading>Title</Heading>
            <Heading>Title</Heading>
          </Box>
        </Box>
        <Badge></Badge>
      </Box>

      <Box>
        <PortfolioDescription />
        <Box className={styles.content}>
          <Box className={styles.overlay}></Box>
          <Image className={styles.contentImage} src={image} />
          <Box
            className={`${styles.details} ${styles.fadeInTop} ${styles.fadeInRight}`}
          >
            <Heading>Title</Heading>
            <Heading>Title</Heading>
          </Box>
        </Box>
      </Box>
      <Box>
        <PortfolioDescription />
        <Box className={styles.content}>
          <Box className={styles.overlay}></Box>
          <Image className={styles.contentImage} src={image} />
          <Box
            className={`${styles.details} ${styles.fadeInTop} ${styles.fadeInRight}`}
          >
            <Heading>Title</Heading>
            <Heading>Title</Heading>
          </Box>
        </Box>
      </Box>
      <Box>
        <PortfolioDescription />
        <Box className={styles.content}>
          <Box className={styles.overlay}></Box>
          <Image className={styles.contentImage} src={image} />
          <Box
            className={`${styles.details} ${styles.fadeInTop} ${styles.fadeInRight}`}
          >
            <Heading>Title</Heading>
            <Heading>Title</Heading>
          </Box>
        </Box>
      </Box>
      <Box>
        <PortfolioDescription />
        <Box className={styles.content}>
          <Box className={styles.overlay}></Box>
          <Image className={styles.contentImage} src={image} />
          <Box
            className={`${styles.details} ${styles.fadeInTop} ${styles.fadeInRight}`}
          >
            <Heading>Title</Heading>
            <Heading>Title</Heading>
          </Box>
        </Box>
      </Box> */}
    </SimpleGrid>
  );
};

export default PortfolioCards;
