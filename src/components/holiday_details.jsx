import { useState, useEffect } from "react";

import "../assets/css/hd.css";
import { useParams } from "react-router-dom";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdDirectionsRun } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
import { Container } from "@mui/material";
import img1 from "../../public/data/holidayTheme/show/rashi-raffi-pBx1VvMCL24-unsplash.jpg";
import img2 from "../../public/data/holidayTheme/show/abhishek-prasad-ii0oWs5abCo-unsplash.jpg";
import img3 from "../../public/data/holidayTheme/show/dream-holidays-Jqc2nOH3u3Y-unsplash.jpg";
import img4 from "../../public/data/holidayTheme/show/govind-krishnan-pwPcYzyJTtY-unsplash.jpg";
import hotel from "../../public/data/hotel.jpg";
import { FaTelegram } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography, Button } from "@mui/material";
import HolidaysDetails from "./HolidaysDetails";
import TravelerForm from "./utils/sub_travller";
import Itinerary from "./Itinerary";
// https://demo.turangh.com/holidays/package/details/650e44c8b87e434d3ad7ed6e

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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

const HolidayDetails = () => {
  const [totalprice, setTotalprice] = useState(0);
  const { id } = useParams();
  const [activeComponent, setActiveComponent] = useState("itinerary");
  const [apidata, setapidata] = useState(false);
  const [price, setPrice] = useState(false);
  const [carprice, setCarPrice] = useState(false);
  const [hotelprice, setHotelPrice] = useState(false);
  const [packageprice, setPackagePrice] = useState(false);
  // const [travelform,setTravelform] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://demo.turangh.com/holidays/package/details/${id}`
          // { credentials: "include" }
        );
        const result = await response.json();
        setapidata(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const handleParagraphClick = () => {
    setIsDatePickerOpen(true);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected Date:", date.getDate());

    setIsDatePickerOpen(false);
  };
  const priceUpdate = (added, type) => {
    console.log(added, type);
    if (type === "car") {
      setCarPrice(added);
    } else if (type === "hotel") {
      setHotelPrice(added);
    } else if (type === "adult") {
      setPackagePrice(added);
    }
    setPrice(price + added);
  };
  console.log("xxxxxxxxxx", price);
  const renderComponent = () => {
    switch (activeComponent) {
      case "itinerary":
        return <Itinerary apidata={apidata} changePrice={priceUpdate} />;
      // return <Itinerary apidata = {apidata} id = {id}/>;
      case "policies":
        return <Policies />;
      case "summary":
        return <Summary />;
      default:
        return null;
    }
  };

  if (!apidata) {
  } else {
    return (
      <div className="holidayDetails">
        <Container maxWidth="xl">
          <HolidaysDetails
            PackageName={apidata.packageName}
            duration={apidata.packageDuration}
            changePrice={priceUpdate}
            price={apidata.price}
          />

          <div className="hd-level">
            <h4
              className="itinerary"
              onClick={() => setActiveComponent("itinerary")}
            >
              ITINERARY
            </h4>
            <h4
              className="policies"
              onClick={() => setActiveComponent("policies")}
            >
              POLICIES
            </h4>
            <h4
              className="summary"
              onClick={() => setActiveComponent("summary")}
            >
              SUMMARY
            </h4>
          </div>

          <div className="hd-body">
            <div className="hd-main-section">{renderComponent()}</div>
            <div className="price-calc">
              <div className="dis-price">
                <p className="discount-price">
                  ₹ <del>22,541</del>
                </p>
                <h4 className="offer">up to 40% Off</h4>
              </div>
              <div className="net-price">
                <p>
                  <span>₹{apidata.price}</span> per person*
                </p>

                <p>
                  {carprice && (
                    <h3
                      style={{
                        color: "rgba(30, 33, 37, 1)",
                        padding: "0px 10px",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      ₹ {carprice}{" "}
                      <span
                        style={{
                          fontSize: "10px",
                          color: "rgba(112, 117, 124, 1)",
                        }}
                      >
                        Vehicle upgraded
                      </span>
                    </h3>
                  )}
                </p>
                <p>
                  {hotelprice && (
                    <h3
                      style={{
                        color: "rgba(30, 33, 37, 1)",
                        padding: "0px 10px",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      ₹ {hotelprice}{" "}
                      <span
                        style={{
                          fontSize: "10px",
                          color: "rgba(112, 117, 124, 1)",
                        }}
                      >
                        Hotel upgraded
                      </span>
                    </h3>
                  )}
                </p>
                <p>
                  {packageprice && (
                    <h3
                      style={{
                        color: "rgba(30, 33, 37, 1)",
                        padding: "0px 10px",
                        fontSize: "12px",
                      }}
                    >
                      {" "}
                      ₹ {packageprice}{" "}
                      <span
                        style={{
                          fontSize: "10px",
                          color: "rgba(112, 117, 124, 1)",
                        }}
                      >
                        Total package
                      </span>
                    </h3>
                  )}
                </p>

                <p>*Excluding applicable taxes</p>
              </div>
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <p>
                  {price && (
                    <h3
                      style={{ color: "rgba(30, 33, 37, 1)", fontSize: "12px" }}
                    >
                      Total
                      <span
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 500,
                          color: "red",
                        }}
                      >
                        {" "}
                        ₹{carprice + hotelprice + packageprice}
                      </span>
                    </h3>
                  )}
                </p>
              </div>

              <h4 className="booking-process">Book Now</h4>
            </div>
          </div>
        </Container>
        <div className="footer-section">
          <div className="footer-box">
            <h1 className="footer-title">
              <span>Contact</span> Request Call Back or Email Inquiry
            </h1>
            <p className="footer-text">
              Need assistance? Request a call back or inquire via email for
              prompt support tailored to your requirements.
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
  }
};

// const Itinerary = (apidata, id)=>{

//   return (<div className="hd-itinerary">
//           <div className="date-title">
//             <h4 className="title">{apidata.apidata.packageDuration.days} Days Plan: </h4>

//             <div className="dates">
//               <p>18 Aug, Fri</p>
//               <p>18 Aug, Fri</p>
//               <p>18 Aug, Fri</p>

//             </div>
//             <div className="share-down">
//               <i><BsShareFill /></i>
//               <i><MdFileDownload /></i>
//             </div>
//         </div>
//       {apidata.apidata.itinerary.map((data) =>(
//             <div className="days-activity">
//             <div className="days-title">
//               <div className="days-num">
//                 <h4>Day {data.dayCount} - {wordToTitleCase(data.place)}</h4>
//               </div>
//               <div className="overview-icon">
//                 <div className="hotel">
//                   <span><HiOutlineBuildingOffice /></span>
//                   <span>1 Hotel</span>
//                 </div>
//                 <div className="activity">
//                   <span><MdDirectionsRun /></span>
//                   <span>2 Activity</span>
//                 </div>
//                 <div className="transfer">
//                   <span><LiaCarSideSolid /></span>
//                   <span>1 Transfer</span>
//                 </div>
//               </div>
//             </div>
//             <h5 className="activity-title">
//             <span>{divideSentence(wordToTitleCase(data.title))[0]} </span> {divideSentence(wordToTitleCase(data.title))[1]}
//             </h5>
//             <div className="hd-activities">
//               {data.activities.map((act) =>{

//               if (act.objType ==='hotel'){
//                 return (
//                   <ActCard url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`} type="hotel" id = {id}/>

//                 )
//               }
//               if (act.objType ==='car'){
//                 return (
//                   <ActCard url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`} type="car" id = {id}/>

//               )
//               }
//               if (act.objType ==='activity'){
//                   return (
//                     <ActCard url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`} type="activity" />

//                   )
//               }
//               }

//               )}
//             </div>
//             </div>

//       ))}
//         </div>

//     )
// }

const Policies = () => {
  return <h1>this is policies</h1>;
};

const Summary = () => {
  return <h1>this is summary</h1>;
};

export default HolidayDetails;
