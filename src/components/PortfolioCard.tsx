import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Card,
  CardBody,
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import { FaGithub } from "react-icons/fa";
import PortfolioDescription from "./PortfolioDescription";
import PortfolioDetails from "./PortfolioDetails";
import styles from "../styles/PortfolioCards.module.css";
interface Portfolio {
  name: string;
  image: string;
  techs: string[];
  description: string;
  address: string;
  github: string;
}
interface Props {
  portfolio: Portfolio;
}

const PortfolioCard = ({ portfolio }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (isModalOpen)
    return (
      <PortfolioDetails
        portfolio={portfolio}
        onClose={() => setIsModalOpen(false)}
      />
    );
  return (
    <Card
      className={styles.card}
      width="100%"
      onClick={() => setIsModalOpen(true)}
    >
      <Image
        src={portfolio.image}
        bg="linear-gradient(to bottom, #2d4167, #2a3344)"
      />
      <CardBody bg="#192135">
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Text color="white">{portfolio.name}</Text>
          </Box>

          <Flex>
            {portfolio.github ? (
              <IconButton
                paddingLeft={5}
                href={portfolio.github}
                target="_blank"
                as="a"
                _hover={{ transform: "scale(1.2)" }}
                boxSize="20px"
                size="lg"
                variant="link"
                icon={<FaGithub />}
                aria-label={""}
              />
            ) : (
              ""
            )}

            <IconButton
              href={portfolio.address}
              target="_blank"
              as="a"
              _hover={{ transform: "scale(1.2)" }}
              boxSize="20px"
              size="lg"
              variant="link"
              icon={<ExternalLinkIcon />}
              aria-label={""}
            />
          </Flex>
        </Box>
        <Box marginTop={1}>
          {portfolio.techs.map((tech) => (
            <Badge margin={1} colorScheme="teal" variant="solid">
              {tech}
            </Badge>
          ))}
        </Box>
      </CardBody>
    </Card>
  );
};

export default PortfolioCard;
