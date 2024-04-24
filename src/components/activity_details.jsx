import { useState, useEffect, useRef } from "react";
import { HiShare } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiArrowFatDownFill } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import "../assets/css/actd.css";
import { BsCalendarCheck } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { LiaCarSideSolid } from "react-icons/lia";
import { FcCancel } from "react-icons/fc";
import { FaTelegram } from "react-icons/fa6";
import "../assets/css/hd.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { TfiArrowCircleRight } from "react-icons/tfi";
import "./activity_details.css";
import "./../App.css";
import { Select, MenuItem, Button } from "@mui/material";
import YouTubePlayer from "./youtube";
import { useNavigate } from "react-router-dom/dist";
const TicketCounter = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const handleIncrement = (type) => {
    if (type === "adult") {
      setAdults(adults + 1);
    } else {
      setChildren(children + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === "adult" && adults > 0) {
      setAdults(adults - 1);
    } else if (type === "child" && children > 0) {
      setChildren(children - 1);
    }
  };

  return (
    <div className="ticket-counter">
      <div className="ticket-type">
        <span>Adults</span>
        <div className="counter-controls">
          <button onClick={() => handleDecrement("adult")}>-</button>
          <span>{adults}</span>
          <button onClick={() => handleIncrement("adult")}>+</button>
        </div>
      </div>
      <div className="ticket-type">
        <span>Children</span>
        <div className="counter-controls">
          <button onClick={() => handleDecrement("child")}>-</button>
          <span>{children}</span>
          <button onClick={() => handleIncrement("child")}>+</button>
        </div>
      </div>
    </div>
  );
};

const Activity_details = () => {
  const containerRef = useRef(null);
  const { id } = useParams();
  const [apidata, setapidata] = useState(false);
  const [allData, setAllData] = useState();
  const [currentPrice, setCurrentPrice] = useState(0);
  const [ticketCounts, setTicketCounts] = useState({});
  const [currentSelectedTravel, setCurrentSelectedTravel] = useState("");
  const [includedData, setIncludedData] = useState([]);
  const [excludedData, setExcludedData] = useState([]);
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/booking");
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
          packageDuration: result.start_time
            ? result.start_time[0]?.duration
            : "",
          startLocation: result.location?.city,
          activityLocation: result.location?.city,
          price: result.pricing[0]?.price,
          themeImg: result.img_link,
          mapLink: result?.location?.location,
          _id: result._id,
          excluded: result.exclusions?.detail_dec,
          included: result.inclusions?.detail_dec,
          video_link: result.video_link,
        };
        console.log("''''''''''''''''''''''''''''", apidata?.activityLocation);
        console.log(data);

        var IncludedStringData = result.inclusions?.detail_dec;
        let IncludedDataArray = IncludedStringData.replace(/<p>/g, "$")
          .replace(/<\/p>/g, "")
          .split("<br>");
        IncludedDataArray = IncludedDataArray[0].split("$");
        IncludedDataArray = IncludedDataArray.filter(function (item) {
          return item.trim() !== "";
        });
        setIncludedData(IncludedDataArray);

        var ExcludedStringData = result.exclusions?.detail_dec;
        let ExcludedDataArray = ExcludedStringData.replace(/<p>/g, "$")
          .replace(/<\/p>/g, "")
          .split("<br>");
        ExcludedDataArray = ExcludedDataArray[0].split("$");
        ExcludedDataArray = ExcludedDataArray.filter(function (item) {
          return item.trim() !== "";
        });
        setExcludedData(ExcludedDataArray);

        setapidata(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  if (apidata === false) {
  }
  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };
  const addToCart = (val, type = "add") => {
    if (type === "add") {
      console.log(val, "added");

      setCurrentPrice((curr) => {
        if (!currentSelectedTravel) {
          return curr + val.price;
        }
        const updatedPrice =
          allData.travelling_facility[currentSelectedTravel].price +
          val.price +
          curr;

        return updatedPrice;
      });
    } else {
      console.log(val, "removed");

      setCurrentPrice((curr) => {
        const updatedPrice =
          curr -
          allData.travelling_facility[currentSelectedTravel].price -
          val.price;

        return updatedPrice;
      });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };
  const handleIncrement = (ticketCategory) => {
    setTicketCounts({
      ...ticketCounts,
      [ticketCategory.ticket_category]:
        (ticketCounts[ticketCategory.ticket_category] || 0) + 1,
    });
    addToCart(ticketCategory);
  };

  const handleDecrement = (ticketCategory) => {
    if (
      ticketCounts[ticketCategory.ticket_category] &&
      ticketCounts[ticketCategory.ticket_category] > 0
    ) {
      setTicketCounts({
        ...ticketCounts,
        [ticketCategory.ticket_category]:
          ticketCounts[ticketCategory.ticket_category] - 1,
      });
    }
    addToCart(ticketCategory, "remove");
  };

  const getTicketCount = (ticketCategory) => {
    return ticketCounts[ticketCategory] || 0;
  };
  const handleSelectChange = (event) => {
    setCurrentSelectedTravel(event);
    // update total price according to the selected ticket count
    // const selectedTicketCategory = event.target.value;
    console.log(ticketCounts, "da");
    const totalTicketCount = Object.values(ticketCounts).reduce(
      (acc, curr) => acc + curr,
      0
    );
    console.log(totalTicketCount, "total");
    console.log(event, "event");
    console.log(allData?.travelling_facility[event].price, "price");
    const totalPrice =
      totalTicketCount * parseFloat(allData?.travelling_facility[event].price);
    console.log(totalPrice, "total");
    setCurrentPrice((total) => {
      return total + totalPrice;
    });
    // const allTicketCount = ticketCounts
  };

  return (
    <div className="activity_details">
      <div className="wrapper">
        <div className="img_container" ref={containerRef}>
          {apidata?.video_link?.map((link, index) => (
            <YouTubePlayer videoUrl={link} key={index} />
          ))}
          {console.log(apidata?.video_link)}
          {apidata?.themeImg && apidata?.themeImg?.length ? (
            apidata?.themeImg?.map((item) => (
              <img
                src={item?.path}
                width={200}
                height={400}
                key={item?.path}
                alt="img"
              />
            ))
          ) : (
            <>
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://plus.unsplash.com/premium_photo-1695290756957-f15d77b83a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxNjI2Mw&ixlib=rb-4.0.3&q=80&w=1080" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
              <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            </>
          )}
        </div>
        <button className="prev" onClick={handlePrev}>
          <BiSolidLeftArrow />
        </button>
        <button className="next" onClick={handleNext}>
          <BiSolidRightArrow />
        </button>
      </div>
      <div className="head_section">
        <h1 className="title">
          {apidata?.packageName}
          <p>
            <span style={{ paddingRight: "5px" }}>
              <IoLocationOutline />
            </span>
            {apidata?.activityLocation}
          </p>
        </h1>
        <div className="share-down">
          <i>
            <HiShare />
          </i>
          <i>
            <PiArrowFatDownFill />
          </i>
        </div>
      </div>
      <div className="activity_body">
        <div className="activity_component">
          <div className="component_head">
            <h3 className="titile">Tour Snapshot</h3>
            <div className="tour_info">
              <div className="icons">
                <h6>
                  {" "}
                  <span style={{ paddingRight: "5px" }}>
                    <AiOutlineClockCircle />
                  </span>
                  Duration
                </h6>
                <p>{apidata?.packageDuration} hrs</p>
              </div>
              <div className="icons">
                <h6>
                  <span style={{ paddingRight: "5px" }}>
                    <GrGroup />
                  </span>
                  Pickup Available
                </h6>
                <p>{apidata?.groupSize} </p>
              </div>
              <div className="icons">
                <h6>
                  <span style={{ paddingRight: "5px" }}>
                    <LiaCarSideSolid />
                  </span>
                  Location
                </h6>
                <p>{apidata?.activityLocation}</p>
              </div>
              <div className="icons">
                <h6>
                  <span style={{ paddingRight: "5px" }}>
                    <FcCancel />
                  </span>
                  Cancellation
                </h6>
                <p style={{ color: "rgba(39, 137, 255, 1)" }}>
                  {apidata?.cancelation_policy
                    ? apidata?.cancelation_policy
                    : "Learn more"}
                </p>
              </div>
            </div>
          </div>
          <div className="overview">
            <h3>Overview</h3>

            {allData && allData?.description && (
              <div
                dangerouslySetInnerHTML={{
                  __html: allData?.description.detail_dec,
                }}
              ></div>
            )}
          </div>
          {/* <div className="language">
            <h3>Available Language</h3>
            <p>{apidata?.availableLanguage}</p>
          </div> */}
          <div className="language">
            <h3>Cancellation policy</h3>
            <p>{apidata?.cancellationPolicy}</p>
          </div>
          <div className="highlights">
            <h3>Highlights</h3>
            <p>{apidata?.highlight}</p>
          </div>
          <div className="included">
            <h3>What‘s Included</h3>
            {includedData.map((includedItem) => (
              <p>{includedItem}</p>
            ))}

            {/* <p>Entry ticket to Harry Potter Warner Bros Studio Tour</p>
            <p>Return transfers in air-conditioned coach</p> */}
          </div>
          <div className="excluded">
            <h3>What‘s Excluded</h3>
            {/* <p dangerouslySetInnerHTML={{ __html: apidata?.excluded }}></p> */}
            {excludedData.map((excludedItem) => (
              <p>{excludedItem}</p>
            ))}
          </div>
          <div className="location">
            {/* <iframe
              x-frame-options="crossorigin"
              src={apidata?.mapLink}
              width="100%"
              height="400px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            /> */}
            <div
              width="100%"
              height="800px"
              style={{ border: 0 }}
              className="map"
              dangerouslySetInnerHTML={{ __html: apidata?.mapLink }}
            ></div>
            {/* <div
              style={{ border: 0, width: "100%" }}
              dangerouslySetInnerHTML={{ __html: apidata?.mapLink }}
            ></div> */}
          </div>
        </div>

        <div className="price-calc">
          <div className="dis-price">
            {/* <p className="discount-price">
              ₹ <del>22,541</del>
            </p> */}
            {/* <h4 className="offer">40% Off</h4> */}
          </div>
          <div>
            {/* [
    {
        "price": 100,
        "_id": "65b91c10b004f56e42bcb80d",
        "ticket_category": "adult",
        "occupancy": 100,
        "min_age": null,
        "max_age": null,
        "__v": 0
    },
    {
        "price": 100,
        "_id": "65b91c10b004f56e42bcb80e",
        "ticket_category": "adult",
        "occupancy": 70,
        "min_age": null,
        "max_age": null,
        "__v": 0
    }
]
want to show min age and max age if exsit for limitation
want to show all ticket category



*/}
            {/* <TicketCounter></TicketCounter> */}

            {allData && allData.pricing && allData.pricing.length > 0 ? (
              <div className="ticket-container">
                {allData.pricing.map((value) => (
                  <div className="ticket-row" key={value._id}>
                    <div className="category-type">
                      <div style={{ display: "flex", gap: "10px" }}>
                        <p>{value.ticket_category}</p>
                        <p> {/* {value.occupancy} */}</p>
                        {/* {value.min_age && value.max_age ? (
                          <p>
                            {value.min_age} - {value.max_age}
                          </p>
                        ) : (
                          ""
                        )} */}

                        {/* <p>,{value.price} per person</p> */}
                      </div>
                      <div className="counter-controls">
                        <button onClick={() => handleDecrement(value)}>
                          -
                        </button>
                        <span>{getTicketCount(value.ticket_category)}</span>
                        <button onClick={() => handleIncrement(value)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}

            <div className="total-price">
              {allData && allData?.travelling_facility ? (
                <div className="total-price">
                  <p style={{}}>Travelling Facility</p>
                  <Select
                    onChange={(event) => handleSelectChange(event.target.value)}
                    defaultValue=""
                    fullWidth
                    size="small"
                  >
                    {Object.keys(allData.travelling_facility).map(
                      (facilityKey) => (
                        <MenuItem key={facilityKey} value={facilityKey}>
                          {facilityKey}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="net-price">
            <p>
              <span>{currentPrice ? currentPrice : "0"}</span> per person*
            </p>
            <p>*Excluding applicable taxes</p>
          </div>
          <Button onClick={handleNextClick} className="booking-process">
            Proceed to Book Online
          </Button>
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
    </div>
  );
};

export default Activity_details;
const categories = [
  { label: "Adult", value: "adult" },
  { label: "Child", value: "child" },
  { label: "Teenager", value: "teenager" },
  { label: "Infant", value: "infant" },
  { label: "Senior", value: "senior" },
  { label: "Student", value: "student" },
  { label: "Military", value: "military" },
  { label: "Group", value: "group" },
  { label: "Other", value: "other" },
];

// import { useState,useEffect,useRef } from "react";
// import {HiShare} from 'react-icons/hi'
// import {AiOutlineClockCircle} from 'react-icons/ai'
// import {PiArrowFatDownFill} from 'react-icons/pi'
// import {IoLocationOutline} from 'react-icons/io5'
// import '../assets/css/actd.css'
// import {BsCalendarCheck} from 'react-icons/bs'
// import {GrGroup} from 'react-icons/gr'
// import {LiaCarSideSolid} from 'react-icons/lia'
// import {FcCancel} from 'react-icons/fc'
// import {FaTelegram} from 'react-icons/fa6'
// import '../assets/css/hd.css'
// import {BiSolidLeftArrow} from 'react-icons/bi'
// import {BiSolidRightArrow} from 'react-icons/bi'
// import { useParams } from 'react-router-dom';
// import Cookies  from 'js-cookie';

// const Activity_details=() =>{
//     const containerRef = useRef(null);
//     const {id} = useParams()
//     const [apidata,setapidata] = useState(false)

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch(`https://demo.turangh.com/activities/${id}`);
//           const result = await response.json();
//           setapidata(result.data)

//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };
//       fetchData();
//     }, []);
//     if (apidata===false){
// }
//   const handleNext = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({
//         left: 500, // Adjust the scroll distance as needed
//         behavior: 'smooth',
//       });
//     }
//   };
//   console.log(Cookies.get('room_guest'))

//     const handlePrev = () => {
//         if (containerRef.current) {
//           containerRef.current.scrollBy({
//             left: -500, // Adjust the scroll distance as needed
//             behavior: 'smooth',
//           });
//         }
//       };
//     return(<div className="activity_details" >
//             <div className="wrapper">
//                 <div className="img_container" ref={containerRef}>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://plus.unsplash.com/premium_photo-1695290756957-f15d77b83a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxNjI2Mw&ixlib=rb-4.0.3&q=80&w=1080"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                   <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
//                 </div>
//             <button className="prev" onClick={handlePrev}>< BiSolidLeftArrow/></button>
//             <button className="next" onClick={handleNext}><BiSolidRightArrow /></button>
//             </div>
//         <div className="activity_body">
//             <div className="head_section">
//                 <h1 className="title">{apidata.packageName}<p><span style={{paddingRight:'5px'}}><IoLocationOutline /></span>{apidata.activityLocation}</p></h1>
//                 <div className="share-down">
//                   <i><HiShare /></i>
//                   <i><PiArrowFatDownFill /></i>
//                 </div>

//             </div>
//             <div className="activity_component">
//                 <div className="component_head">
//                     <h3 className="titile">Tour Snapshot</h3>
//                         <div className="tour_info">
//                             <div className="icons">

//                                 <h6> <span style={{paddingRight:'5px'}}><AiOutlineClockCircle/></span>Duration</h6>
//                                 <p>{apidata.packageDuration} hrs</p>
//                             </div>
//                             <div className="icons">

//                                 <h6><span style={{paddingRight:'5px'}}><GrGroup/></span>Group size</h6>
//                                 <p>{apidata.groupSize} </p>
//                             </div>
//                             <div className="icons">

//                                 <h6><span style={{paddingRight:'5px'}}><LiaCarSideSolid/></span>Public Transit</h6>
//                                 <p>11 </p>
//                             </div>
//                             <div className="icons">

//                                 <h6><span style={{paddingRight:'5px'}}><FcCancel/></span>Cancellation</h6>
//                                 <p style={{color:"rgba(39, 137, 255, 1)"}}>Learn more </p>
//                             </div>
//                         </div>
//                 </div>
//                 <div className="overview">
//                     <h3>Overview</h3>
//                     <p>{apidata.overview} <span className="overview-more">More</span>
//                     </p>
//                 </div>
//                 <div className="language">
//                     <h3>Available Language</h3>
//                     <p>{apidata.availableLanguage}</p>
//                 </div>
//                 <div className="cancellation">
//                     <h3>Cancellation policy</h3>
//                     <p>{apidata.cancellationPolicy}</p>
//                 </div>
//                 <div className="highlights">
//                     <h3>Highlights</h3>
//                     <p>{apidata.highlight}</p>
//                 </div>
//                 <div className="included">
//                     <h3>What‘s Included</h3>
//                     <p>Entry ticket to Harry Potter Warner Bros Studio Tour</p>
//                     <p>Return transfers in air-conditioned coach</p>

//                 </div>
//                 <div className="excluded">
//                 <h3>What‘s Excluded</h3>

//                      <p>Food and drinks</p>
//                     <p>Gratuities</p>

//                 </div>
//                 <div className="location">
//                 <iframe src={apidata.mapLink} width="100%" height="400px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
//                 </div>
//             </div>

//             <div className="price-calc">
//                 <div className="dis-price">
//                   <p className="discount-price">
//                     ₹ <del>22,541</del>
//                     </p>
//                 <h4 className="offer">
//                     40% Off
//                   </h4>
//                 </div>
//                 <div className="net-price">
//                   <p><span>₹15,456</span> per person*</p>
//                   <p>*Excluding applicable taxes</p>
//                 </div>
//                 <div className="hd-calendar">
//                 <div className="cal-date">
//                   <span><BsCalendarCheck /></span>
//                   <span>18 Aug - 21 Aug</span>
//                 </div>
//                 <h4 className="modify-cal">
//                   MODIFY
//                 </h4>
//                 </div>
//                 <h4 className="booking-process">Proceed to Book Online</h4>
//             </div>

//         </div>
//         <div className="footer-section">
//               <div className="footer-box">
//               <h1 className="footer-title"><span>Contact</span> Request Call Back or Email Inquiry</h1>
//               <p className="footer-text">Need assistance? Request a call back or inquire via email for prompt support tailored to your requirements.</p>
//               <div className="subscribe">
//                 <input type="text" name="" id="" placeholder='Enter phone or email'/>
//                 <i><FaTelegram /></i>

//               </div>
//               </div>

//             </div>
//     </div>)
// }

// export default Activity_details;
