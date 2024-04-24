import React from "react";
import { BsShareFill } from "react-icons/bs";
import { MdFileDownload } from "react-icons/md";
import ActCard from "./activity";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdDirectionsRun } from "react-icons/md";
import { CookiesProvider, useCookies } from "react-cookie";
import { useState, useEffect } from "react";

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
export default function Itinerary(apidata) {
  const [cookie] = useCookies(["room_guest"]);
  const [itiData, setItiData] = useState(false);
  let id = apidata.apidata._id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://demo.turangh.com/holidays/package/iti/${id}`
          // { credentials: "include" }
        );
        const result = await response.json();
        setItiData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    //   apidata.changePrice()
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://demo.turangh.com/holidays/package/iti/${id}`
          // { credentials: "include" }
        );
        const result = await response.json();
        setItiData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    let total_adult;
    if (!cookie.room_guest) {
      total_adult = [{ adult: 2, cb: 0, cwb: 0 }];
    } else {
      total_adult = cookie.room_guest;
    }
    const guest_counts = total_adult.reduce(
      (acc, current) => {
        acc.adult += current.adult;
        acc.cb += current.cb;
        acc.cb += current.cwb;
        return acc;
      },
      { adult: 0, cb: 0 }
    );
    console.log("adults", guest_counts.adult);
  }, [cookie.room_guest]);
  console.log(itiData);
  if (!itiData) {
    return <div>Loading...</div>;
  }

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
      {itiData.itinerary.map((iti) => (
        <div className="days-activity">
          <div className="days-title">
            <div className="days-num">
              <h4>
                Day {iti.dayCount} - {wordToTitleCase(iti.place)}
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
            <span>{divideSentence(wordToTitleCase(iti.title))[0]} </span>{" "}
            {divideSentence(wordToTitleCase(iti.title))[1]}
          </h5>
          <div className="hd-activities">
            {iti.activities.map((act) => {
              if (act.objType === "car") {
                return (
                  <ActCard
                    url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`}
                    type="car"
                    id={id}
                    changeprice={apidata.changePrice}
                  />
                );
              }
              if (act.objType === "hotel") {
                return (
                  <ActCard
                    url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`}
                    type="hotel"
                    id={id}
                    changeprice={apidata.changePrice}
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
              return JSON.stringify(act);
            })}
          </div>
        </div>
      ))}
    </div>
  );
  //     return (<div className="hd-itinerary">
  //     <div className="date-title">
  //       <h4 className="title">{apidata.apidata.packageDuration.days} Days Plan: </h4>

  //       <div className="dates">
  //         <p>18 Aug, Fri</p>
  //         <p>18 Aug, Fri</p>
  //         <p>18 Aug, Fri</p>

  //       </div>
  //       <div className="share-down">
  //         <i><BsShareFill /></i>
  //         <i><MdFileDownload /></i>
  //       </div>
  //   </div>
  // {apidata.apidata.itinerary.map((data) =>(
  //       <div className="days-activity">
  //       <div className="days-title">
  //         <div className="days-num">
  //           <h4>Day {data.dayCount} - {wordToTitleCase(data.place)}</h4>
  //         </div>
  //         <div className="overview-icon">
  //           <div className="hotel">
  //             <span><HiOutlineBuildingOffice /></span>
  //             <span>1 Hotel</span>
  //           </div>
  //           <div className="activity">
  //             <span><MdDirectionsRun /></span>
  //             <span>2 Activity</span>
  //           </div>
  //           <div className="transfer">
  //             <span><LiaCarSideSolid /></span>
  //             <span>1 Transfer</span>
  //           </div>
  //         </div>
  //       </div>
  //       <h5 className="activity-title">
  //       <span>{divideSentence(wordToTitleCase(data.title))[0]} </span> {divideSentence(wordToTitleCase(data.title))[1]}
  //       </h5>
  //       <div className="hd-activities">
  //         {data.activities.map((act) =>{

  //         if (act.objType ==='hotel'){
  //           return (
  //             <ActCard url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`} type="hotel" id = {id}/>

  //           )
  //         }
  //         if (act.objType ==='car'){
  //           return (
  //             <ActCard url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`} type="car" id = {id}/>

  //         )
  //         }
  //         if (act.objType ==='activity'){
  //             return (
  //               <ActCard url={`https://demo.turangh.com/activity?id=${act.activityID}&type=${act.objType}`} type="activity" />

  //             )
  //         }
  //         }

  //         )}
  //       </div>
  //       </div>

  // ))}
  //   </div>

  // )
}
