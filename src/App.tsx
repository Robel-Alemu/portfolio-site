import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import Introduction from "./sections/Introduction";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid
      templateAreas={{
        xl: `"nav" "main"`,
        base: `"nav" "main"`,
        lg: `"nav" "main"`,
        md: `"nav" "main"`,
      }}
      templateColumns={{
        xl: "1fr",
        base: "1fr",
        lg: "1fr",
        md: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="main">
        <Introduction />
        <About />
        <Skills />
        <Portfolio />
        <Box bg="#070d1b">
          <Contact />
        </Box>

        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
