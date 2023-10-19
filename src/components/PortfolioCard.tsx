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

import { FaGithub } from "react-icons/fa";
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
  return (
    <Card width="100%">
      <Image src={portfolio.image} />
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
        <Box display={{ xl: "inline-flex", lg: "inline-flex" }} marginTop={1}>
          {portfolio.techs.map((tech) => (
            <Badge margin={1} colorScheme="green" variant="solid">
              {tech}
            </Badge>
          ))}
        </Box>
      </CardBody>
    </Card>
  );
};

export default PortfolioCard;
