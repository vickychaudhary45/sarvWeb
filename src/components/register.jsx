import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { navigate } from "gatsby";
import Style from "../assets/css/register.module.css";
import logo from "../assets/img/mainLogo.svg";

export const RegistrationPage = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isError, setIsError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (
      !values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.contactNumber ||
      !values.password ||
      !values.confirmPassword
    ) {
      setIsError("Please Fill All Fields");
      return;
    }

    if (values.password !== values.confirmPassword) {
      setIsError("Passwords do not match");
      return;
    }

    setIsError("");
    setSubmitting(true);

    try {
      // Make a POST request to your registration endpoint
      const response = await fetch(
        "https://demo.turangh.com:6006/api/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        // Registration successful, you can handle the response accordingly
        console.log("Registration successful");
        // Redirect or perform any other actions
        // navigate("/"); // Uncomment if you have navigation functionality
      } else {
        // Handle registration error
        const data = await response.json();
        setIsError(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setIsError("An unexpected error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={Style.Rcontainer}>
      <div className={Style.Rinner}>
        <div>
          <img src={logo} className={Style.logo} />
          <h1 className={Style.welcome}>Create an Account</h1>
        </div>
        <div>
          <div>
            <input
              className={Style.Rinput}
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
          </div>
          <div>
            <input
              className={Style.Rinput}
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </div>
          <div>
            <input
              className={Style.Rinput}
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div>
            <input
              className={Style.Rinput}
              type="text"
              placeholder="Contact Number"
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  contactNumber: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <input
              className={Style.Rinput}
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <div>
            <input
              className={Style.Rinput}
              type="password"
              placeholder="Confirm Password"
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div>
          <p className={Style.errorMsg}>{isError}</p>
        </div>
        <button
          className={Style.btn}
          onClick={handleSubmit}
          disabled={submitting}
        >
          Register
        </button>
        <p className={Style.dontText}>
          Login to your account!
          <span>
            <Link to="/login"> Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
