import { FaAngleLeft } from "react-icons/fa";
import leh from "../assets/img/homebody/destination/leh_dest.png";
import manali from "../assets/img/homebody/destination/manali_dest.png";
import shimla from "../assets/img/homebody/destination/shimlaDest.png";
import overlayBG from "../assets/img/Rectangle.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/destination.css";
import '../assets/css/actd.css'
import { useEffect, useState, useRef } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const Destination = () => {
  const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());
  const containerRef = useRef(null);
  const targetRef1 = useRef(null);
  // const [apiData, setapiData] = useState([]);

  // useEffect(() => {
  // Fetch data from the API using the provided URL
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`http://127.0.0.1:2324/home/uploads/`);
  //     const result = await response.json();
  //     const statedata = result;
  //     setapiData(statedata.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // fetchData();
  // }, []);
  useEffect(() => {
    // Add a resize event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // console.log(apiData);
  // const reData = apiData.map(im =>({Name:im.substring(im.lastIndexOf('/')+1).split('_')[0]}))
  // console.log(reData)
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

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="custom-next-arrow"
      style={{ display: "block" }}
    >
      <i>{FaAngleLeft}</i>
    </button>
  );

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "white",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "transperent",
          zIndex: 3,
        }}
        onClick={onClick}
      />
    );
  }

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const heading = "";
  const description =
    "Of course! There are countless holiday destinations around the world,\
                            catering to various interests and preferences. \
                            Here are some popular holiday destinations across different continents.";
  return (
    <div className="destination-grid-container">
      <div id="destination" className="column1">
        <section>
          <div className="destionation-header">
            <h3>
              <span>Discover</span> the World's Best Unforgettable Holiday
              Escapes!
            </h3>
          </div>
          <div className="destination-desc">{description}</div>
          <div className="view-destination">
            <a href="">View Destinations</a>
          </div>
        </section>
      </div>
      <div className="column2">
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
            <div key={index} className="destination-card">
              <img
                style={{
                  height: "449px",
                  width: "100%",
                  maxHeight: "449px",
                  maxWidth: "352px",
                }}
                src={card.image}
                alt="destination"
              />
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

export default Destination;
