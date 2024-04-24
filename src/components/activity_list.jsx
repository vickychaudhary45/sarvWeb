import "../assets/css/activity-list.css";
import { CiSearch } from "react-icons/ci";
import { AiFillCaretDown } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { LuPlaneTakeoff } from "react-icons/lu";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdDirectionsRun } from "react-icons/md";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { BsFilterSquareFill } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import grid1 from "../assets/img/activity_listing/act-card.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const itemsPerPage = 6;
const Activity_list = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [apidata, setapidata] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://demo.turangh.com/experience/`);
        const result = await response.json();
        console.log(result);
        const temConsole = result.filter((item) => item.img_link[0]?.path);
        console.log(temConsole);
        const data = temConsole.map((item) => ({
          packageName: item.title,
          packageDuration: item.duration,
          startLocation: item.location?.city,
          activityLocation: item.location?.city,
          price: item.pricing[0]?.occupancy,
          themeImg: item.img_link[0]?.path,
          _id: item._id,
        }));
        setapidata(data);
        const currentItems = data.length > 0 ? data.slice(0, itemsPerPage) : [];
        console.log(currentItems);
        //  setapidata(currentItems);
        setCurrentItems(currentItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleClick = (page) => {
    setCurrentPage(page);
    const currentItems = apidata.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
    setCurrentItems(currentItems);
  };
  const data = [...Array(50).keys()];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data?.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const [isTransformed, setIsTransformed] = useState(false);
  const toggleChange = () => {
    setIsTransformed((prvState) => !prvState);
  };

  const [sliderValue, setSliderValue] = useState(1000);
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="holi_list">
      <div className="actl-search">
        <h4>Unwrap Your Dream Getaway </h4>
        <h1>Activity Packages Await!</h1>
        <div className="actl-search-op">
          <div className="input-actl-search-op">
            <i className="location-search">
              <IoLocationOutline />
            </i>
            <input
              type="text"
              name="seach-actl"
              id="search"
              placeholder="Enter Location or Select from list"
            />
          </div>

          <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
              {selectedOption || ""}
              <span
                className={`dropdown-icon ${isOpen ? "open" : ""}`}
                id="dropdown-hl"
              >
                ▼
              </span>
            </div>
            {isOpen && (
              <ul className="dropdown-options">
                {options.map((option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="search-btn">
            <i>
              <CiSearch />
            </i>
            <p>Search</p>
          </div>
        </div>
      </div>

      {/* Body Part */}
      <div className="hl-body-section">
        <div
          className="hl-sidebar"
          id={isTransformed ? "hl-filter" : "on-hl-filter"}
        >
          <div className="sd-price">
            <h1>Price range</h1>
            <div className="price-filter">
              <li>
                {" "}
                <input type="checkbox" name="l-h" id="l-h" />
                <label htmlFor="l-h">Low - High</label>{" "}
              </li>
              <li>
                {" "}
                <input type="checkbox" name="h-l" id="h-l" />
                <label htmlFor="h-l">High - Low</label>
              </li>
            </div>
            <h3 className="budget">Budget</h3>
            <h4 className="range-val">INR {sliderValue} - INR 20000</h4>
            <input
              type="range"
              id="slider"
              name="slider"
              min="1000"
              max="20000"
              value={sliderValue}
              onChange={handleSliderChange}
            />
          </div>
          <div className="tour-dur">
            <h3 className="tour">Tour Duration</h3>
            <div className="tour-check">
              <li>
                {" "}
                <input type="checkbox" name="l-h" id="l-h" />
                <label htmlFor="l-h">Less than 6 Night</label>{" "}
              </li>
              <p>56</p>
            </div>
            <div className="tour-check">
              <li>
                {" "}
                <input type="checkbox" name="l-h" id="l-h" />
                <label htmlFor="l-h">07 - 09 Nights</label>{" "}
              </li>
              <p>56</p>
            </div>
            <div className="tour-check">
              <li>
                {" "}
                <input type="checkbox" name="l-h" id="l-h" />
                <label htmlFor="l-h">More than 10 Nights</label>{" "}
              </li>
              <p>56</p>
            </div>
          </div>
          <div className="theme">
            <h3 className="theme-text">Theme</h3>
            <li>
              {" "}
              <input type="checkbox" name="l-h" id="l-h" />
              <label htmlFor="l-h">Coasteering</label>{" "}
            </li>
            <li>
              {" "}
              <input type="checkbox" name="l-h" id="l-h" />
              <label htmlFor="l-h">Canyoning</label>{" "}
            </li>
            <li>
              {" "}
              <input type="checkbox" name="l-h" id="l-h" />
              <label htmlFor="l-h">Sky diving</label>{" "}
            </li>
            <li>
              {" "}
              <input type="checkbox" name="l-h" id="l-h" />
              <label htmlFor="l-h">Adventure</label>{" "}
            </li>
            <li>
              {" "}
              <input type="checkbox" name="l-h" id="l-h" />
              <label htmlFor="l-h">Hot Deals</label>{" "}
            </li>
          </div>
        </div>
        <div className="actl-main-body">
          <i className="filter-small" onClick={toggleChange}>
            <BsFilterSquareFill />
          </i>
          <h1 id="hl-total-card">
            {apidata?.length} Activities <span>in India</span>
          </h1>
          {/* <div className="actl-grid">
            {currentItems && currentItems.length > 0 ? (
              currentItems.map((value) => (
                <div key={value._id}>
                  <Link
                    to={`/activity/details/${value._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="actl-card">
                      <div className="image-duration">
                        <img src={value.themeImg} alt="" />
                        <h1>{value.packageDuration}:00 hrs</h1>
                      </div>

                      <div className="card-t-info">
                        <h3>{value.packageName}</h3>
                        <div className="actl-card-ad">
                          <div className="actl-area">
                            <i>
                              <IoLocationOutline />
                            </i>
                            <p>{value.activityLocation}</p>
                          </div>
                          <div className="actl-duration">
                            <i>
                              <MdOutlineWatchLater />
                            </i>
                            <p>
                              Duration{" "}
                              <span>{value.packageDuration}:00 Hours</span>
                            </p>
                          </div>
                        </div>

                        <div className="start-loc">
                          <i>
                            <IoLocationOutline />
                          </i>
                          <p>Start Location {value.startLocation}</p>
                        </div>
                        <div className="hl-card-price">
                          <div className="price-checks">
                            <p className="false-price">
                              INR <del>3,601</del>
                            </p>
                            <h5 className="true-price">
                              INR {value.price} <span>per person </span>
                            </h5>
                          </div>
                          <i>
                            <TfiArrowCircleRight />
                          </i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>No data found</p>
            )}
          </div> */}
          <div>
            {currentItems && currentItems.length > 0 ? (
              <div className="actl-grid">
                {currentItems.map((value) => (
                  <div key={value._id}>
                    <Link
                      to={`/activity/details/${value._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div className="actl-card">
                        <div className="image-duration">
                          <img src={value.themeImg} alt="" />
                          <h1>{value.packageDuration}:00 hrs</h1>
                        </div>

                        <div className="card-t-info">
                          <h3>{value.packageName}</h3>
                          <div className="actl-card-ad">
                            <div className="actl-area">
                              <i>
                                <IoLocationOutline />
                              </i>
                              <p>{value.activityLocation}</p>
                            </div>
                            <div className="actl-duration">
                              <i>
                                <MdOutlineWatchLater />
                              </i>
                              <p>
                                Duration{" "}
                                <span>{value.packageDuration}:00 Hours</span>
                              </p>
                            </div>
                          </div>

                          <div className="start-loc">
                            <i>
                              <IoLocationOutline />
                            </i>
                            <p>Start Location {value.startLocation}</p>
                          </div>
                          <div className="hl-card-price">
                            <div className="price-checks">
                              <p className="false-price">
                                INR <del>3,601</del>
                              </p>
                              <h5 className="true-price">
                                INR {value.price} <span>per person </span>
                              </h5>
                            </div>
                            <i>
                              <TfiArrowCircleRight />
                            </i>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <ul className="hl-pagination">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={currentPage === number ? "active" : ""}
                onClick={() => handleClick(number)}
              >
                {number}
              </li>
            ))}
          </ul>
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
export default Activity_list;
