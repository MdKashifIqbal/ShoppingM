import React, { useState } from "react";
import { loginApi } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

const Login =  () => {
  const [details, setDetails] = useState(null);
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault();
    console.log(details)
    const response = await loginApi(details)
    console.log(response)
    if(response?.token){
      localStorage.setItem("token",response.token)
      navigate('/')
    }
    // navigate("/")
    console.log("submit....")
  }



  return (
    <div className="sign-in-container">
      <h2>Login</h2>
      <form action="#" onSubmit={(e)=>{handleSubmit(e)}}>
        <div>
          <label htmlFor="email">Enter Your Email*</label><br />
          <input
            name="email"
            type="email"
            placeholder="name@email.com"
            value={details?.email?details.email:""}
            required
            onChange={(e) => {
              setDetails((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            />
        </div>
        <div>
          <label htmlFor="password">Enter Your Password*</label><br />
          <input
            name="password"
            type="password"
            placeholder="Enter Your Password"
            value={details?.password?details.password:""}
            required
            onChange={(e) => {
              setDetails((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div><p>New user? Register here</p><Link to="/signup">signup</Link></div>
    </div>
  );
};

export default Login;
