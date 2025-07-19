import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} from "../store/Slices/productSlice";

export default function CheckOut(props) {
  const { open, toggleDrawer } = props;
  const { checkOutProducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleRemoveItem = (productId) => {
    dispatch(removeProduct(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const calculateTotal = () => {
    return checkOutProducts
      ?.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const DrawerList = (
    <Box sx={{ width: { xs: "100%", sm: 400 }, p: 2 }} role="presentation">
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Your Cart ({checkOutProducts?.length || 0})
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Product List */}
      <Box sx={{ maxHeight: "60vh", overflowY: "auto", pr: 1 }}>
        {checkOutProducts?.map((product, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 2,
              mb: 2,
              p: 2,
              position: "relative",
              borderRadius: 1,
              backgroundColor: "background.paper",
              boxShadow: 1,
            }}
          >
            <img
              src={product.gallery?.[0]?.original || "/placeholder-product.jpg"}
              alt={product.name}
              style={{
                width: 80,
                height: 80,
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.unit}
              </Typography>

              {/* Quantity Controls */}
              <Box
                sx={{ display: "flex", alignItems: "center", mt: 1, gap: 1 }}
              >
                <IconButton
                  size="small"
                  onClick={() => handleDecreaseQuantity(product.id)}
                  disabled={product.quantity <= 1}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography
                  variant="body1"
                  sx={{ minWidth: 24, textAlign: "center" }}
                >
                  {product.quantity}
                </Typography>
                <IconButton
                  size="small"
                  onClick={() => handleIncreaseQuantity(product.id)}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>

              <Typography variant="body1" sx={{ mt: 1, fontWeight: 600 }}>
                ${(product.price * product.quantity).toFixed(2)}
              </Typography>
            </Box>

            {/* Remove Item Button */}
            <IconButton
              aria-label="delete"
              onClick={() => handleRemoveItem(product.id)}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "error.main",
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Checkout Summary */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Subtotal:</Typography>
          <Typography>${calculateTotal()}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography>Shipping:</Typography>
          <Typography>$0.00</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <Typography variant="subtitle1">Total:</Typography>
          <Typography variant="subtitle1">${calculateTotal()}</Typography>
        </Box>
      </Box>

      {/* Checkout Button */}
      <Button
        fullWidth
        variant="contained"
        size="large"
        disabled={!checkOutProducts?.length}
        sx={{
          backgroundColor: "#009F7F",
          "&:hover": { backgroundColor: "#008a6e" },
        }}
      >
        Proceed to Checkout
      </Button>
    </Box>
  );

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
