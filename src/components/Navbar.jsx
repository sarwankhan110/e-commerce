import Button from "@mui/material/Button";
import LOGO from "../assets/Logo.png";
import APPLE from "../assets/appple.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import CheckOut from "../components/CheckOut";
import React from "react";
import {
  Category as CategoryIcon,
  LocalGroceryStore as GroceryIcon,
  Kitchen as KitchenIcon,
  Pets as PetsIcon,
  CleaningServices as CleaningIcon,
  LocalDining as DiningIcon,
  FreeBreakfast as BreakfastIcon,
  LocalBar as BeverageIcon,
  Spa as BeautyIcon,
  Restaurant as MeatIcon,
} from "@mui/icons-material";
import { Link } from "react-router";

const Navbar = () => {
  const { checkOutProducts } = useSelector((state) => state.product);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    {
      name: "Fruits & Vegetables",
      icon: <GroceryIcon fontSize="small" />,
    },
    {
      name: "Meat & Fish",
      icon: <MeatIcon fontSize="small" />,
    },
    {
      name: "Snacks",
      icon: <DiningIcon fontSize="small" />,
    },
    {
      name: "Pet Care",
      icon: <PetsIcon fontSize="small" />,
    },
    {
      name: "Home & Cleaning",
      icon: <CleaningIcon fontSize="small" />,
    },
    {
      name: "Dairy",
      icon: <KitchenIcon fontSize="small" />,
    },
    {
      name: "Cooking",
      icon: <KitchenIcon fontSize="small" />,
    },
    {
      name: "Breakfast",
      icon: <BreakfastIcon fontSize="small" />,
    },
    {
      name: "Beverage",
      icon: <BeverageIcon fontSize="small" />,
    },
    {
      name: "Health & Beauty",
      icon: <BeautyIcon fontSize="small" />,
    },
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg mx-4 my-3 "
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={LOGO} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <div className="d-flex gap-1 border bordersuccess px-4 rounded-2">
                <img src={APPLE} alt="logo" />
                <li className="nav-item dropdown fw-medium">
                  <a
                    className="nav-link dropdown-toggle primary-green"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Grocery
                  </a>
                  <ul className="dropdown-menu border">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <span className="me-2">{item.icon}</span>
                            {item.name}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </div>
            </ul>
            <div className="d-flex gap-3">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll gap-4">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Offers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contacts
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                <Badge badgeContent={checkOutProducts?.length} color="success">
                  <Button
                    onClick={toggleDrawer(true)}
                    startIcon={<ShoppingCartOutlinedIcon />}
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
                </Badge>
                <Link to={`/login`}>
                  <button
                    className="btn primary-green-bg white-color fw-medium"
                    type="submit"
                  >
                    Join
                  </button>
                </Link>
                <button
                  className="btn primary-green-bg white-color fw-medium"
                  type="submit"
                >
                  Become a seller
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <CheckOut open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
