import { useState, useEffect } from "react";
import { BsShareFill } from "react-icons/bs";
import { MdFileDownload } from "react-icons/md";
import "../assets/css/hd.css";
import { useParams } from "react-router-dom";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdDirectionsRun } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
import img1 from "../../public/data/pilgrithm/kedarnatath.jpg";
import img2 from "../../public/data/pilgrithm/2.jpg";
import img3 from "../../public/data/pilgrithm/3.jpeg";
import img4 from "../../public/data/pilgrithm/4.jpg";

import hotel from "../../public/data/hotel.jpg";
import { FaTelegram } from "react-icons/fa6";
import ActCard from "./activity";
import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { Textarea } from "@mui/joy";
import { useNavigate } from "react-router-dom/dist";

function wordToTitleCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
function divideSentence(sentence) {
  const words = sentence.split(" ");
  if (words.length < 3) {
    return ["Please provide a longer sentence", ""];
  }

  const firstPart = words.slice(0, 2).join(" ");
  const secondPart = words.slice(2).join(" ");

  return [firstPart, secondPart];
}

const sentence = "This is a sample sentence for demonstration.";
const [part1, part2] = divideSentence(sentence);

const bookingDetails = () => {
  const { id } = useParams();
  const [activeComponent, setActiveComponent] = useState("itinerary");
  const [apidata, setapidata] = useState(false);
  const [addressType, setAddressType] = useState("");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // packageName: "Manali Holiday New",
    // dateOfTravel: "24 - 08 - 2023",
    // travellers: "2 Adults 0 Child",
    // totalAmount: "₹ 31,900",
    leadFirstName: "",
    leadLastName: "",
    pickupAddressType: "",
    pickupAddress: "",
    dropAddressType: "",
    dropAddress: "",
    billingTitle: "",
    billingFirstName: "",
    billingLastName: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingPincode: "",
    billingContact: "",
    billingEmail: "",
    billingGst: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveFormDataToLocalStorage = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const loadFormDataFromLocalStorage = () => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  };

  useEffect(() => {
    loadFormDataFromLocalStorage();
  }, []);

  useEffect(() => {
    saveFormDataToLocalStorage();
  }, [formData]);

  const handleNextClick = () => {
    setFormData({
      leadFirstName: "",
      leadLastName: "",
      pickupAddressType: "",
      pickupAddress: "",
      dropAddressType: "",
      dropAddress: "",
      billingTitle: "",
      billingFirstName: "",
      billingLastName: "",
      billingAddress: "",
      billingCity: "",
      billingState: "",
      billingPincode: "",
      billingContact: "",
      billingEmail: "",
      billingGst: "",
    });
    navigate("/booking_confirm");
  };

  const handleBackClick = () => {
    navigate("/booking");
  };

  const handleChange1 = (event) => {
    setAddressType(event.target.value);
  };

  return (
    <div className="holidayDetails">
      <div className="advl-search">
        <h4>Booking Confirmed </h4>
        <h1>Your Adventure Awaits!</h1>
      </div>
      <div
        className="hd_head"
        style={{
          padding: "2rem 2rem 0px 3rem",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <h3 className="package_title">Confirm Booking Details</h3>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div
            style={{
              fontFamily: "Roboto",
              padding: "10px 0px 20px 0px",
              color: "#C9CED3",
            }}
          >
            Booking Summary
          </div>
          <div
            style={{
              fontFamily: "Roboto",
              padding: "10px 0px 20px 0px",
              borderBottom: "2px solid blue",
              fontWeight: 500,
            }}
          >
            Traveller Details
          </div>
        </div>
      </div>

      <div className="hd-body" sty>
        <div style={{ width: "75%", padding: "30px", fontFamily: "Roboto" }}>
          <div style={{}}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 16 }}
              >
                <Grid item xs={3} sm={4} md={4}>
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Package Name
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    Manali Holiday New
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Date of Travel
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    24 - 08 - 2023
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Travellers
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    2 Adults 0 Child
                  </div>
                </Grid>

                <Grid item xs={2} sm={4} md={4}>
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Total Amount
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    ₹ 31, 900
                  </div>
                </Grid>
              </Grid>
            </Box>
            <div style={{ paddingTop: "20px" }}>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "larger",
                  borderBottom: "2px solid #DEE3EA",
                  paddingBottom: "10px",
                }}
              >
                Travellers Details
              </div>
              <div style={{ paddingTop: "8px" }}>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControlLabel
                    value="Lead"
                    control={<Radio size="small" />}
                    label="Lead traveller data only"
                  />
                  <FormControlLabel
                    value="Data"
                    control={<Radio size="small" />}
                    label="Data for all travellers"
                  />
                </RadioGroup>
              </div>
              <div
                style={{
                  paddingTop: "20px",
                  fontWeight: 500,
                  borderBottom: "2px solid #DEE3EA",
                }}
              >
                <div>Lead travellers details:</div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    padding: "20px 10px 10px 0px",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="First Name*"
                    variant="outlined"
                    size="small"
                    style={{ backgroundColor: "white", width: "24.08%" }}
                    name="leadFirstName"
                    value={formData.leadFirstName}
                    onChange={handleChange}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Last Name*"
                    variant="outlined"
                    size="small"
                    style={{ backgroundColor: "white", width: "24.08%" }}
                    name="leadLastName"
                    value={formData.leadLastName}
                    onChange={handleChange}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    padding: "10px 10px 10px 0px",
                  }}
                >
                  <FormControl style={{ width: "25%" }} size="small">
                    <InputLabel id="demo-simple-select-label">
                      Pickup Address Type*
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.pickupAddressType}
                      label="Pickup Address Type*"
                      onChange={handleChange}
                      style={{ backgroundColor: "white" }}
                      name="pickupAddressType"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <Textarea
                    color="neutral"
                    minRows={3}
                    placeholder="Pickup Address*"
                    size="md"
                    variant="outlined"
                    style={{ width: "25%", backgroundColor: "white" }}
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleChange}
                  />
                  <FormControl style={{ width: "25%" }} size="small">
                    <InputLabel id="demo-simple-select-label">
                      Drop Address Type*
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.dropAddressType}
                      label="Drop Address Type*"
                      onChange={handleChange}
                      style={{ backgroundColor: "white" }}
                      name="dropAddressType"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <Textarea
                    color="neutral"
                    minRows={2}
                    placeholder="Pickup Address*"
                    size="md"
                    variant="outlined"
                    style={{ width: "25%", backgroundColor: "white" }}
                    name="dropAddress"
                    value={formData.dropAddress}
                    onChange={handleChange}
                  />
                </div>
                <div
                  style={{
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    fontSize: "smaller",
                    color: "#1E2125",
                    fontWeight: 400,
                  }}
                >
                  Note: Pickup & Drop address should be in the same city where
                  your activity/adventure belongs to
                </div>
              </div>
              <div style={{ borderBottom: "2px solid #DEE3EA" }}>
                <div
                  style={{
                    fontWeight: 500,
                    padding: "15px 0px 15px 0px",
                  }}
                >
                  Billing Details:
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    padding: "10px 10px 10px 0px",
                  }}
                >
                  <FormControl style={{ width: "25%" }} size="small">
                    <InputLabel id="demo-simple-select-label">Title</InputLabel>
                    <Select
                      labelId="billingTitleLabel"
                      id="billingTitle"
                      name="billingTitle"
                      value={formData.billingTitle}
                      onChange={handleChange}
                      label="Title"
                      style={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="billingFirstName"
                    name="billingFirstName"
                    label="First Name"
                    variant="outlined"
                    size="small"
                    value={formData.billingFirstName}
                    onChange={handleChange}
                    style={{ backgroundColor: "white", width: "25%" }}
                  />
                  <TextField
                    id="billingLastName"
                    name="billingLastName"
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    value={formData.billingLastName}
                    onChange={handleChange}
                    style={{ backgroundColor: "white", width: "25%" }}
                  />
                  <TextField
                    id="billingAddress"
                    name="billingAddress"
                    label="Address"
                    variant="outlined"
                    size="small"
                    value={formData.billingAddress}
                    onChange={handleChange}
                    style={{ backgroundColor: "white", width: "25%" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    padding: "10px 10px 10px 0px",
                  }}
                >
                  <FormControl style={{ width: "25%" }} size="small">
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                      labelId="billingCityLabel"
                      id="billingCity"
                      name="billingCity"
                      value={formData.billingCity}
                      onChange={handleChange}
                      label="City"
                      style={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl style={{ width: "25%" }} size="small">
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                      labelId="billingStateLabel"
                      id="billingState"
                      name="billingState"
                      value={formData.billingState}
                      onChange={handleChange}
                      label="State"
                      style={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="billingPincode"
                    name="billingPincode"
                    label="Pincode"
                    variant="outlined"
                    size="small"
                    value={formData.billingPincode}
                    onChange={handleChange}
                    style={{ backgroundColor: "white", width: "25%" }}
                  />
                  <TextField
                    id="billingContact"
                    name="billingContact"
                    label="Contact"
                    variant="outlined"
                    size="small"
                    value={formData.billingContact}
                    onChange={handleChange}
                    style={{ backgroundColor: "white", width: "25%" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    padding: "10px 10px 35px 0px",
                  }}
                >
                  <TextField
                    id="billingEmail"
                    name="billingEmail"
                    label="Email"
                    variant="outlined"
                    size="small"
                    value={formData.billingEmail}
                    onChange={handleChange}
                    style={{ backgroundColor: "white", width: "24.20%" }}
                  />
                  <TextField
                    id="billingGst"
                    name="billingGst"
                    label="GST NO."
                    variant="outlined"
                    size="small"
                    value={formData.billingGst}
                    onChange={handleChange}
                    style={{ backgroundColor: "white", width: "25%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            <Checkbox size="small" />
            <p style={{ paddingTop: "2px" }}>
              I agree to Lorem Ipsum is simply dummy text of the printing and
              typesett
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "55px",
              paddingTop: "20px",
            }}
          >
            <Button
              style={{
                width: "20%",
                borderRadius: "20px",
                backgroundColor: "#2789FF",
              }}
              variant="contained"
              onClick={handleNextClick}
            >
              Book Now
            </Button>
            <div
              style={{
                color: "#2789FF",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={handleBackClick}
            >
              Back
            </div>
          </div>
        </div>
        <div className="price-calc">
          <div className="dis-price">
            <p className="discount-price">
              ₹ <del>22,541</del>
            </p>
            <h4 className="offer">40% Off</h4>
          </div>
          <div className="net-price">
            <p>
              <span>₹15,456</span> per person*
            </p>
            <p>*Excluding applicable taxes</p>
          </div>
          <div className="hd-calendar">
            <div className="cal-date">
              <span>
                <BsCalendarCheck />
              </span>
              <span>18 Aug - 21 Aug</span>
            </div>
            <h4 className="modify-cal">MODIFY</h4>
          </div>
          <h4 className="booking-process">Proceed to Book Online</h4>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-box">
          <h1 className="footer-title">
            <span>Contact</span> Request Call Back or Email Inquiry
          </h1>
          <p className="footer-text">
            Need assistance? Request a call back or inquire via email for prompt
            support tailored to your requirements.
          </p>
          <div className="subscribe">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter phone or email"
            />
            <i>
              <FaTelegram />
            </i>
          </div>
        </div>
      </div>
      {/* Display other card details here */}
    </div>
  );
};

export default bookingDetails;
