import { Box, Stack } from "@mui/material";
import { Navbar } from "./components";
import { Hero, Categories, Promos } from "./sections";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack>
        <Hero />
        <Categories />
        <Promos />
      </Stack>
    </Box>
  );
};

export default App;
