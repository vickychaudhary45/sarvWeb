import '../assets/css/pilgri.css'
import {PiCaretCircleRightFill} from 'react-icons/pi'
import pilgriBG from '../assets/img/homebody/pilgri/pigriBG.png'
import pilgri1 from '../assets/img/homebody/pilgri/Group1.png'
import pilgri2 from '../assets/img/homebody/pilgri/Group2.png'
import pilgri3 from '../assets/img/homebody/pilgri/Group3.png'
const Pilgri = ()=>{


    const description = "Pilgrimage is a journey undertaken by individuals,\
     often for religious or spiritual reasons, \
    to visit a sacred place or site that holds special significance to their faith.."
  
    return (

        <div className="pigri">
            <section className="pilgri-details">
                <div className="pilgri-header"><h3>Pilgrimage</h3>
                </div>
                <div className="pilgri-desc">{description}</div>
               <div className="view-pilgri"><a href="">View Pilgrimages</a></div> 
               <div className="pilgriCards">
                <div className="pilgriCards-name">
                    <h4>12 JYOTIRLINGA DARSHAN</h4>
                </div>
                <div className="pilgriCards-duration">
                    24Days - 23Nights
                </div>
                <div className="pilgriCards-price">
                    <h4>INR 34,232/-</h4>
                   < i className='angel-right'><PiCaretCircleRightFill /></i>
                </div>
               </div>
            </section>
            <div className="pilgri-img">
                <img src={pilgri1} alt="" id="one" />
                <img src={pilgri2} alt="" id="two" />
                <img src={pilgri3} alt="" id="three" />
            </div>
        </div>
    )
}

export default Pilgri