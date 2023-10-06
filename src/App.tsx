import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

// import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav" "main" "footer"`}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <GridItem area="main">{/* <Header /> */}</GridItem>

        <GridItem area="footer" bg="red">
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
