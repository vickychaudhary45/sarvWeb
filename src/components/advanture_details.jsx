import { useState,useEffect,useRef } from "react";
import {HiShare} from 'react-icons/hi'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {PiArrowFatDownFill} from 'react-icons/pi'
import {IoLocationOutline} from 'react-icons/io5'
import '../assets/css/actd.css'
import {BsCalendarCheck} from 'react-icons/bs'
import {GrGroup} from 'react-icons/gr'
import {LiaCarSideSolid} from 'react-icons/lia'
import {FcCancel} from 'react-icons/fc'
import {FaTelegram} from 'react-icons/fa6'
import '../assets/css/hd.css'
import {BiSolidLeftArrow} from 'react-icons/bi'
import {BiSolidRightArrow} from 'react-icons/bi'

const Adventure_details=() =>{
    const containerRef = useRef(null);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 500, // Adjust the scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

    const handlePrev = () => {
        if (containerRef.current) {
          containerRef.current.scrollBy({
            left: -500, // Adjust the scroll distance as needed
            behavior: 'smooth',
          });
        }
      };
    return(<div className="activity_details" >
            <div className="wrapper">
                <div className="img_container" ref={containerRef}>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://plus.unsplash.com/premium_photo-1695290756957-f15d77b83a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxNjI2Mw&ixlib=rb-4.0.3&q=80&w=1080"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                </div> 
            <button class="prev" onClick={handlePrev}>< BiSolidLeftArrow/></button>
            <button class="next" onClick={handleNext}><BiSolidRightArrow /></button>
            </div>
        <div className="activity_body">
            <div className="head_section">
                <h1 className="title">Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock<p><span style={{paddingRight:'5px'}}><IoLocationOutline /></span>Westminster Borough, London</p></h1>
                <div className="share-down">
                  <i><HiShare /></i>
                  <i><PiArrowFatDownFill /></i>
                </div>

            </div>
            <div className="activity_component">
                <div className="component_head">
                    <h3 className="titile">Tour Snapshot</h3>
                        <div className="tour_info">
                            <div className="icons">
                                
                                <h6> <span style={{paddingRight:'5px'}}><AiOutlineClockCircle/></span>Duration</h6>
                                <p>11 hrs</p>
                            </div>
                            <div className="icons">
                                
                                <h6><span style={{paddingRight:'5px'}}><GrGroup/></span>Group size</h6>
                                <p>11 </p>
                            </div>
                            <div className="icons">
                                
                                <h6><span style={{paddingRight:'5px'}}><LiaCarSideSolid/></span>Public Transit</h6>
                                <p>11 </p>
                            </div>
                            <div className="icons">
                                
                                <h6><span style={{paddingRight:'5px'}}><FcCancel/></span>Cancellation</h6>
                                <p>11 </p>
                            </div>
                        </div>
                </div>
                <div className="overview">
                    <h3>Overview</h3>
                    <p>Unless you hire a car, visiting Stonehenge, Bath, and Windsor Castle in one day is next to impossible. Designed specifically for travelers with limited time in London,
                         this tour allows you to check off a range of southern England‘s historical attractions in just one day by eliminating the hassle of traveling between each one independently. 
                         Travel by comfortable coach and witness your guide bring each UNESCO World Heritage Site to life with commentary.
                         Plus, all admission tickets are included in the tour price... <span className="overview-more">More</span>
                    </p>
                </div>
                <div className="language">
                    <h3>Available Language</h3>
                    <p>German, Chinese, Portuguese, Japanese, English, Italian, Chinese, French, Spanish</p>
                </div>
                <div className="cancellation">
                    <h3>Cancellation policy</h3>
                    <p>German, Chinese, Portuguese, Japanese, English, Italian, Chinese, French, Spanish</p>
                </div>
                <div className="highlights">
                    <h3>Highlights</h3>
                    <p>Travel between the UNESCO World Heritage sites aboard a comfortable coach
                        Explore with a guide to delve deeper into the history
                        Great for history buffs and travelers with limited time</p>
                </div>
                <div className="included">
                    <h3>What‘s Included</h3>
                    <p>Entry ticket to Harry Potter Warner Bros Studio Tour</p>
                    <p>Return transfers in air-conditioned coach</p>
               
                </div>
                <div className="excluded">
                <h3>What‘s Excluded</h3>
                     <p>Food and drinks</p>
                    <p>Gratuities</p>
               
                </div>
                <div className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54674.136272736425!2d77.11782139829668!3d31.078212851044505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff6ff9f54b7!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1695930976165!5m2!1sen!2sin" width="100%" height="400px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                </div>
            </div>
            
            <div className="price-calc">
                <div className="dis-price">
                  <p className="discount-price">
                    ₹ <del>22,541</del>
                    </p>
                <h4 className="offer">
                    40% Off
                  </h4>
                </div>
                <div className="net-price">
                  <p><span>₹15,456</span> per person*</p>
                  <p>*Excluding applicable taxes</p>
                </div>
                <div className="hd-calendar">
                <div className="cal-date">
                  <span><BsCalendarCheck /></span>
                  <span>18 Aug - 21 Aug</span>
                </div>
                <h4 className="modify-cal">
                  MODIFY
                </h4>
                </div>
                <h4 className="booking-process">Proceed to Book Online</h4>
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
    </div>)
}

export default Adventure_details;