import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import { Favorite, ShoppingCart } from "@mui/icons-material";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="div">
            {product.name}
          </Typography>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Box mt={2}>
          <Typography variant="body1" color="text.primary">
            Price: ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Inventory: {product.inventoryCount}
          </Typography>
        </Box>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCart />}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
