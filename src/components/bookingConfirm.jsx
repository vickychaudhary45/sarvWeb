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

const bookingConfirm = () => {
  const { id } = useParams();
  const [activeComponent, setActiveComponent] = useState("itinerary");
  const [apidata, setapidata] = useState(false);
  const [formData, setFormData] = useState({
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

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/booking_details");
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
          padding: "1rem 1rem 1rem 3rem",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <h3 className="package_title">Confirm Booking Details</h3>
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
                  fontSize: "large",
                  borderBottom: "2px solid #DEE3EA",
                  paddingBottom: "10px",
                }}
              >
                Lead travellers details
              </div>

              <div style={{ paddingTop: "20px" }}>
                <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                  Name
                </div>
                <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                  {formData.leadFirstName} {formData.leadLastName}
                </div>
              </div>

              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 16 }}
                >
                  <Grid item xs={3} sm={4} md={4}>
                    <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                      Pickup Type
                    </div>
                    <div
                      style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}
                    >
                      {formData.pickupAddressType}
                    </div>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                      Pickup Address
                    </div>
                    <div
                      style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}
                    >
                      {formData.pickupAddress}
                    </div>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                      Drop Type
                    </div>
                    <div
                      style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}
                    >
                      {formData.dropAddressType}
                    </div>
                  </Grid>

                  <Grid item xs={2} sm={4} md={4}>
                    <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                      Drop Address
                    </div>
                    <div
                      style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}
                    >
                      {formData.dropAddress}
                    </div>
                  </Grid>
                </Grid>
              </Box>

              <div style={{ borderBottom: "2px solid #DEE3EA" }}>
                <div
                  style={{
                    fontWeight: 500,
                    padding: "15px 0px 15px 0px",
                    marginBottom: "22px",
                    borderBottom: "2px solid #DEE3EA",
                    fontSize: "large",
                  }}
                >
                  Billing Details
                </div>
                <div>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 16 }}
                    >
                      <Grid item xs={3} sm={4} md={4}>
                        <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                          Name
                        </div>
                        <div
                          style={{
                            padding: "8px 0px 20px 0px",
                            fontWeight: 500,
                          }}
                        >
                          {formData.leadFirstName} {formData.leadLastName}
                        </div>
                      </Grid>
                      <Grid item xs={2} sm={4} md={4}>
                        <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                          Address
                        </div>
                        <div
                          style={{
                            padding: "8px 0px 20px 0px",
                            fontWeight: 500,
                          }}
                        >
                          {formData.billingAddress}
                        </div>
                      </Grid>
                      <Grid item xs={2} sm={4} md={4}>
                        <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                          City
                        </div>
                        <div
                          style={{
                            padding: "8px 0px 20px 0px",
                            fontWeight: 500,
                          }}
                        >
                          {formData.billingCity}
                        </div>
                      </Grid>

                      <Grid item xs={2} sm={4} md={4}>
                        <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                          State
                        </div>
                        <div
                          style={{
                            padding: "8px 0px 20px 0px",
                            fontWeight: 500,
                          }}
                        >
                          {formData.billingState}
                        </div>
                      </Grid>
                      <Grid item xs={2} sm={4} md={4}>
                        <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                          Pincode
                        </div>
                        <div
                          style={{
                            padding: "8px 0px 20px 0px",
                            fontWeight: 500,
                          }}
                        >
                          {formData.billingPincode}
                        </div>
                      </Grid>
                      <Grid item xs={2} sm={4} md={4}>
                        <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                          Contact
                        </div>
                        <div
                          style={{
                            padding: "8px 0px 20px 0px",
                            fontWeight: 500,
                          }}
                        >
                          {formData.billingContact}
                        </div>
                      </Grid>
                      <Grid item xs={2} sm={4} md={4}>
                        <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                          Email
                        </div>
                        <div
                          style={{
                            padding: "8px 0px 20px 0px",
                            fontWeight: 500,
                          }}
                        >
                          {formData.billingEmail}
                        </div>
                      </Grid>
                      <Grid item xs={2} sm={4} md={4}>
                        <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                          GST No
                        </div>
                        <div
                          style={{
                            padding: "8px 0px 20px 0px",
                            fontWeight: 500,
                          }}
                        >
                          {formData.billingGst}
                        </div>
                      </Grid>
                    </Grid>
                  </Box>
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

export default bookingConfirm;
