import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#424242", // Dark gray
      contrastText: "#ffffff", // White
    },
    secondary: {
      main: "#f5f5f5", // Light gray
      contrastText: "#424242", // Dark gray
    },
    background: {
      default: "#ffffff", // White
      paper: "#f5f5f5", // Light gray
    },
    text: {
      primary: "#212121", // Near black
      secondary: "#757575", // Gray
    },
    divider: "#bdbdbd", // Medium gray
  },
});

export default theme;
