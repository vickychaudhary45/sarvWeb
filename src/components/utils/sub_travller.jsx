import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextareaAutosize,
} from '@mui/material';

const TravelerForm = () => {
  const [open, setOpen] = useState(false);
  const [travelers, setTravelers] = useState([
    {
      name: '',
      pickupPlace: '',
      pickupAddress: '',
      dropPlace: '',
      dropAddress: '',
      phone: '',
      email: '',
      gstNo: '',
    },
  ]);

  const handleAddSubTraveler = () => {
    setTravelers((prevTravelers) => [
      ...prevTravelers,
      {
        name: '',
        pickupPlace: '',
        pickupAddress: '',
        dropPlace: '',
        dropAddress: '',
        phone: '',
        email: '',

      },
    ]);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  sx={{color:"white"}} onClick={handleOpen}>
      Proceed to Book Online
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle style={{ backgroundColor: 'teal', color: 'white' }}>
          Traveler Details
        </DialogTitle>
        <DialogContent>
          {travelers.map((traveler, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <DialogContentText>Traveler {index + 1}</DialogContentText>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                variant="outlined"
                value={traveler.name}
                onChange={(e) => {
                  // ...
                }}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Pickup Place</InputLabel>
                <Select
                  value={traveler.pickupPlace}
                  onChange={(e) => {
                    const updatedTravelers = [...travelers];
                    updatedTravelers[index].pickupPlace = e.target.value;
                    setTravelers(updatedTravelers);
                  }}
                >
                  <MenuItem value="Airport">Airport</MenuItem>
                  <MenuItem value="Hotel">Hotel</MenuItem>
                  <MenuItem value="Train Station">Train Station</MenuItem>
                </Select>
              </FormControl>
              <TextareaAutosize
                minRows={3}
                placeholder="Pickup Address"
                value={traveler.pickupAddress}
                onChange={(e) => {
                  const updatedTravelers = [...travelers];
                  updatedTravelers[index].pickupAddress = e.target.value;
                  setTravelers(updatedTravelers);
                }}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Drop Place</InputLabel>
                <Select
                variant="outlined"
                  value={traveler.dropPlace}
                  onChange={(e) => {
                    const updatedTravelers = [...travelers];
                    updatedTravelers[index].dropPlace = e.target.value;
                    setTravelers(updatedTravelers);
                  }}
                >
                  <MenuItem value="Airport">Airport</MenuItem>
                  <MenuItem value="Hotel">Hotel</MenuItem>
                  <MenuItem value="Train Station">Train Station</MenuItem>
                </Select>
              </FormControl>
              <TextareaAutosize
                minRows={3}
                placeholder="Drop Address"
                value={traveler.dropAddress}
                onChange={(e) => {
                  const updatedTravelers = [...travelers];
                  updatedTravelers[index].dropAddress = e.target.value;
                  setTravelers(updatedTravelers);
                }}
              />
              <TextField
                label="Phone"
                fullWidth
                margin="normal"
                variant="outlined"
                value={traveler.phone}
                onChange={(e) => {
                  const updatedTravelers = [...travelers];
                  updatedTravelers[index].phone = e.target.value;
                  setTravelers(updatedTravelers);
                }}
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                value={traveler.email}
                onChange={(e) => {
                  const updatedTravelers = [...travelers];
                  updatedTravelers[index].email = e.target.value;
                  setTravelers(updatedTravelers);
                }}
              />
              <TextField
                label="GST No (Optional)"
                fullWidth
                margin="normal"
                variant="outlined"
                value={traveler.gstNo}
                onChange={(e) => {
                  const updatedTravelers = [...travelers];
                  updatedTravelers[index].gstNo = e.target.value;
                  setTravelers(updatedTravelers);
                }}
              />
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddSubTraveler} color="primary" variant="contained">
            Add Sub Traveler
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>


    </div>
  );
};

export default TravelerForm;
