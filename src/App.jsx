import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "../src/components/footer";
import Holiday_list from "./components/holiday_listing";
import Activity_list from "./components/activity_list";
import Pilgri_list from "./components/pilgri_list";
import Adv_list from "./components/advanture_list";
import HolidayDetails from "./components/holiday_details";
import Activity_details from "./components/activity_details";
import Adventure_details from "./components/advanture_details";
import PilgriDetails from "./components/pilgri_details";
import HolidaysDetails from "./components/HolidaysDetails";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";
import HomePage from "./components/homePage";
import Booking from "./components/booking";
import BookingDetails from "./components/bookingDetails";
import BookingConfirm from "./components/bookingConfirm";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const navigate = useNavigate();

  const isLoginOrRegisterRoute = () => {
    return (
      window.location.pathname === "/login" ||
      window.location.pathname === "/register"
    );
  };

  return (
    <Router>
      <div className="App">
        {!isLoginOrRegisterRoute() && <Navbar />}
        {/* <HolidaysDetails /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/holiday_list" element={<Holiday_list />} />
          <Route path="/activity" element={<Activity_list />} />
          <Route path="/pilgri" element={<Pilgri_list />} />
          <Route path="/adventure" element={<Adv_list />} />
          <Route path="/holiday/details/:id/" element={<HolidayDetails />} />
          <Route path="/pilgri/details/:id/" element={<PilgriDetails />} />
          <Route path="/activity/details/:id/" element={<Activity_details />} />
          <Route
            path="/adventure/details/:id/"
            element={<Adventure_details />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking_details" element={<BookingDetails />} />
          <Route path="/booking_confirm" element={<BookingConfirm />} />
        </Routes>

        {!isLoginOrRegisterRoute() && <Footer />}
      </div>
    </Router>
  );
}

export default App;
