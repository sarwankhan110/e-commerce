import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
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
import { Box } from "@mui/material";

const DropDown = () => {
  const [openItems, setOpenItems] = useState({});

  const menuItems = [
    {
      name: "Fruits & Vegetables",
      icon: <GroceryIcon />,
      subItems: ["Fresh Fruits", "Fresh Vegetables", "Herbs & Seasonings"],
    },
    {
      name: "Meat & Fish",
      icon: <MeatIcon />,
      subItems: ["Chicken", "Beef", "Seafood"],
    },
    {
      name: "Snacks",
      icon: <DiningIcon />,
      subItems: ["Chips", "Cookies", "Nuts"],
    },
    {
      name: "Pet Care",
      icon: <PetsIcon />,
      subItems: ["Dog Food", "Cat Food", "Pet Accessories"],
    },
    {
      name: "Home & Cleaning",
      icon: <CleaningIcon />,
      subItems: ["Detergents", "Disinfectants", "Cleaning Tools"],
    },
    {
      name: "Dairy",
      icon: <KitchenIcon />,
      subItems: ["Milk", "Cheese", "Yogurt"],
    },
    {
      name: "Cooking",
      icon: <KitchenIcon />,
      subItems: ["Oil", "Spices", "Rice & Grains"],
    },
    {
      name: "Breakfast",
      icon: <BreakfastIcon />,
      subItems: ["Cereal", "Bread", "Jam & Spreads"],
    },
    {
      name: "Beverage",
      icon: <BeverageIcon />,
      subItems: ["Juices", "Soft Drinks", "Tea & Coffee"],
    },
    {
      name: "Health & Beauty",
      icon: <BeautyIcon />,
      subItems: ["Shampoo", "Soap", "Skincare"],
    },
  ];

  const handleClick = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box className="px-5">
      <List className="text-xs xl:py-8 px-5">
        {menuItems.map((item, index) => (
          <div key={index}>
            <ListItem
              disablePadding
              className="rounded-md py-1"
              style={{ backgroundColor: "rgb(255, 255, 255)" }}
            >
              <ListItemButton
                onClick={() => handleClick(index)}
                className="flex w-full items-center py-2 font-semibold text-body-dark outline-none transition-all ease-in-expo focus:text-accent focus:outline-0 focus:ring-0 ltr:text-left rtl:text-right text-body-dark text-sm"
              >
                <ListItemIcon className="flex h-5 w-5 items-center justify-center ltr:mr-4 rtl:ml-4">
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
                {openItems[index] ? (
                  <ExpandLess className="h-3 w-3 ltr:ml-auto ltr:mr-4 rtl:ml-4 rtl:mr-auto" />
                ) : (
                  <ExpandMore className="h-3 w-3 ltr:ml-auto ltr:mr-4 rtl:ml-4 rtl:mr-auto" />
                )}
              </ListItemButton>
            </ListItem>
            <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((subItem, subIndex) => (
                  <ListItemButton
                    key={subIndex}
                    sx={{ pl: 4 }}
                    className="text-xs"
                  >
                    <ListItemText primary={subItem} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default DropDown;