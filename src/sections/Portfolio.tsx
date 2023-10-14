import React from "react";
import Container from "../components/Container";
import PortfolioCards from "../components/PortfolioCards";
import SectionHeading from "../components/SectionHeading";

const Portfolio = () => {
  return (
    <Container id="Portfolio">
      <SectionHeading heading="Portfolio" />
      <PortfolioCards />
    </Container>
  );
};

export default Portfolio;
