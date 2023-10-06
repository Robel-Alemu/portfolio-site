import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav" "main" "footer"`}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <GridItem area="main">
          <Introduction />
        </GridItem>

        <GridItem area="footer" bg="red">
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
