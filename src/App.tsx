import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import SocialMediaContainer from "./components/SocialMediaContainer";
import AboutHeading from "./components/AboutHeading";

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
          <AboutHeading />
        </GridItem>

        {/* <GridItem area="footer" bg="red">
          Footer
        </GridItem> */}
      </Grid>
    </>
  );
}

export default App;
