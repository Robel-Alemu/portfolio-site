import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav" bg="green">
        Nav
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
