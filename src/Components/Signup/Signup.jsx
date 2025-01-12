// import React from 'react'

// const Signup = () => {
//   return (
//     <div className='signup'>
//        <div className='signup-container'>

//         </div> 
//     </div>
//   )
// }

// export default Signup


// import React, { useState } from 'react';
// import './Signup.css';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import { app } from '../../Firebase/Firebase'
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [activeTab, setActiveTab] = useState('login');
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: '',
//     mobile: '',
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setErrorMessage('');
//     setFormData({
//       email: '',
//       password: '',
//       name: '',
//       mobile: '',
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     const auth = getAuth(app);
//     const { email, password, name, mobile } = formData;

//     if (!email || !password) {
//       setErrorMessage('Email and password are required!');
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return;
//     }

//     try {
//       if (activeTab === 'login') {
//         await signInWithEmailAndPassword(auth, email, password);
//         console.log('Login successful');
//         navigate('/dashboard'); // Redirect to the dashboard
//       } else {
//         if (!name || !mobile) {
//           setErrorMessage('Please fill in all fields for Sign Up.');
//           return;
//         }

//         if (!/^\d+$/.test(mobile)) {
//           setErrorMessage('Please enter a valid mobile number.');
//           return;
//         }

//         await createUserWithEmailAndPassword(auth, email, password);
//         console.log('Sign Up successful');
//         navigate('/signin'); // Redirect to login after successful sign-up
//       }
//       setSubmitted(true);
//     } catch (error) {
//       console.error('Error during authentication:', error.message);
//       setErrorMessage(error.message);
//     }
//   };

//   return (
//     <div className="signup-login">
//       <Header />
//       <div className="signup-login-container">
//         <div className="tabs">
//           <button
//             className={`tab ${activeTab === 'login' ? 'active' : ''}`}
//             onClick={() => handleTabClick('login')}
//           >
//             Login
//           </button>
//           <button
//             className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
//             onClick={() => handleTabClick('signup')}
//           >
//             Sign Up
//           </button>
//         </div>

//         {activeTab === 'login' && (
//           <div className="form-container">
//             <h2>Login</h2>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//               />
//             </div>
//             <button className="form-btn" onClick={handleSubmit}>
//               Login
//             </button>
//           </div>
//         )}

//         {activeTab === 'signup' && (
//           <div className="form-container">
//             <h2>Sign Up</h2>
//             <div className="form-group">
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div className="form-group">
//               <label>Mobile Number</label>
//               <input
//                 type="text"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 placeholder="Enter your mobile number"
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//               />
//             </div>
//             <button className="form-btn" onClick={handleSubmit}>
//               Sign Up
//             </button>
//           </div>
//         )}
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { app } from "../../Firebase/Firebase" // Import your Firebase configuration
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [isLogIn, setIsLogIn] = useState(true); // Toggle between Login and Signup
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(app);

  // Toggle between Login and Signup modes
  const handleToggle = (isLoginMode) => {
    setIsLogIn(isLoginMode);
    setErrorMessage("");
    setSubmitted(false);
    setFormData({
      name: "",
      number: "",
      email: "",
      password: "",
    });
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    const { name, number, email, password } = formData;

    // Basic validation
    if (!email || !password) {
      setErrorMessage("Email and password are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!isLogIn) {
      if (!name || !number) {
        setErrorMessage("All fields are required for Signup.");
        return;
      }

      if (!/^\d+$/.test(number)) {
        setErrorMessage("Please enter a valid mobile number.");
        return;
      }
    }

    try {
      if (isLogIn) {
        // Login Logic
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful");
        navigate("/dashboard"); // Navigate to the dashboard after successful login
      } else {
        // Signup Logic
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signup successful");
        navigate("/dashboard"); // Navigate to the dashboard after successful signup
      }
      setSubmitted(true);
    } catch (error) {
      console.error("Error during authentication:", error.message);
      setErrorMessage(error.message); // Display Firebase error message
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        {/* Header Section */}
        <div className="signup-container-heading">
          <h2>{isLogIn ? "Log In" : "Sign Up"}</h2>
          <p>Welcome To The Travel App</p>
        </div>

        {/* Toggle Buttons */}
        <div className="signup-container-toggle">
          <button
            onClick={() => handleToggle(true)}
            className={`toggle-button ${isLogIn ? "active" : ""}`}
          >
            Log In
          </button>
          <button
            onClick={() => handleToggle(false)}
            className={`toggle-button ${!isLogIn ? "active" : ""}`}
          >
            Sign Up
          </button>
        </div>

        {/* Form Fields */}
        <div className="signup-container-form">
          {/* Additional fields for Sign Up */}
          {!isLogIn && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="number"
                placeholder="Mobile Number"
                value={formData.number}
                onChange={handleChange}
                className="input-field"
              />
            </>
          )}

          {/* Common fields for Login and Signup */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />

          {/* Submit Button */}
          <button className="submit-button" onClick={handleSubmit}>
            {submitted ? "Submitted" : "Submit"}
          </button>

          {/* Error Message */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>

        {/* Back to Home Button */}
        <Link to="/">
          <button className="guest-button">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
