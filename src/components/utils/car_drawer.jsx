import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { CookiesProvider, useCookies } from "react-cookie";

import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { itemData } from "../../data/data";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";

const CarDrawer = (id) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  console.log("shakjhsjkahs", id);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleAddToCart = (price) => {
    id.changeprice(price, "car");
    toggleDrawer();
  };
  const [cars, setCars] = useState(false);
  const [cookie] = useCookies(["room_guest"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://demo.turangh.com/holidays/package/iti/vehicle/update/${id.id}`
          // { credentials: "include" }
        );
        const result = await response.json();
        setCars(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://demo.turangh.com/holidays/package/iti/vehicle/update/${id.id}`
          // { credentials: "include" }
        );
        const result = await response.json();
        setCars(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [cookie]);
  console.log("cars update", cars);
  if (!cars) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <Typography
        sx={{ fontSize: ".8rem", fontWeight: 500, cursor: "pointer" }}
        align="right"
        color="primary"
        onClick={toggleDrawer}
      >
        Change
      </Typography>

      <Drawer open={drawerOpen} onClose={toggleDrawer} anchor="left">
        <List>
          {cars.map((item) => (
            <ListItem sx={{ borderBottom: "1px solid rgba(230, 230, 230, 1)" }}>
              <img
                src={item.img}
                alt="Product"
                style={{ width: "180px", height: "140px", marginRight: "16px" }}
              />
              <ListItemText
                primary={`${item.vehicleType}`}
                secondary={` Seat ${item.seatLimit}  (${item.vehicleCategory})`}
                sx={{ mr: 2 }}
              />

              <ListItemText primary={`x ${item.quantity}`} sx={{ mr: 2 }} />
              <Button variant="outlined">{`Pay Extra ${
                item.totalPrice - cars[0].totalPrice
              } Rs`}</Button>
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="add"
                  onClick={() =>
                    handleAddToCart(item.totalPrice - cars[0].totalPrice)
                  }
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default CarDrawer;
