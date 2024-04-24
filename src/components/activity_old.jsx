import act1 from '../assets/img/homebody/activity/act1.png'
import act2 from '../assets/img/homebody/activity/act3.png'
import act3 from '../assets/img/homebody/activity/act2.png'
import '../assets/css/activity_old.css'
const Activity =() =>{

    const description = "Whether you're seeking adventure, relaxation,\
     or cultural experiences, our destination offers a wide array of activities to suit every traveler'\
     s preferences. From exploring lush natural wonders to delving into the vibrant local arts scene, \
     there's something for everyone."
    
    return(
        <div className="activity">
        <section className="activity-details">
            <div className="activity-header"><h3><span>Embrace</span> Embrace the Great Outdoors Where Thrills Await!</h3>
            </div>
            <div className="activity-desc">{description}</div>
           <div className="view-activity"><a href="">View Activity</a></div> 
          
        </section>
        <div className="activity-img">
            <img src={act1} alt="" id="one" />
            <img src={act2} alt="" id="two" />
            <img src={act3} alt="" id="three" />
            <section className="offer">
                <p><i><h3>Upto 20% off </h3>on Various Destinations</i></p>
            </section>
        </div>
    </div>

    )
}

export default Activity