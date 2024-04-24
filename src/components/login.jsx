import React, { useState } from "react";
// import { navigate } from "gatsby";
import { Link, useNavigate } from "react-router-dom";
import Style from "../assets/css/login.module.css";
import logo from "../assets/img/mainLogo.svg";

export const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!values.email || !values.password) {
      setIsError("Please Fill All Fields");
      return;
    }

    setIsError("");
    setSubmitting(true);

    try {
      const response = await fetch(
        "https://demo.turangh.com:6006/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        // Login successful, you can handle the response accordingly
        console.log("Login successful");
        // Redirect or perform any other actions
        // navigate("/"); // Uncomment if you have navigation functionality
      } else {
        const data = await response.json();
        setIsError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setIsError("An unexpected error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className={Style.Lcontainer}>
      <div className={Style.Linner}>
        <div>
          <img src={logo} className={Style.logo} />
          <h1 className={Style.welcome}>Welcome Back</h1>
        </div>
        <div>
          <input
            className={Style.Linput}
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <br />
        <div>
          <input
            className={Style.Linput}
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div>
          <p className={Style.errorMsg}>{isError}</p>
        </div>
        <button
          className={Style.btn}
          onClick={handleSubmit}
          disabled={submitting}
        >
          Login
        </button>

        <p className={Style.dontText}>
          Don't have an account?
          <span>
            <Link to="/register "> Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
