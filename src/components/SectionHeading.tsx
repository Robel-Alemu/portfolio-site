import { Box, Heading, Hide } from "@chakra-ui/react";
import styles from "../styles//SharedStyle.module.css";
import style2 from "../styles/About2.module.css";
interface Props {
  heading: string;
}
const SectionHeading = ({ heading }: Props) => {
  return (
    <Box className={styles.container}>
      <Box className={style2.heading}>
        <Heading className={style2.title}>{heading}</Heading>
        <Hide below="md">
          <Heading className={style2.subtitle}>{heading}</Heading>
        </Hide>
      </Box>
      {/* <Box></Box> */}
      <Box className={styles.divider2}></Box>
    </Box>
  );
};

export default SectionHeading;
