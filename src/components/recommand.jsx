import { FaAngleLeft } from "react-icons/fa";
import leh from "../assets/img/homebody/destination/leh_dest.png";
import manali from "../assets/img/homebody/destination/manali_dest.png";
import shimla from "../assets/img/homebody/destination/shimlaDest.png";
import overlayBG from "../assets/img/Rectangle.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/recommand.css";
import '../assets/css/actd.css'
import { useEffect, useState,useRef } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const Recomnd = () => {
  const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());
  const containerRef = useRef(null);


  useEffect(() => {
    // Add a resize event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const cardData = [
    { Name: "Shimla", price: 5000, image: shimla },
    { Name: "Manali", price: 2000, image: manali },
    { Name: "Leh", price: 3000, image: leh },
    { Name: "Shimla", price: 5000, image: shimla },
    { Name: "Manali", price: 2000, image: manali },
    { Name: "Leh", price: 3000, image: leh },
    { Name: "Shimla", price: 5000, image: shimla },
    { Name: "Manali", price: 2000, image: manali },
    { Name: "Leh", price: 3000, image: leh },
  ];

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="custom-prev-arrow"
      style={{ display: "none" }}
    >
      <i>{FaAngleLeft}</i>
    </button>
  );
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

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="custom-next-arrow"
      style={{ display: "block" }}
    >
      <i>{FaAngleLeft}</i>
    </button>
  );
  const handleResize = () => {
    // Update slidesToShow based on the window width or any other logic
    setSlidesToShow(calculateSlidesToShow());
  };

  function calculateSlidesToShow() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      return 3; // For larger screens, show 3 slides
    } else if (windowWidth >= 768) {
      return 2; // For medium-sized screens, show 2 slides
    } else {
      return 1; // For smaller screens, show 1 slide
    }
  }

  const settings = {
    arrows: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    centerMode: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  const heading = "";
  const description =
    "Let our travel experts guide you to the most captivating destinations the world has to offer. From hidden gems to iconic landmarks, we curate unforgettable experiences tailored to your preferences..";
  return (
    <div className="recom-section">
      <section className="recom-details">
        <div className="recom-header">
          <h3>
            <span>Travel Beyond</span> Boundaries Your Journey, Our Expertise!
          </h3>
        </div>
        <div className="recom-desc">{description}</div>
        <div className="view-destination">
          <a href="">View Destinations</a>
        </div>
      </section>
      <div className="recom-slider">
      <div className="wrapper">
          <div className="img_container" ref={containerRef}>
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://plus.unsplash.com/premium_photo-1695290756957-f15d77b83a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxNjI2Mw&ixlib=rb-4.0.3&q=80&w=1080" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
            <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000" />
          </div>
          <button class="prev" onClick={handlePrev}>< BiSolidLeftArrow /></button>
          <button class="next" onClick={handleNext}><BiSolidRightArrow /></button>
        </div>
        {/* <Slider {...settings} className="slider">
          {cardData.map((card, index) => (
            <div key={index} className="recom-card">
              <img src={card.image} alt="recom" />

              <div className="card-info">
                <h2>{card.Name}</h2>
                <p>
                  Starting from <span>{card.price}/-*</span>
                </p>
              </div>
            </div>
          ))}
        </Slider> */}
      </div>
    </div>
  );
};

export default Recomnd;
