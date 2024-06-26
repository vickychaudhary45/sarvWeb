import { useState, useEffect } from "react";
import { BsShareFill } from "react-icons/bs";
import { MdFileDownload } from "react-icons/md";
import "../assets/css/hd.css";
import { useParams } from "react-router-dom";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdDirectionsRun } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
import img1 from "../../../data/holidayTheme/show/rashi-raffi-pBx1VvMCL24-unsplash.jpg";
import img2 from "../../../data/holidayTheme/show/abhishek-prasad-ii0oWs5abCo-unsplash.jpg";
import img3 from "../../../data/holidayTheme/show/dream-holidays-Jqc2nOH3u3Y-unsplash.jpg";
import img4 from "../../../data/holidayTheme/show/govind-krishnan-pwPcYzyJTtY-unsplash.jpg";
import hotel from "../../../data/hotel.jpg";
import { FaTelegram } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ActCard from "./activity";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography, Button } from "@mui/material";
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
  const { id } = useParams();
  const [activeComponent, setActiveComponent] = useState("itinerary");
  const [apidata, setapidata] = useState(false);
  const [startDate, setStartDate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://demo.turangh.com/holidays/package/details/${id}`
        );
        const result = await response.json();
        setapidata(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const [price, setPrice] = useState(apidata.price);
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

  const renderComponent = () => {
    switch (activeComponent) {
      case "itinerary":
        return <Itinerary apidata={apidata} />;
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
        <div className="hd_head">
          <h3 className="package_title">{apidata.packageName}</h3>
          <p className="duration">
            {apidata.packageDuration.days}D - {apidata.packageDuration.night}N{" "}
          </p>
          <div className="gallery">
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
          </div>
        </div>
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
          <h4 className="summary" onClick={() => setActiveComponent("summary")}>
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
                <span>
                  {" "}
                  {isDatePickerOpen && (
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="MM/dd/yyyy"
                      popperPlacement="bottom"
                    />
                  )}
                </span>
              </div>
              <h4 className="modify-cal" onClick={handleParagraphClick}>
                SELECT DATE
              </h4>
            </div>
            {/* <h5>Duration: 7 Oct - 10 Oct</h5> */}
            <div className="person_count">
              <div className="adults_count">
                <Typography variant="body" color="primary">
                  Adults
                </Typography>

                <Button fullWidth>
                  <Slider
                    aria-label="Counts"
                    defaultValue={1}
                    getAriaValueText=""
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={5}
                  />
                </Button>
              </div>
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

const Itinerary = (apidata) => {
  return (
    <div className="hd-itinerary">
      <div className="date-title">
        <h4 className="title">
          {apidata.apidata.packageDuration.days} Days Plan:{" "}
        </h4>

        <div className="dates">
          <p>18 Aug, Fri</p>
          <p>18 Aug, Fri</p>
          <p>18 Aug, Fri</p>
        </div>
        <div className="share-down">
          <i>
            <BsShareFill />
          </i>
          <i>
            <MdFileDownload />
          </i>
        </div>
      </div>
      {apidata.apidata.itinerary.map((data) => (
        <div className="days-activity">
          <div className="days-title">
            <div className="days-num">
              <h4>
                Day {data.dayCount} - {wordToTitleCase(data.place)}
              </h4>
            </div>
            <div className="overview-icon">
              <div className="hotel">
                <span>
                  <HiOutlineBuildingOffice />
                </span>
                <span>1 Hotel</span>
              </div>
              <div className="activity">
                <span>
                  <MdDirectionsRun />
                </span>
                <span>2 Activity</span>
              </div>
              <div className="transfer">
                <span>
                  <LiaCarSideSolid />
                </span>
                <span>1 Transfer</span>
              </div>
            </div>
          </div>
          <h5 className="activity-title">
            <span>{divideSentence(wordToTitleCase(data.title))[0]} </span>{" "}
            {divideSentence(wordToTitleCase(data.title))[1]}
          </h5>
          <div className="hd-activities">
            {data.activities.map((act) => {
              if (act.objType === "hotel") {
                return (
                  <ActCard
                    url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`}
                    type="hotel"
                  />
                );
              }
              if (act.objType === "car") {
                return (
                  <ActCard
                    url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`}
                    type="car"
                  />
                );
              }
              if (act.objType === "activity") {
                return (
                  <ActCard
                    url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`}
                    type="activity"
                  />
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

const Policies = () => {
  return <h1>this is policies</h1>;
};

const Summary = () => {
  return <h1>this is summary</h1>;
};

export default HolidayDetails;
