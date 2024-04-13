import { Box, Stack } from "@mui/material";
import { Navbar } from "./components";
import { Categories } from "./sections";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack>
        <Categories />
      </Stack>
    </Box>
  );
};

export default App;
