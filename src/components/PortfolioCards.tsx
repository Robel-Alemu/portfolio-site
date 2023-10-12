import { Box, Heading, Icon, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/PortfolioCards.module.css";
import image from "../assets/hero-img.jpg";
import PortfolioDescription from "./PortfolioDescription";
const PortfolioCards = () => {
  return (
    <SimpleGrid
      className={styles.row}
      columns={{ sm: 2, md: 3, lg: 2, xl: 2 }}
      spacing={10}
      paddingX={10}
      paddingY="5"
      justifyContent="space-around"
    >
      {/* <Box className={styles.portfolioCard}>
        <Box className={styles.portfolioItem}>
          <Box className={`${styles.portfolio} ${styles.zoom}`}>
            <Box className={styles.zoomIn}>
              <Image width="100%" height="auto" src="../assets/hero-img.jpg" />
            </Box>
            <Box className={styles.portfolioHover}>
              <Icon></Icon>
              <Heading>Product Design</Heading>
              <Heading>Product Design</Heading>
            </Box>
          </Box>
        </Box>
      </Box> */}
      {/* <Image width="100%" height="auto" src="../assets/hero-img.jpg" /> */}
      <Box>
        {/* <PortfolioDescription /> */}
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
        {/* <PortfolioDescription /> */}
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
    </SimpleGrid>
  );
};

export default PortfolioCards;
