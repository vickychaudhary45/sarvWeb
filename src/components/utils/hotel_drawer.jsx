import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { itemData } from "../../data/data";
import { CookiesProvider, useCookies } from "react-cookie";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";

const Hotel_Drawer = (id) => {
  const [hotelprice, setHotelPrice] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Standard");
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [hotels, setHotels] = useState(false);
  const [cookie] = useCookies(["room_guest"]);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAddToCart = (price) => {
    id.changeprice(price, "hotel");
    toggleDrawer();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://demo.turangh.com/holidays/package/iti/hotel/update/${id.id}`
          // { credentials: "include" }
        );
        const result = await response.json();
        setHotels(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  if (!hotels) {
    return <div>Loading...</div>;
  }
  console.log(hotels);
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
          {hotels.map((data) => {
            const payableFunc = () => {
              let priceResult;
              for (let roomVal of data.rooms) {
                if (roomVal.roomType === selectedRoom) {
                  priceResult = roomVal.payable;
                }
              }
              return priceResult;
            };
            return (
              <ListItem
                sx={{ borderBottom: "1px solid rgba(230, 230, 230, 1)" }}
              >
                <img
                  src={data.img}
                  alt="Hotel"
                  style={{
                    width: "180px",
                    height: "140px",
                    marginRight: "16px",
                  }}
                />
                <ListItemText primary={data.hotelName} sx={{ mr: 2 }} />

                <Select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  style={{ width: "100px", marginRight: "16px" }}
                >
                  {data.rooms.map((room) => (
                    <MenuItem value={room.roomType}>{room.roomType}</MenuItem>
                  ))}
                </Select>

                <Button variant="outlined">Pay Extra {payableFunc()} Rs</Button>

                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="add"
                    onClick={() => handleAddToCart(payableFunc())}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Hotel_Drawer;
