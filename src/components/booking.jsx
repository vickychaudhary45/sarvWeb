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
import { Box, Button, Checkbox, Grid } from "@mui/material";
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

const booking = () => {
  const { id } = useParams();
  const [activeComponent, setActiveComponent] = useState("itinerary");
  const [apidata, setapidata] = useState(false);
  const [allData, setAllData] = useState();
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/booking_details");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://demo.turangh.com/experience/${id}`
        );
        const result = await response.json();
        console.log(result);
        setAllData(result);
        const data = {
          packageName: result.title,
        };
        console.log("''''''''''''''''''''''''''''", apidata?.activityLocation);
        console.log(data);
        setapidata(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="holidayDetails">
      <div className="advl-search">
        <h4>Booking Confirmed </h4>
        <h1>Your Adventure Awaits!</h1>
        {/* <div className="advl-search-op">
          <div className="input-advl-search-op">
            <i className="location-search">
              <IoLocationOutline />
            </i>
            <input
              type="text"
              name="seach-hl"
              id="search"
              placeholder="Enter Location or Select from list"
            />
          </div>

          

          <div className="search-btn">
            <i>
              <CiSearch />
            </i>
            <p>Search</p>
          </div>
        </div> */}
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
              borderBottom: "2px solid blue",
              fontWeight: 500,
            }}
          >
            Booking Summary
          </div>
          <div
            style={{
              fontFamily: "Roboto",
              padding: "10px 0px 20px 0px",
              color: "#C9CED3",
            }}
          >
            Traveller Details
          </div>
        </div>
        {/* <div className="gallery">
          <div className="allgallery">
            <div class="image">
              <img src={img1} alt="Image 1" />
              <h4 className="section_title">View Gallery</h4>
            </div>
          </div>
          <div className="gallery_video">
            <div class="image">
              <img src={img2} alt="Image 2" />
            </div>
          </div>
          <div className="activity_gallery">
            <div class="image">
              <img src={img3} alt="Image 3" />
            </div>
          </div>
          <div className="property_gallery">
            <div class="image">
              <img src={img4} alt="Image 3" />
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="hd-level">
        <h4 className="itinerary">ITINERARY</h4>
        <h4 className="policies">POLICIES</h4>
      </div> */}

      <div className="hd-body" sty>
        <div style={{ width: "75%", padding: "30px", fontFamily: "Roboto" }}>
          <div style={{}}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                style={{ borderBottom: "2px solid #DEE3EA" }}
              >
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  style={{ borderBottom: "2px solid #DEE3EA" }}
                >
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Package Name
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    Manali Holiday New
                  </div>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  style={{ borderBottom: "2px solid #DEE3EA" }}
                >
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Date of Booking
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    22 - 08 - 2023
                  </div>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  style={{ borderBottom: "2px solid #DEE3EA" }}
                >
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Date of Travel
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    24 - 08 - 2023
                  </div>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  style={{ borderBottom: "2px solid #DEE3EA" }}
                >
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Hotel Type
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    Standard
                  </div>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  style={{ borderBottom: "2px solid #DEE3EA" }}
                >
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Room Type
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    Standard
                  </div>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  style={{ borderBottom: "2px solid #DEE3EA" }}
                >
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Vehicle
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    Hatchback 1
                  </div>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  style={{ borderBottom: "2px solid #DEE3EA" }}
                >
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    No. of Rooms
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    1
                  </div>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  style={{ borderBottom: "2px solid #DEE3EA" }}
                >
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Adults
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    2
                  </div>
                </Grid>
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  style={{ borderBottom: "2px solid #DEE3EA" }}
                >
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Child with bed
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    0
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                  <div style={{ fontSize: "smaller", color: "#7C838C" }}>
                    Child without bed
                  </div>
                  <div style={{ padding: "8px 0px 20px 0px", fontWeight: 500 }}>
                    0
                  </div>
                </Grid>
              </Grid>
            </Box>
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
              gap: "20px",
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
              next
            </Button>
            <div style={{ color: "#2789FF", fontWeight: "bold" }}>
              Inclusion & Exclusion
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

export default booking;

// const Itinerary = (apidata) => {
//   return (
//     <div className="hd-itinerary">
//       <div className="date-title">
//         <h4 className="title">
//           {apidata.apidata.packageDuration.days} Days Plan:{" "}
//         </h4>

//         <div className="dates">
//           <p>18 Aug, Fri</p>
//           <p>18 Aug, Fri</p>
//           <p>18 Aug, Fri</p>
//         </div>
//         <div className="share-down">
//           <i>
//             <BsShareFill />
//           </i>
//           <i>
//             <MdFileDownload />
//           </i>
//         </div>
//       </div>
//       {apidata.apidata.itinerary.map((data) => (
//         <div className="days-activity">
//           <div className="days-title">
//             <div className="days-num">
//               <h4>
//                 Day {data.dayCount} - {wordToTitleCase(data.place)}
//               </h4>
//             </div>
//             <div className="overview-icon">
//               <div className="hotel">
//                 <span>
//                   <HiOutlineBuildingOffice />
//                 </span>
//                 <span>1 Hotel</span>
//               </div>
//               <div className="activity">
//                 <span>
//                   <MdDirectionsRun />
//                 </span>
//                 <span>2 Activity</span>
//               </div>
//               <div className="transfer">
//                 <span>
//                   <LiaCarSideSolid />
//                 </span>
//                 <span>1 Transfer</span>
//               </div>
//             </div>
//           </div>
//           <h5 className="activity-title">
//             <span>{divideSentence(wordToTitleCase(data.title))[0]} </span>{" "}
//             {divideSentence(wordToTitleCase(data.title))[1]}
//           </h5>
//           <div className="hd-activities">
//             {data.activities.map((act) => {
//               if (act.objType === "hotel") {
//                 return (
//                   <ActCard
//                     url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`}
//                     type="hotel"
//                   />
//                 );
//               }
//               if (act.objType === "car") {
//                 return (
//                   <ActCard
//                     url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`}
//                     type="car"
//                   />
//                 );
//               }
//               if (act.objType === "activity") {
//                 return (
//                   <ActCard
//                     url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`}
//                     type="activity"
//                   />
//                 );
//               }
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
