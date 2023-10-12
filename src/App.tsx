import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import Introduction from "./sections/Introduction";
import SocialMediaContainer from "./components/SocialMediaContainer";
import SectionHeading from "./components/SectionHeading";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import PortfolioDescription from "./components/PortfolioDescription";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav" "main" "footer"`}>
        <GridItem
          area="nav"
          bg="#070d1be6"
          position="fixed"
          top="0"
          zIndex="200"
          width="100%"
        >
          <NavBar />
        </GridItem>

        <GridItem area="main" top="80px" position="relative" bg=" #0a101e">
          <SocialMediaContainer />
          <Introduction />

          <About />
          <Skills />
          <Portfolio />
        </GridItem>

        {/* <GridItem area="footer" bg="red">
          Footer
        </GridItem> */}
      </Grid>
    </>
  );
}

export default App;
