import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HEROIMAGE from "../assets/Hero image.png";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box className="text-center">
          <Typography>Groceries Delivered in 90 Minute</Typography>
          <Typography>
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </Typography>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control py-3"
              placeholder="Search your product form here"
              aria-label="search"
              aria-describedby=""
              sx={{
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: " #009F7F",
                  color: " #FFFFFF",
                  border: "none",
                },
              }}
            />
            <Button
              startIcon={<SearchIcon />}
              size="small"
              variant="text"
              sx={{
                color: " #FFFFFF",
                borderRadius: "px",
                textTransform: "none",
                fontWeight: 600,
                backgroundColor: " #009F7F",
                padding: 1,
                paddingX: 3,
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Cart
            </Button>
          </div>
        </Box>
      </Box>
      <ProductCard />
    </Box>
  );
};
console.log("Home rendering");
export default Home;
