import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CategoryCard } from "../components";
import { categoryCards } from "../constants";

const Categories = () => {
  return (
    <Stack
      sx={{
        padding: "50px 100px 24px",
      }}
      spacing={4}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "28px",
          }}
        >
          Shop By Categories
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <Button variant="outlined" sx={{}}>
            See All
          </Button>
          <Box>
            <ArrowBackIosIcon
              sx={{
                cursor: "pointer",
              }}
              fontSize="medium"
            />
            <ArrowForwardIosIcon
              sx={{
                cursor: "pointer",
              }}
              fontSize="medium"
            />
          </Box>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {categoryCards.map((item) => (
          <CategoryCard
            key={item.label}
            image={item.image}
            label={item.label}
          />
        ))}
      </Grid>
    </Stack>
  );
};

export default Categories;
