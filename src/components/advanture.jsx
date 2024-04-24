import adv1 from '../assets/img/homebody/adventure/adv1.png'
import adv2 from '../assets/img/homebody/adventure/adv3.png'
import adv3 from '../assets/img/homebody/adventure/adv2.png'
import '../assets/css/advanture.css'
const Adventure =() =>{

    const description = "Fuel your wanderlust with Travel Adventure's thrilling journeys, \
    where every step leads to extraordinary landscapes and cultural encounters that will leave\
     you inspired and awestruck."
    return(
        <div className="adventure">
        <section className="adventure-details">
            <div className="adventure-header"><h3><span>Unleash</span>  Your Wanderlust Discover Thrilling Travel Adventures!</h3>
            </div>
            <div className="adventure-desc">{description}</div>
           <div className="view-adventure"><a href="">View Adventure</a></div> 
          
        </section>
        <div className="adventure-img">
            <img src={adv1} alt="" id="one" />
            <img src={adv2} alt="" id="two" />
            <img src={adv3} alt="" id="three" />
            <section className="offer">
                <p><i><h3>Upto 20% off </h3>on Various Destinations</i></p>
            </section>
        </div>
    </div>

    )
}

export default Adventure