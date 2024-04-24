import Header from "./header";
import Destination from "./destination";
import "../assets/css/home.css";
import Pilgri from "./pilgrimage";
import Adventure from "./advanture";
import Activity from "./activity_old";
import Offer from "./offer";
import Recomnd from "./recommand";
import Comment from "./comment";
import Navbar from './navbar'
import Footer from './footer'
// import Detail from "../adventure/Detail";
// import TopSlider from "../adventure/TopSlider";
const HomeBody = () => {
  return (
    <div className="home-body">
      <section className="home-navbar">
        <Navbar />
      </section>
      <section className="home-search">
        <Header />
      </section>
      <section className="home-destination">
        <Destination />
      </section>

      <section className="home-pilgrimage">
        <Pilgri />
      </section>
      <section className="home-advanture">
        <Adventure />
      </section>
      <section className="home-activity">
        <Activity />
      </section>
      <section className="home-offer">
        <Offer />
      </section>
      <section className="home-recomand">
        <Recomnd />
      </section>
      <section className="home-recomand">
        <Comment />
        <Footer />
      </section>
      {/* */}
    </div>
  );
};

export default HomeBody;
