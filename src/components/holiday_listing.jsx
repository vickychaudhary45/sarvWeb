import "../assets/css/hl.css";
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
import grid1 from "../assets/img/holiday_listing/hl1.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
const itemsPerPage = 6;

function wordToTitleCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
const Holiday_list = () => {
  const [apidata, setapidata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://demo.turangh.com/holidays/packages`
        );
        const result = await response.json();
        setapidata(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };
  const data = [...apidata.keys()];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
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
  console.log(isTransformed);
  return (
    <div className="holi_list">
      <div className="hl-search">
        <h4>Unwrap Your Dream Getaway </h4>
        <h1>Holiday Packages Await!</h1>
        <div className="hl-search-op">
          <div className="input-hl-search-op">
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
            />{" "}
          </div>
          <div className="tour-dur">
            <h3 className="tour">Tour Duration</h3>
            <div className="tour-check">
              <li>
                {" "}
                <input type="checkbox" name="l-6" id="l-h" />
                <label htmlFor="l-6">Less than 6 Night</label>{" "}
              </li>
              <p>56</p>
            </div>
            <div className="tour-check">
              <li>
                {" "}
                <input type="checkbox" name="7-9" id="l-h" />
                <label htmlFor="7-9">07 - 09 Nights</label>{" "}
              </li>
              <p>56</p>
            </div>
            <div className="tour-check">
              <li>
                {" "}
                <input type="checkbox" name="h-10" id="l-h" />
                <label htmlFor="h-10">More than 10 Nights</label>{" "}
              </li>
              <p>56</p>
            </div>
          </div>
          <div className="theme">
            <h3 className="theme-text">Theme</h3>
            <li>
              {" "}
              <input type="checkbox" name="couple" id="l-h" />
              <label htmlFor="counple">Couples</label>{" "}
            </li>
            <li>
              {" "}
              <input type="checkbox" name="honeymoon" id="l-h" />
              <label htmlFor="honeymoon">Honeymoon</label>{" "}
            </li>
            <li>
              {" "}
              <input type="checkbox" name="Family" id="l-h" />
              <label htmlFor="Family">Family</label>{" "}
            </li>
            <li>
              {" "}
              <input type="checkbox" name="Adventure" id="l-h" />
              <label htmlFor="Adventure">Adventure</label>{" "}
            </li>
            <li>
              {" "}
              <input type="checkbox" name="Deals" id="l-h" />
              <label htmlFor="Deals">Hot Deals</label>{" "}
            </li>
          </div>
        </div>
        <div className="hl-main-body">
          <i className="filter-small" onClick={toggleChange}>
            <BsFilterSquareFill />
          </i>
          <h1 id="hl-total-card">
            {apidata.length} Destinations <span>in India</span>
          </h1>
          <div className="hl-grid">
            {apidata.map((value) => (
              <Link
                to={`/holiday/details/${value.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="hl-card">
                  <div className="image-duration">
                    <img src={value.image} alt="" />
                    <h1>
                      {value.duration.days}D - {value.duration.night}N
                    </h1>
                  </div>

                  <div className="card-t-info">
                    <h3>{value.packageName}</h3>
                    <div className="hl-card-ad">
                      <i>
                        <IoLocationOutline />
                      </i>
                      <p>
                        {wordToTitleCase(value.startPlace[0])} to{" "}
                        {wordToTitleCase(value.startPlace[1])}
                      </p>
                    </div>
                    <div className="hl-card-icons">
                      <div className="icon-flight">
                        <i>
                          <LuPlaneTakeoff />
                        </i>
                        <p>0 Flight</p>
                      </div>
                      <div className="icon-hotels">
                        <i>
                          <HiOutlineBuildingOffice />
                        </i>
                        <p>{value.uses.hotel} Hotels</p>
                      </div>
                      <div className="icon-activity">
                        <i>
                          <MdDirectionsRun />
                        </i>
                        <p>{value.uses.activity} Activities</p>
                      </div>
                      <div className="icon-transfer">
                        <i>
                          <LiaCarSideSolid />
                        </i>
                        <p>{value.uses.car} Transfers</p>
                      </div>
                    </div>
                    <div className="hl-card-price">
                      <div class="price-checks">
                        {/* <p class='false-price'>INR <del>14,601</del></p> */}
                        <h5 class="true-price">
                          INR {value.price} <span> /per person </span>
                        </h5>
                      </div>
                      <i>
                        <TfiArrowCircleRight />
                      </i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
export default Holiday_list;
