import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { signUpApi } from "../api/api";

const SignUp = () => {
  const [details, setDetails] = useState(null);
  const BASE_URL = "http://localhost:3000/api";
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = details;
    if (!name || !email || !password) {
      alert("Please enter valid details...");
      return;
    }
    // console.log(BASE_URL)
    signUpApi(details)
     

    navigate("/login")
    // console.log(details);
    setDetails(null);
    // console.log("submit...");
  }

  return (
    <div className="sign-up-form-container">
      <h2>Sign-Up</h2>
      <form action="#" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name*</label><br />
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name"
            required
            value={details?.name ? details?.name : ""}
            onChange={(e) => {
              setDetails((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email*</label><br />
        <input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
          value={details?.email ? details?.email : ""}
          onChange={(e) => {
            setDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
        />
        </div>
        <div>
          <label htmlFor="password">Password*</label><br />
          <input
            name="password"
            type="password"
            placeholder="Enter Your Password"
            required
            value={details?.password ? details?.password : ""}
            onChange={(e) => {
              setDetails((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
        </div>
        <button type="submit">Sign-Up</button>
      </form>

      <div><p>already have an account?</p><Link to="/login">login</Link></div>
    </div>
  );
};

export default SignUp;
