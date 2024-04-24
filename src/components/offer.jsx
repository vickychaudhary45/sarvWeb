import offer1 from '../assets/img/homebody/offer/offer1.png'
import offer2 from '../assets/img/homebody/offer/offer3.png'
import offer3 from '../assets/img/homebody/offer/offer2.png'
import '../assets/css/offer.css'
const Offer =() =>{

    
    return(
        <div className="offer">
        <section className="offer-details">
            <div className="offer-header"><h3><span>Unleash Your Wanderlust Explore More, </span> Pay Less!</h3>
            </div>
           <div className="view-offer"><a href="">View  Offers</a></div> 
          
        </section>
        <div className="offer-img">
            <img src={offer1} alt="" id="one" />
            <img src={offer2} alt="" id="two" />
            <img src={offer3} alt="" id="three" />
            <section className="offer">
                <p><i><h3>Upto 20% off </h3>on Various Destinations</i></p>
            </section>
        </div>
    </div>

    )
}

export default Offer