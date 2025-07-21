import { Box, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HEROIMAGE from "../assets/Hero.png";
import IMG1 from "../assets/image1.png";
import IMG2 from "../assets/image2.png";
import IMG3 from "../assets/image3.png";
import IMG4 from "../assets/image4.png";
import ProductCard from "../components/ProductCard";
import DropDown from "../components/dropDown/DropDown";

const Home = () => {
  return (
    <Box>
      <Box
        className="text-center"
        sx={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `url(${HEROIMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1, mt: 25 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Groceries Delivered in 90 Minutes
          </Typography>
          <Typography sx={{ mb: 4 }} className="text-secondary">
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </Typography>
          <Box
            sx={{
              display: "flex",
              maxWidth: "100vh",
              mx: "auto",
              "& .MuiTextField-root": {
                flexGrow: 1,
                backgroundColor: "white",
                borderRadius: "4px 0 0 4px",
                boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                border: "solid 1px",
                borderColor: "#ffffffff",
                "&:hover": {
                  border: "solid 1px",
                  borderColor: "#009F7F",
                },
              },
            }}
          >
            <TextField
              placeholder="Search your product from here"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
              }}
            />
            <Button
              startIcon={<SearchIcon />}
              size="large"
              variant="contained"
              sx={{
                backgroundColor: "#009F7F",
                borderRadius: "0 4px 4px 0",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                "&:hover": {
                  backgroundColor: "#008a6e",
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
          padding: "20px",
          width: "100%",
          boxSizing: "border-box",
          overflowX: "auto",
          "& img": {
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
            flexShrink: 0,
            width: "calc(25% - 15px)",
            "@media (max-width: 768px)": {
              width: "calc(50% - 10px)",
            },
            "@media (max-width: 480px)": {
              width: "100%",
            },
          },
        }}
      >
        <img src={IMG1} alt="Image 1" />
        <img src={IMG2} alt="Image 2" />
        <img src={IMG3} alt="Image 3" />
        <img src={IMG4} alt="Image 4" />
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 4,
        }}
      >
        <DropDown />
        <ProductCard />
      </Box>
    </Box>
  );
};
export default Home;
