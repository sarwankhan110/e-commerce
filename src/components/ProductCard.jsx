import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/Slices/productSlice";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let resp = await axios.get(
        "https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish"
      );
      setProducts(resp.data.data);
    };

    fetchProducts();
  }, []);
  const dispatch = useDispatch();
  console.log(products);
  return (
    <Box className="">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {products?.map((product) => {
          return (
            <Card
              sx={{
                minWidth: 240,
                maxWidth: 280,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                },
                borderRadius: 1,
                padding: 1,
                overflow: "hidden",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Link to={`/productDetails/${product.id}`}>
                  <CardMedia
                    sx={{
                      height: 200,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                    image={product?.image.thumbnail}
                  />
                </Link>

                <Chip
                  label={product?.quantity ? `${product.quantity}%` : ""}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    textTransform: "capitalize",
                    color: "white",
                    backgroundColor: " #EAB308",
                  }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Tooltip title={product?.title} arrow>
                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    sx={{
                      fontWeight: 600,
                      lineHeight: 1.3,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      cursor: "pointer",
                    }}
                  >
                    {product?.name}
                  </Typography>
                </Tooltip>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    mb: 2,

                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {product?.unit}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    textDecoration: "line-through",
                  }}
                >
                  ${product?.price}
                </Typography>
              </CardContent>

              <CardActions
                sx={{ p: 2, pt: 0, justifyContent: "space-between" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "normal",
                    color: "primary.main",
                    color: " #009F7F",
                  }}
                >
                  ${product?.price}
                </Typography>
                <Button
                  onClick={() => {
                    dispatch(addProduct(product));
                  }}
                  startIcon={<ShoppingBasketIcon />}
                  size="small"
                  variant="text"
                  sx={{
                    color: " #009F7F",
                    borderRadius: "32px",
                    textTransform: "none",
                    fontWeight: 600,
                    backgroundColor: " #FFFFFF",
                    padding: 1,
                    paddingX: 3,
                    border: "2px solid #e0e0e0",

                    "&:hover": {
                      backgroundColor: " #009F7F",
                      color: " #FFFFFF",
                      border: "2px solid #009F7F",
                    },
                  }}
                >
                  Cart
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductCard;
