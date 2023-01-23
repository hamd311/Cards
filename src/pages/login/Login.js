import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import {  signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";
import { AiFillInstagram, AiOutlineDribbble } from "react-icons/ai";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { auth } from "../../firebase";
import toastErrors from "../../components/errorMessages/toastErrors";
import { ToastContainer } from "react-toastify";
export const Login = () => {
  const [login, setLogin] = useState({ userEmail: "", userPassword: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });

   
  };

  const handleSubmit = (event) => {

    console.log(login);
    event.preventDefault();
    signInWithEmailAndPassword(auth,login.userEmail,login.userPassword).then(()=>{
      navigate("/");
      

    }).catch((err)=>{
        console.log(err);
      const errorMessage = err.message;
      toastErrors(errorMessage);
    })
     
  };
  return (
    <>
     <ToastContainer />
  
    <div className="bg-black w-screen h-screen flex flex-col">
      <div className="h-fit">
        <Navbar />
      </div>
      <div className="home-container mt-5 h-[80vh]">
        <div className="login-form-container">
          <img
            src={require("../../assets/logo-large.png")}
            width="300"
            height={"150"}
          />
          <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-6">
             
                <input
                  type="email"
                  id="emailAddress"
                  name="userEmail"
                  className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-inherit"
                  placeholder="john.doe@company.com"
              
                  required
                  value={login.userEmail}
                  onChange={handleChange}
              
                
                />
          </div>
          <div className="mb-6">
             
             <input
               type="password"
               name="userPassword"
               id="userPassword"
               className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-inherit"
               placeholder="Password"
               value={login.userPassword}
               onChange={handleChange}
               required
           
             
             />
       </div>

       <div className="text-center w-full">
       <button
                type="submit"
                className="text-white bg-blue-700 focus:ring-4 font-medium rounded-lg text-sm w-64 sm:w-64
                px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
                  mb-2
                "
              

            
                
                >
             Login
              </button>
       </div>
          
     
          

            <p className="forgot-password">ForgotPassword ?</p>
          </form>

          <div className="sm:hidden text-center mt-5">

<Link to={"/register"}
className="text-white
  underline
"
>Register</Link>

</div>
        </div>
        <div className="mt-20 login-bottom-container">
          <img src={require("../../assets/home-bottom-logo.png")} />
          <div className="home-bootm-links mt-5">
            <ul>
              <li>
                <Link> About</Link>
              </li>
              <li>
                <Link> Products</Link>
              </li>
              <li>
                <Link> Contact</Link>
              </li>
              <li>
                <Link> Help</Link>
              </li>
              <li>
                <Link> Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className={"h-[15vh]"}
      >
        <hr
          style={{
            marginTop: "10px",
            marginBottom: "-20px",
            width: "90%",
          }}
        />
      </div>

      <div className="login-footer-container mt-10">
        <div>
          <p className="text-white copy-right-text">
            © 2022 DATA. All rights reserved
          </p>
        </div>
        <div>
          <div className="social-icon-container">
            <div className="mx-1">
              <AiFillInstagram color="white" size={20} />
            </div>

            <div className="mx-1">
              <AiOutlineDribbble color="white" size={20} />
            </div>
            <div className="mx-1">
              <BsTwitter color="white" size={20} />
            </div>
            <div className="mx-1">
              <BsYoutube color="white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};
