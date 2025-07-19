import { Box, Button, Chip, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { addProduct } from "../store/Slices/productSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const resp = await axios.get(`https://mock.redq.io/api/products`);
      const foundProduct = resp.data.data.find(
        (item) => item.id.toString() === params.product_id
      );
      setProduct(foundProduct);
    };

    fetchProductDetails();
  }, [params.product_id]);

  const dispatch = useDispatch()

  if (!product) return <Box>Loading...</Box>;
  

  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", p: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          mb: 4,
        }}
      >
        {/* Product Image */}
        <Box sx={{ flex: 1 }}>
          <img
            src={product.gallery[0]?.original}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: 8,
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Product Info */}
        <Box sx={{ flex: 1 }}>
          {/* Product Name and Wishlist */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              {product.name}
            </Typography>

            <Button
              startIcon={<FavoriteBorderIcon />}
              size="small"
              variant="text"
              sx={{
                minWidth: 0,
                width: 40,
                height: 40,
                color: "#009F7F",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1px solid #e0e0e0",
                "& .MuiButton-startIcon": { margin: 0 },
                "&:hover": {
                  backgroundColor: "#009F7F",
                  color: "#FFFFFF",
                  border: "none",
                },
              }}
            />
          </Box>

          {/* Unit and Ratings */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {product?.unit}
            </Typography>
            <Chip
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {product?.ratings && <span>{product.ratings}</span>}
                  <StarIcon fontSize="small" />
                </Box>
              }
              size="small"
              sx={{
                padding: 1,
                color: "white",
                backgroundColor: "#009F7F",
                borderRadius: 1,
                "& .MuiChip-label": {
                  display: "flex",
                  alignItems: "center",
                },
              }}
            />
          </Box>

          {/* Description */}
          <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
            {product?.description}
          </Typography>

          {/* Price */}
          <Typography
            variant="h5"
            sx={{ mb: 3, fontWeight: 600, color: "#009F7F" }}
          >
            ${product?.price}
          </Typography>

          {/* Add to Cart and Stock */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
              gap: 2,
            }}
          >
            <Button
              onClick={() => {
                dispatch(addProduct(product));
              }}
              variant="contained"
              fullWidth
              sx={{
                textTransform: "none",
                backgroundColor: "#009F7F",
                borderRadius: "8px",
                py: 1.5,
                fontWeight: 500,
                "&:hover": { backgroundColor: "#008a6e" },
              }}
            >
              Add to Cart
            </Button>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", whiteSpace: "nowrap" }}
            >
              {product?.quantity} pieces available
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Category
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Chip
                label="Fruits & Vegetables"
                size="small"
                sx={{
                  padding: 1,
                  textTransform: "capitalize",
                  color: "#008a6e",
                  backgroundColor: "#ffffff",
                  borderRadius: 1,
                  border: "1px solid #e0e0e0",
                  "&:hover": { borderColor: "#008a6e" },
                }}
              />
              <Chip
                label="Fruits"
                size="small"
                sx={{
                  padding: 1,
                  textTransform: "capitalize",
                  color: "#008a6e",
                  backgroundColor: "#ffffff",
                  borderRadius: 1,
                  border: "1px solid #e0e0e0",
                  "&:hover": { borderColor: "#008a6e" },
                }}
              />
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Seller
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {product?.type?.name}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Product Details Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Product Details
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", lineHeight: 1.6 }}
        >
          {product?.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
