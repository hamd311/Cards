
import React, { useEffect, useState } from "react";


import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";

import { AiFillInstagram, AiOutlineDribbble } from "react-icons/ai";
import { BsTwitter, BsYoutube } from "react-icons/bs";

import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import toastErrors from "../../components/errorMessages/toastErrors";

import "react-toastify/dist/ReactToastify.css";

// const auth = getAuth();
export const Register = () => {

     const navigate = useNavigate();

     const[passMatchError,setPassMatchError]  = useState(false);
     const[registerUserState,setRegisterUserState]  = useState({

      firstName:"",
      lastName:"",
      email:"",
      contactNo:"",
      password:"",
      confirmPassword:""
     });

     const {firstName,lastName,email,contactNo,password,confirmPassword} =registerUserState;

     useEffect(()=>{

         if(password!==confirmPassword ){

          setPassMatchError(true);
        
         }else{
          setPassMatchError(false);
         }

     },[confirmPassword])
   
     const registerUser = ()=>{
        
      console.log(email,password);

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast.success('🦄 Account Created ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        // ...
      }).then(()=>{
        navigate("/login");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       
        toastErrors(errorMessage);
       
        // ..
      });

     }



 

  

  return (

       <>

       <ToastContainer  />

<div className="bg-black">
  
<Navbar />

<div className="home-container mt-5">
        <div className="login-form-container">
          <img
            src={require("../../assets/logo-large.png")}
            width="300"
            height={"150"}

            />
          <div className=" w-full">
           
           
          <div className=" w-full">
            <form onSubmit={(e)=>{
     e.preventDefault();
     registerUser();
            }}>

              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-inherit"
                    placeholder="John"
                    value={firstName}
               
                    required
            
                    onChange={(e)=>{
                      setRegisterUserState({
                           ...registerUserState,
                         firstName:e.target.value
                      })
                    }}
                    />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-inherit"
                    placeholder="Doe"
                    
                    required
                    value={lastName}
                    onChange={(e)=>{
                      setRegisterUserState({
                        ...registerUserState,
                        lastName:e.target.value
                      })
                    }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="emailAddress"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-inherit"
                  placeholder="john.doe@company.com"
              
                  required
                  value={email}
                  onChange={(e)=>{
                    setRegisterUserState({
                      ...registerUserState,
                       email:e.target.value
                    })
                  }}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-white"
                  >
                    Phone Number
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-inherit"
                  placeholder="Phone"
                
                  required
                  value={contactNo}
                  onChange={(e)=>{
                    setRegisterUserState({
                      ...registerUserState,
                      contactNo:e.target.value
                    })
                  }}
                  />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-inherit"
                    placeholder="•••••••••"
                  
                    required
                    value={password}
                    onChange={(e)=>{
                      setRegisterUserState({
                        ...registerUserState,
                         password:e.target.value
                      })
                    }}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-inherit text-white"
                    placeholder="•••••••••"
                    value={confirmPassword}
                  onChange={(e)=>{
                    setRegisterUserState({
                      ...registerUserState,
                       confirmPassword:e.target.value
                    })
                  }}
                    required
                  />
                </div>
              </div>

                {
                  passMatchError && <p className=" text-orange-700  mb-4
                  -mt-5
                  ">Password must match!</p>
                }

              <button
                type="submit"
                className="text-white bg-blue-700 focus:ring-4font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                  mb-2
                  mt-8
                "
                disabled={passMatchError ? true :false}
                
                >
                Submit
              </button>
            </form>
          </div>

          <div className="sm:hidden text-center ">

            <Link to={"/login"}
            className="text-white
              underline
            "
            >Login</Link>

          </div>
        </div>
        <div className="mt-20 login-bottom-container">
          <img
            src={require("../../assets/home-bottom-logo.png")}
            alt={"logo"}
          />
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
    </div>
       </>
  )

  


};
