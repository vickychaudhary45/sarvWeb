import "../assets/css/footer.css";
import logo from "../assets/img/logo.png";
import iconMap from "../assets/img/icon _map.png";
import inbox from "../assets/img/icon _inbox.png";
import phone from "../assets/img/icon_phone.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerComponent">
      <div className="compInfo">
        <div className="logoinfo">
          <img src={logo} className="icon-footer" alt="" />
          <p>Sarvatrah</p>
        </div>
        <img src={iconMap} className="icon-footer" alt="" />
        <p>
          Opposite Gyuto Monastery Gate, Sidhbari Dharamshala - 176057, Himachal
          Pradesh, India.
        </p>
      </div>
      <div className="call about">
        <img src={phone} className="about-logo" alt="" />
        <p>Call us</p>
        <h4>+91 999 934 5782</h4>
        <h4>+91 981 104 5962</h4>

        <img src={inbox} className="about-logo" alt="" />
        <p>Email us</p>
        <h4>+91 999 934 5782</h4>
        <h4>+91 981 104 5962</h4>
      </div>
      <div className="pages">
        <p>
          <a href="">Home</a>
        </p>{" "}
        <p>
          <a href="">Adventure</a>
        </p>{" "}
        <p>
          <a href="">Activities</a>
        </p>{" "}
        <p>
          <a href="">Holidays</a>
        </p>{" "}
        <p>
          <a href="">Pilgrimages</a>
        </p>
        <p>
          <a href="">Contact</a>
        </p>{" "}
      </div>
      <div className="contactForm">
        <div className="form-container">
          <h1>
            <span>Send a</span> Message
          </h1>
          <form className="message-form">
            <div className="form-row footer-user">
              <div className="form-column">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-column">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-row">
              <button type="submit" className="send-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="social">
          <i className="facebook">
            <FaFacebookF />
          </i>
          <i className="twitter">
            <FaTwitter />
          </i>
          <i className="instagram">
            <FaInstagram />
          </i>
          <i className="linkedin">
            <FaLinkedinIn />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
