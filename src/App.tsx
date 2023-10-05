import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav" bg="green">
        <NavBar />
      </GridItem>

      <GridItem area="main" bg="yellow">
        Main
      </GridItem>
      <GridItem area="footer" bg="red">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
