// CategoryCard.jsx
import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const CategoryCard = ({ image, label }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={2} sx={{ cursor: "pointer" }}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={label}
          sx={{ objectFit: "cover", backgroundColor: "#f5f5f5" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="p">
            {label}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CategoryCard;
