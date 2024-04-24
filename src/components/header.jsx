import homeImg from "../assets/img/home_main.png";
import searchVector from "../assets/img/Vectorsearch.png";
import "../assets/css/header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [selectedItem, setSelectedItem] = useState(null);
const navigate = useNavigate();
  function scrollFunction() {
    const element = document.getElementById("destination-1");
    setSelectedItem("Destination");
    element.scrollIntoView({ behavior: 'smooth'});
  }

  const handleItemClick = (to)=>{
    setSelectedItem(to);
    navigate('/' + to);
  }
  return (
    <div className="search-box">
      <img src={homeImg} alt="river" id="bg" />
      <div className="header-content">
        <p id="title" style={{fontSize:'7vw'}}>SARVATRAH</p>
        <p id="explore"> Explore The Wanderer Within</p>
        <p id="discover">
          Discover amzaing places at <span>exclusive deals</span>
        </p>
        <ul>
          <li
          onClick={()=> scrollFunction()}
            // onClick={() => handleItemClick("Destination")}
            className={selectedItem === "Destination" ? "selected" : ""}
          >
            <p>Destination</p>
          </li>
          <li
            onClick={() => handleItemClick("activity")}
            className={selectedItem === "activity" ? "selected" : ""}
          >
            <p>Activity</p>
          </li>
          <li
            onClick={() => handleItemClick("adventure")}
            className={selectedItem === "adventure" ? "selected" : ""}
          >
            <p>Adventure</p>
          </li>
          <li
            onClick={() => handleItemClick("pilgri")}
            className={selectedItem === "pilgri" ? "selected" : ""}
          >
            <p>Pilgrimage</p>
          </li>
          <li
            onClick={() => handleItemClick("adventure")}
            className={selectedItem === "adventure" ? "selected" : ""}
          >
            <p>Offer</p>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Explore SARVATRAH" id="input" />
          <button type="submit" value="Search" id="submit">
            <img src={searchVector} alt="" />
            <p>Search</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
