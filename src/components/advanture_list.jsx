import '../assets/css/adv_list.css'
import '../assets/css/activity-list.css'

import {CiSearch} from 'react-icons/ci'

import {AiFillCaretDown} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'
import {LuPlaneTakeoff} from 'react-icons/lu'
import {HiOutlineBuildingOffice} from 'react-icons/hi2'
import {LiaCarSideSolid} from 'react-icons/lia'
import {MdDirectionsRun} from 'react-icons/md'
import {MdOutlineWatchLater} from 'react-icons/md'

import {TfiArrowCircleRight} from 'react-icons/tfi'
import {BsFilterSquareFill} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa6'
import grid1 from '../assets/img/adv_list/adv-card.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const itemsPerPage = 6;
const Adv_list = () =>{

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };
  const data = [...Array(50).keys()]
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
    const [isTransformed, setIsTransformed] = useState(false);
    const toggleChange = () =>{
      setIsTransformed(prvState => !prvState)
    }
    const [sliderValue, setSliderValue] = useState(1000);
    const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
    return(
        <div className="holi_list">
            <div className="advl-search">
                <h4>Unwrap Your Dream Getaway </h4>
                <h1>Adventure Packages Await!</h1>
                <div className="advl-search-op">
                    <div className="input-advl-search-op">
                        <i className="location-search"><IoLocationOutline /></i>
                        <input type="text" name="seach-hl" id="search" placeholder='Enter Location or Select from list'/>

                    </div>
                   

                    <div className="dropdown">
                      <div className="dropdown-header" onClick={toggleDropdown}>
                        {selectedOption ||''}
                        <span className={`dropdown-icon ${isOpen ? 'open' : ''}`} id='dropdown-hl'>▼</span>
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
                        <i><CiSearch /></i>
                        <p>Search</p>

                    </div>
                </div>

            </div>

            {/* Body Part */}
            <div className="advl-body-section">
                <div className="hl-sidebar" id={isTransformed?'hl-filter':'on-hl-filter'}>
                    <div className="sd-price">
                      <h1>Price range</h1>
                      <div className="price-filter">
                        
                       <li> <input type="checkbox" name="l-h" id="l-h" />
                        <label htmlFor='l-h'>Low - High</label> </li>
                      <li> <input type="checkbox" name="h-l" id="h-l" />
                        <label htmlFor='h-l'>High - Low</label></li> 
                      </div>
                      <h3 className="budget">Budget</h3>
                      <h4 className='range-val'>INR {sliderValue} - INR 20000</h4>
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
                      <li> <input type="checkbox" name="l-h" id="l-h" />
                        <label htmlFor='l-h'>Less than 6 Night</label> </li>
                        <p>56</p>
                      </div>
                      <div className="tour-check">
                      <li> <input type="checkbox" name="l-h" id="l-h" />
                        <label htmlFor='l-h'>07 - 09 Nights</label> </li>
                        <p>56</p>
                      </div>
                      <div className="tour-check">
                      <li> <input type="checkbox" name="l-h" id="l-h" />
                        <label htmlFor='l-h'>More than 10 Nights</label> </li>
                        <p>56</p>
                      </div>
                      
                    
                    </div>
                    <div className="theme">
                      <h3 className="theme-text">Theme</h3>
                    <li> <input type="checkbox" name="l-h" id="l-h" />
                        <label htmlFor='l-h'>Rajasthan</label> </li>
                    <li> <input type="checkbox" name="l-h" id="l-h" />
                        <label htmlFor='l-h'>Goa</label> </li>
                      <li> <input type="checkbox" name="l-h" id="l-h" />
                        <label htmlFor='l-h'>Kerela</label> </li>
                        <li> <input type="checkbox" name="l-h" id="l-h" />
                        <label htmlFor='l-h'>Himachal</label> </li>
                        <li> <input type="checkbox" name="l-h" id="l-h" />
                        <label htmlFor='l-h'>Hot Deals</label> </li>
                    </div>
                </div>
                <div className="actl-main-body">
                        <i className="filter-small"  onClick={toggleChange}><BsFilterSquareFill /></i>
                        <h1 id="hl-total-card">3,269 Activities <span>in Himachal</span></h1>
                        <div className="actl-grid">
                          {currentItems.map((value,index) =>(
                            <Link to = {`/adventure/details/0`} style={{textDecoration:'none',color:'black'}}>
                            <div className="actl-card">
                              <div className="image-duration">
                                <img src={grid1} alt="" />
                                <h1>3D - 4N</h1>
                              </div>
                              
                              <div className="card-t-info">
                                     <h3>Water skiing</h3>
                                     <div className="actl-card-ad">
                                      <div className="actl-area">
                                      <i><IoLocationOutline /></i>
                                     <p>Manali</p>
                                      </div>
                                      <div className="actl-duration">
                                      <i><MdOutlineWatchLater /></i>
                                      <p>Duration <span>05:00 Hours</span></p>
                                      </div>
                                     
                                     </div>
                                    
                                    <div className="start-loc">
                                    <i><IoLocationOutline /></i>
                                      <p>Start Location Nagpur</p>
                                    
                                    
                           
                                  </div>
                                  <div className="hl-card-price">
                                     <div class='price-checks'>
                                       <p class='false-price'>INR <del>14,601</del></p>
                                       <h5 class='true-price'>INR 10,899 <span>per person </span></h5>
                                     </div>
                                     <i><TfiArrowCircleRight /></i>
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
            className={currentPage === number ? 'active' : ''}
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
              <h1 className="footer-title"><span>Contact</span> Request Call Back or Email Inquiry</h1>
              <p className="footer-text">Need assistance? Request a call back or inquire via email for prompt support tailored to your requirements.</p>
              <div className="subscribe">
                <input type="text" name="" id="" placeholder='Enter phone or email'/>
                <i><FaTelegram /></i>

              </div>
              </div>
              
            </div>
        </div>

    )
}
export default Adv_list