import "./ViewCard.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import qrCdoeImg from "../../assets/qrcode.svg";
import imgbg from "../../assets/images/mobilePhone.png";
import { format } from "date-fns";
import { addAnalytics } from "../../controller/Analytics";
const Viewcard = (props) => {
  const {setCard} = props;
  const [id, setId] = useState();
    const {socialQuickAccess,services,
      gallaryImages,
      setGallaryImages
    }  = props;
 
  // useEffect(() => {
  //   const query = new URLSearchParams(window.location.search);

  //   const id = Number(query.get("id"));

  //   setId(query.get("id"));

  //   // setHeaderText(`${cardData[id].firstName} ${cardData[id].cardNumber}`);
  // }, []);

  const navigate = useNavigate();

  const gotoEdit = () => {
    navigate(`/edit?id=${id}`);
  };

  const gotoView = () => {
    const date = format(new Date(), 'dd/MM/yyyy');
    
    const cardData = {
      cardId: id,
      cardVisit: false,
      date: date,
    };

    addAnalytics(cardData);
    navigate(`/view?id=${id}`);

  
  };

  return (
    <div className="my-4   w-full flex justify-center ">
      <div
        className={`lg:w-full sm:w-3/5  flex sm:flex-col  flex-row justify-center  ${
          props.sideButtonHidden ? "flex-col w-full" : "flex-row"
        }`}
      >
        <div className="w-3/4 mx-auto sm:block hidden text-center ">
          <Button
            text="Edit Card"
            onClick={gotoEdit}
            style={" text-[25px] py-4 px-8 w-fit"}
          />
        </div>
        <div
          className="flex w-full items-center 
          justify-center
        "
        >
          <div
            style={{
              backgroundImage: `url(${imgbg})`,
              height: "90vh",
              maxWidth: "90%",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              marginLeft: "10px",
            }}
            className="show-card-container"
          >
            <div
              style={{
               
                color: props?.card?.fontColor,
              
                //  margin:"15px",
                backgroundColor: props?.card?.bgColor,
              
                
              }}
              className="show-card-bg"
            >
             <img src={props?.coverImage}   
               className="
                 mx-auto
               "/>
             <img src={props?.profileImage}   
               className="mt-10" alt="img"
                 style={{
                  position: "relative",
                  left: "25%",
                   top: "-70px"
                 }}
               />

              <div className="info-container">
                <div className="name">{props.card?.name}</div>
                <div className="position">{props.card?.tile}</div>
                <div className="business-name">{props?.card?.busniessName}</div>
              </div>
            

              <div className="social-profiles-container">

                <div className="flex gap-5 justify-center
                  flex-wrap
                ">

            

                {
                 socialQuickAccess?.map((icn)=>{
                    console.log("icn",icn)
                  return    <div className="flex flex-col 
                  
                  items-center">
                    <img src={(icn.link)}  
                      className="w-12"
                    />
                    <p className='text-xs 
                      capitalize mt-1
                    '>{icn.name}</p>
                  </div>
                  })
                }
                    </div>
             

                {/* <div className="row-2">
                  <div className="icon-name-container">
                    <svg
                      className="icon"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 13.5C26 20.4036 20.4036 26 13.5 26C6.59644 26 1 20.4036 1 13.5C1 6.59644 6.59644 1 13.5 1C20.4036 1 26 6.59644 26 13.5Z"
                        stroke="#4DB5FA"
                        strokeWidth="2"
                      />
                      <path
                        d="M20.9623 8.87508C20.494 9.08601 19.9773 9.21567 19.4742 9.29889C19.7141 9.25825 20.0644 8.82476 20.2057 8.65059C20.4205 8.38353 20.5985 8.07777 20.6991 7.74879C20.7127 7.72363 20.7223 7.69073 20.6952 7.67138C20.6623 7.65783 20.6411 7.66557 20.6159 7.67718C20.0528 7.97908 19.4703 8.19775 18.851 8.35257C18.7988 8.36612 18.762 8.35257 18.7291 8.31967C18.6768 8.26162 18.6284 8.20743 18.5743 8.16099C18.313 7.93844 18.0343 7.7662 17.7189 7.63654C17.3048 7.46818 16.8539 7.39658 16.4068 7.4256C15.9733 7.45463 15.5476 7.57655 15.1625 7.77781C14.7774 7.97907 14.4329 8.25968 14.1581 8.59834C13.8756 8.94861 13.6647 9.36081 13.5582 9.79817C13.4556 10.22 13.4634 10.638 13.5273 11.0657C13.5369 11.1373 13.5311 11.147 13.4653 11.1373C11.0405 10.7774 9.02982 9.90847 7.39844 8.04874C7.32683 7.96746 7.29009 7.96746 7.23204 8.05455C6.51794 9.12471 6.86434 10.8451 7.75647 11.6889C7.87452 11.8011 7.99836 11.9133 8.12995 12.0179C8.08157 12.0275 7.48745 11.9637 6.95914 11.6889C6.88754 11.6444 6.85274 11.6695 6.84693 11.7508C6.84113 11.8669 6.85077 11.9733 6.86626 12.0991C7.00365 13.1848 7.75455 14.1872 8.78408 14.5781C8.90599 14.6304 9.04146 14.6749 9.17305 14.6962C8.93889 14.7484 8.69696 14.7852 8.02544 14.731C7.94223 14.7155 7.90934 14.7562 7.94224 14.8374C8.44733 16.2153 9.53878 16.6236 10.3554 16.8578C10.4638 16.8772 10.5741 16.8772 10.6844 16.9023C10.6786 16.912 10.6709 16.912 10.6651 16.9217C10.3942 17.3339 9.45558 17.6416 9.01823 17.7944C8.22286 18.0731 7.3559 18.197 6.51602 18.1138C6.38249 18.0944 6.35346 18.0963 6.31669 18.1138C6.27992 18.137 6.31281 18.1679 6.35538 18.2028C6.52568 18.315 6.69984 18.4156 6.87594 18.5124C7.41006 18.7949 7.96742 19.0214 8.54799 19.182C11.5534 20.0122 14.94 19.4026 17.1964 17.1597C18.9691 15.3987 19.5902 12.97 19.5902 10.5394C19.5902 10.4445 19.7025 10.3923 19.7702 10.342C20.2308 9.99556 20.6024 9.58142 20.9468 9.11891C21.0242 9.01441 21.0243 8.92152 21.0243 8.88475V8.8712C21.0243 8.8325 21.0242 8.84411 20.9643 8.8712L20.9623 8.87508Z"
                        fill="#4DB5FA"
                      />
                    </svg>
                    <span className="name">Twitter</span>
                  </div>
                  <div className="icon-name-container">
                    <svg
                      className="icon"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 13.5C26 20.4036 20.4036 26 13.5 26C6.59644 26 1 20.4036 1 13.5C1 6.59644 6.59644 1 13.5 1C20.4036 1 26 6.59644 26 13.5Z"
                        stroke="#4DB5FA"
                        strokeWidth="2"
                      />
                      <path
                        d="M20.9623 8.87508C20.494 9.08601 19.9773 9.21567 19.4742 9.29889C19.7141 9.25825 20.0644 8.82476 20.2057 8.65059C20.4205 8.38353 20.5985 8.07777 20.6991 7.74879C20.7127 7.72363 20.7223 7.69073 20.6952 7.67138C20.6623 7.65783 20.6411 7.66557 20.6159 7.67718C20.0528 7.97908 19.4703 8.19775 18.851 8.35257C18.7988 8.36612 18.762 8.35257 18.7291 8.31967C18.6768 8.26162 18.6284 8.20743 18.5743 8.16099C18.313 7.93844 18.0343 7.7662 17.7189 7.63654C17.3048 7.46818 16.8539 7.39658 16.4068 7.4256C15.9733 7.45463 15.5476 7.57655 15.1625 7.77781C14.7774 7.97907 14.4329 8.25968 14.1581 8.59834C13.8756 8.94861 13.6647 9.36081 13.5582 9.79817C13.4556 10.22 13.4634 10.638 13.5273 11.0657C13.5369 11.1373 13.5311 11.147 13.4653 11.1373C11.0405 10.7774 9.02982 9.90847 7.39844 8.04874C7.32683 7.96746 7.29009 7.96746 7.23204 8.05455C6.51794 9.12471 6.86434 10.8451 7.75647 11.6889C7.87452 11.8011 7.99836 11.9133 8.12995 12.0179C8.08157 12.0275 7.48745 11.9637 6.95914 11.6889C6.88754 11.6444 6.85274 11.6695 6.84693 11.7508C6.84113 11.8669 6.85077 11.9733 6.86626 12.0991C7.00365 13.1848 7.75455 14.1872 8.78408 14.5781C8.90599 14.6304 9.04146 14.6749 9.17305 14.6962C8.93889 14.7484 8.69696 14.7852 8.02544 14.731C7.94223 14.7155 7.90934 14.7562 7.94224 14.8374C8.44733 16.2153 9.53878 16.6236 10.3554 16.8578C10.4638 16.8772 10.5741 16.8772 10.6844 16.9023C10.6786 16.912 10.6709 16.912 10.6651 16.9217C10.3942 17.3339 9.45558 17.6416 9.01823 17.7944C8.22286 18.0731 7.3559 18.197 6.51602 18.1138C6.38249 18.0944 6.35346 18.0963 6.31669 18.1138C6.27992 18.137 6.31281 18.1679 6.35538 18.2028C6.52568 18.315 6.69984 18.4156 6.87594 18.5124C7.41006 18.7949 7.96742 19.0214 8.54799 19.182C11.5534 20.0122 14.94 19.4026 17.1964 17.1597C18.9691 15.3987 19.5902 12.97 19.5902 10.5394C19.5902 10.4445 19.7025 10.3923 19.7702 10.342C20.2308 9.99556 20.6024 9.58142 20.9468 9.11891C21.0242 9.01441 21.0243 8.92152 21.0243 8.88475V8.8712C21.0243 8.8325 21.0242 8.84411 20.9643 8.8712L20.9623 8.87508Z"
                        fill="#4DB5FA"
                      />
                    </svg>
                    <span className="name">Phone</span>
                  </div>
                </div>

                <div className="row-3">
                  <div className="icon-name-container">
                    <svg
                      className="icon"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 13.5C26 20.4036 20.4036 26 13.5 26C6.59644 26 1 20.4036 1 13.5C1 6.59644 6.59644 1 13.5 1C20.4036 1 26 6.59644 26 13.5Z"
                        stroke="#4DB5FA"
                        strokeWidth="2"
                      />
                      <path
                        d="M20.9623 8.87508C20.494 9.08601 19.9773 9.21567 19.4742 9.29889C19.7141 9.25825 20.0644 8.82476 20.2057 8.65059C20.4205 8.38353 20.5985 8.07777 20.6991 7.74879C20.7127 7.72363 20.7223 7.69073 20.6952 7.67138C20.6623 7.65783 20.6411 7.66557 20.6159 7.67718C20.0528 7.97908 19.4703 8.19775 18.851 8.35257C18.7988 8.36612 18.762 8.35257 18.7291 8.31967C18.6768 8.26162 18.6284 8.20743 18.5743 8.16099C18.313 7.93844 18.0343 7.7662 17.7189 7.63654C17.3048 7.46818 16.8539 7.39658 16.4068 7.4256C15.9733 7.45463 15.5476 7.57655 15.1625 7.77781C14.7774 7.97907 14.4329 8.25968 14.1581 8.59834C13.8756 8.94861 13.6647 9.36081 13.5582 9.79817C13.4556 10.22 13.4634 10.638 13.5273 11.0657C13.5369 11.1373 13.5311 11.147 13.4653 11.1373C11.0405 10.7774 9.02982 9.90847 7.39844 8.04874C7.32683 7.96746 7.29009 7.96746 7.23204 8.05455C6.51794 9.12471 6.86434 10.8451 7.75647 11.6889C7.87452 11.8011 7.99836 11.9133 8.12995 12.0179C8.08157 12.0275 7.48745 11.9637 6.95914 11.6889C6.88754 11.6444 6.85274 11.6695 6.84693 11.7508C6.84113 11.8669 6.85077 11.9733 6.86626 12.0991C7.00365 13.1848 7.75455 14.1872 8.78408 14.5781C8.90599 14.6304 9.04146 14.6749 9.17305 14.6962C8.93889 14.7484 8.69696 14.7852 8.02544 14.731C7.94223 14.7155 7.90934 14.7562 7.94224 14.8374C8.44733 16.2153 9.53878 16.6236 10.3554 16.8578C10.4638 16.8772 10.5741 16.8772 10.6844 16.9023C10.6786 16.912 10.6709 16.912 10.6651 16.9217C10.3942 17.3339 9.45558 17.6416 9.01823 17.7944C8.22286 18.0731 7.3559 18.197 6.51602 18.1138C6.38249 18.0944 6.35346 18.0963 6.31669 18.1138C6.27992 18.137 6.31281 18.1679 6.35538 18.2028C6.52568 18.315 6.69984 18.4156 6.87594 18.5124C7.41006 18.7949 7.96742 19.0214 8.54799 19.182C11.5534 20.0122 14.94 19.4026 17.1964 17.1597C18.9691 15.3987 19.5902 12.97 19.5902 10.5394C19.5902 10.4445 19.7025 10.3923 19.7702 10.342C20.2308 9.99556 20.6024 9.58142 20.9468 9.11891C21.0242 9.01441 21.0243 8.92152 21.0243 8.88475V8.8712C21.0243 8.8325 21.0242 8.84411 20.9643 8.8712L20.9623 8.87508Z"
                        fill="#4DB5FA"
                      />
                    </svg>
                    <span className="name">Twitter</span>
                  </div>
                  <div className="icon-name-container">
                    <svg
                      className="icon"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 13.5C26 20.4036 20.4036 26 13.5 26C6.59644 26 1 20.4036 1 13.5C1 6.59644 6.59644 1 13.5 1C20.4036 1 26 6.59644 26 13.5Z"
                        stroke="#4DB5FA"
                        strokeWidth="2"
                      />
                      <path
                        d="M20.9623 8.87508C20.494 9.08601 19.9773 9.21567 19.4742 9.29889C19.7141 9.25825 20.0644 8.82476 20.2057 8.65059C20.4205 8.38353 20.5985 8.07777 20.6991 7.74879C20.7127 7.72363 20.7223 7.69073 20.6952 7.67138C20.6623 7.65783 20.6411 7.66557 20.6159 7.67718C20.0528 7.97908 19.4703 8.19775 18.851 8.35257C18.7988 8.36612 18.762 8.35257 18.7291 8.31967C18.6768 8.26162 18.6284 8.20743 18.5743 8.16099C18.313 7.93844 18.0343 7.7662 17.7189 7.63654C17.3048 7.46818 16.8539 7.39658 16.4068 7.4256C15.9733 7.45463 15.5476 7.57655 15.1625 7.77781C14.7774 7.97907 14.4329 8.25968 14.1581 8.59834C13.8756 8.94861 13.6647 9.36081 13.5582 9.79817C13.4556 10.22 13.4634 10.638 13.5273 11.0657C13.5369 11.1373 13.5311 11.147 13.4653 11.1373C11.0405 10.7774 9.02982 9.90847 7.39844 8.04874C7.32683 7.96746 7.29009 7.96746 7.23204 8.05455C6.51794 9.12471 6.86434 10.8451 7.75647 11.6889C7.87452 11.8011 7.99836 11.9133 8.12995 12.0179C8.08157 12.0275 7.48745 11.9637 6.95914 11.6889C6.88754 11.6444 6.85274 11.6695 6.84693 11.7508C6.84113 11.8669 6.85077 11.9733 6.86626 12.0991C7.00365 13.1848 7.75455 14.1872 8.78408 14.5781C8.90599 14.6304 9.04146 14.6749 9.17305 14.6962C8.93889 14.7484 8.69696 14.7852 8.02544 14.731C7.94223 14.7155 7.90934 14.7562 7.94224 14.8374C8.44733 16.2153 9.53878 16.6236 10.3554 16.8578C10.4638 16.8772 10.5741 16.8772 10.6844 16.9023C10.6786 16.912 10.6709 16.912 10.6651 16.9217C10.3942 17.3339 9.45558 17.6416 9.01823 17.7944C8.22286 18.0731 7.3559 18.197 6.51602 18.1138C6.38249 18.0944 6.35346 18.0963 6.31669 18.1138C6.27992 18.137 6.31281 18.1679 6.35538 18.2028C6.52568 18.315 6.69984 18.4156 6.87594 18.5124C7.41006 18.7949 7.96742 19.0214 8.54799 19.182C11.5534 20.0122 14.94 19.4026 17.1964 17.1597C18.9691 15.3987 19.5902 12.97 19.5902 10.5394C19.5902 10.4445 19.7025 10.3923 19.7702 10.342C20.2308 9.99556 20.6024 9.58142 20.9468 9.11891C21.0242 9.01441 21.0243 8.92152 21.0243 8.88475V8.8712C21.0243 8.8325 21.0242 8.84411 20.9643 8.8712L20.9623 8.87508Z"
                        fill="#4DB5FA"
                      />
                    </svg>
                    <span className="name">Phone</span>
                  </div>
                </div>

                <div className="row-4">
                  <div className="icon-name-container">
                    <svg
                      className="icon"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 13.5C26 20.4036 20.4036 26 13.5 26C6.59644 26 1 20.4036 1 13.5C1 6.59644 6.59644 1 13.5 1C20.4036 1 26 6.59644 26 13.5Z"
                        stroke="#4DB5FA"
                        strokeWidth="2"
                      />
                      <path
                        d="M20.9623 8.87508C20.494 9.08601 19.9773 9.21567 19.4742 9.29889C19.7141 9.25825 20.0644 8.82476 20.2057 8.65059C20.4205 8.38353 20.5985 8.07777 20.6991 7.74879C20.7127 7.72363 20.7223 7.69073 20.6952 7.67138C20.6623 7.65783 20.6411 7.66557 20.6159 7.67718C20.0528 7.97908 19.4703 8.19775 18.851 8.35257C18.7988 8.36612 18.762 8.35257 18.7291 8.31967C18.6768 8.26162 18.6284 8.20743 18.5743 8.16099C18.313 7.93844 18.0343 7.7662 17.7189 7.63654C17.3048 7.46818 16.8539 7.39658 16.4068 7.4256C15.9733 7.45463 15.5476 7.57655 15.1625 7.77781C14.7774 7.97907 14.4329 8.25968 14.1581 8.59834C13.8756 8.94861 13.6647 9.36081 13.5582 9.79817C13.4556 10.22 13.4634 10.638 13.5273 11.0657C13.5369 11.1373 13.5311 11.147 13.4653 11.1373C11.0405 10.7774 9.02982 9.90847 7.39844 8.04874C7.32683 7.96746 7.29009 7.96746 7.23204 8.05455C6.51794 9.12471 6.86434 10.8451 7.75647 11.6889C7.87452 11.8011 7.99836 11.9133 8.12995 12.0179C8.08157 12.0275 7.48745 11.9637 6.95914 11.6889C6.88754 11.6444 6.85274 11.6695 6.84693 11.7508C6.84113 11.8669 6.85077 11.9733 6.86626 12.0991C7.00365 13.1848 7.75455 14.1872 8.78408 14.5781C8.90599 14.6304 9.04146 14.6749 9.17305 14.6962C8.93889 14.7484 8.69696 14.7852 8.02544 14.731C7.94223 14.7155 7.90934 14.7562 7.94224 14.8374C8.44733 16.2153 9.53878 16.6236 10.3554 16.8578C10.4638 16.8772 10.5741 16.8772 10.6844 16.9023C10.6786 16.912 10.6709 16.912 10.6651 16.9217C10.3942 17.3339 9.45558 17.6416 9.01823 17.7944C8.22286 18.0731 7.3559 18.197 6.51602 18.1138C6.38249 18.0944 6.35346 18.0963 6.31669 18.1138C6.27992 18.137 6.31281 18.1679 6.35538 18.2028C6.52568 18.315 6.69984 18.4156 6.87594 18.5124C7.41006 18.7949 7.96742 19.0214 8.54799 19.182C11.5534 20.0122 14.94 19.4026 17.1964 17.1597C18.9691 15.3987 19.5902 12.97 19.5902 10.5394C19.5902 10.4445 19.7025 10.3923 19.7702 10.342C20.2308 9.99556 20.6024 9.58142 20.9468 9.11891C21.0242 9.01441 21.0243 8.92152 21.0243 8.88475V8.8712C21.0243 8.8325 21.0242 8.84411 20.9643 8.8712L20.9623 8.87508Z"
                        fill="#4DB5FA"
                      />
                    </svg>
                    <span className="name">Twitter</span>
                  </div>
                  <div className="icon-name-container">
                    <svg
                      className="icon"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 13.5C26 20.4036 20.4036 26 13.5 26C6.59644 26 1 20.4036 1 13.5C1 6.59644 6.59644 1 13.5 1C20.4036 1 26 6.59644 26 13.5Z"
                        stroke="#4DB5FA"
                        strokeWidth="2"
                      />
                      <path
                        d="M20.9623 8.87508C20.494 9.08601 19.9773 9.21567 19.4742 9.29889C19.7141 9.25825 20.0644 8.82476 20.2057 8.65059C20.4205 8.38353 20.5985 8.07777 20.6991 7.74879C20.7127 7.72363 20.7223 7.69073 20.6952 7.67138C20.6623 7.65783 20.6411 7.66557 20.6159 7.67718C20.0528 7.97908 19.4703 8.19775 18.851 8.35257C18.7988 8.36612 18.762 8.35257 18.7291 8.31967C18.6768 8.26162 18.6284 8.20743 18.5743 8.16099C18.313 7.93844 18.0343 7.7662 17.7189 7.63654C17.3048 7.46818 16.8539 7.39658 16.4068 7.4256C15.9733 7.45463 15.5476 7.57655 15.1625 7.77781C14.7774 7.97907 14.4329 8.25968 14.1581 8.59834C13.8756 8.94861 13.6647 9.36081 13.5582 9.79817C13.4556 10.22 13.4634 10.638 13.5273 11.0657C13.5369 11.1373 13.5311 11.147 13.4653 11.1373C11.0405 10.7774 9.02982 9.90847 7.39844 8.04874C7.32683 7.96746 7.29009 7.96746 7.23204 8.05455C6.51794 9.12471 6.86434 10.8451 7.75647 11.6889C7.87452 11.8011 7.99836 11.9133 8.12995 12.0179C8.08157 12.0275 7.48745 11.9637 6.95914 11.6889C6.88754 11.6444 6.85274 11.6695 6.84693 11.7508C6.84113 11.8669 6.85077 11.9733 6.86626 12.0991C7.00365 13.1848 7.75455 14.1872 8.78408 14.5781C8.90599 14.6304 9.04146 14.6749 9.17305 14.6962C8.93889 14.7484 8.69696 14.7852 8.02544 14.731C7.94223 14.7155 7.90934 14.7562 7.94224 14.8374C8.44733 16.2153 9.53878 16.6236 10.3554 16.8578C10.4638 16.8772 10.5741 16.8772 10.6844 16.9023C10.6786 16.912 10.6709 16.912 10.6651 16.9217C10.3942 17.3339 9.45558 17.6416 9.01823 17.7944C8.22286 18.0731 7.3559 18.197 6.51602 18.1138C6.38249 18.0944 6.35346 18.0963 6.31669 18.1138C6.27992 18.137 6.31281 18.1679 6.35538 18.2028C6.52568 18.315 6.69984 18.4156 6.87594 18.5124C7.41006 18.7949 7.96742 19.0214 8.54799 19.182C11.5534 20.0122 14.94 19.4026 17.1964 17.1597C18.9691 15.3987 19.5902 12.97 19.5902 10.5394C19.5902 10.4445 19.7025 10.3923 19.7702 10.342C20.2308 9.99556 20.6024 9.58142 20.9468 9.11891C21.0242 9.01441 21.0243 8.92152 21.0243 8.88475V8.8712C21.0243 8.8325 21.0242 8.84411 20.9643 8.8712L20.9623 8.87508Z"
                        fill="#4DB5FA"
                      />
                    </svg>
                    <span className="name">Phone</span>
                  </div>
                </div> */}
                
                <div className="vist-website-container">

                      {
                    props.card?.links.map((item)=>{
                        console.log("itemitem",item)
                      const{tile,url,icon}  =item;
                      return(
                        <a href={url}
                          className="flex gap-3 align-middle"
                          target={"_blank"}
                        >
                          {
                            icon && <img  src={icon}  
                            className="w-7"
                        />
                          }
                          
                          {tile} </a> 
                      )
                    })
                }
                 

                    <h2 className="mb-2">{
                        props.card?.article?.title
                      }</h2>

                   

                  </div>
                  <div className="artilce-container">
                  <p>
                      {
                        props.card?.article?.content
                      }
                      </p>

                  </div>

                  <div className="services-container">
                      {

  props.card?.services && props.card?.services?.map((item,index)=>{

      console.log("item.isOpen",  item.isOpen)
                            return <div className="single-service">
                              <div className="head"
                                onClick={()=>{
          let temp  = props.card?.services;
            console.log(temp)
          temp[index] = {
            ...temp[index],
           isOpen: !temp[index].isOpen,

          };
     
                                  setCard({
                                    ...props.card,
                                    services:[...temp]
                                  })
                                }}
                              >
                              <svg
                           className={`${item.isOpen ? "rotate-icon" :""}`}
                              width="20" height="20" viewBox="0 0 405 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.666 412.61V67.3893C33.666 41.0863 62.7043 25.1459 84.8953 39.2673L356.139 211.877C376.723 224.977 376.723 255.024 356.139 268.124L84.8953 440.734C62.7043 454.854 33.666 438.914 33.666 412.61Z" stroke="white" stroke-width="66.6667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                <h2>{item.tile}</h2>
                              
                              </div>
                              {
                                item.isOpen &&
                              <div className="body">
                    
                        <p>{item?.details}</p>
                      

                              </div>
                                }
                            </div>
                          })
                      }
                      

                  </div>
                  <div className="work-secton">
                    {
                      props.card?.gallary?.name &&
                      <h2>{ props.card?.gallary?.name}</h2>
                    }
                    {
                      props.card?.gallary?.video &&
                    <video  controls>
                      <source src={props.card?.gallary?.video} 
                       />
                     
                      Your browser does not support the video tag.
                    </video>
                    }
 
                   
                  </div>
                  <div className="gallary-images">


 {
    gallaryImages.map((link,i)=>{
      return(

 
    <img src={link}   key={i}   alt="img"/>

    )
    })
  }
                  </div>
                  {
                    props?.card?.reviews &&
                    <div className="reviews-container">
                         <h2>Reviews</h2>
                         <p>{props?.card?.reviews?.review}</p>
                         <p className="review-name">{props?.card?.reviews?.name}</p>
                    </div>
                  }

                  {

props?.card?.leadGeneration?.isTrue &&(
  <p className="lead-gen-title">{
    props?.card?.leadGeneration?.leadGeneration
  }</p>

)
   

                 
                  }
              
              </div>

              {/* <div className="">{props.card?.name}</div> */}
              {/* <div>{props.card?.tile}</div>

              <p>{props?.card?.busniessName}</p> */}
            </div>
          </div>
          {/* <img
            
            src={require("../../assets/images/mobilePhone.png")}
            alt="view card"
            className={`lg:w-full px-5 self-center ${
              props.sideButtonHidden ? "w-100" : "w-1/2"
            }`}
          /> */}

          <div
            className={`sm:hidden block w-1/2 ${
              props.sideButtonHidden ? "hidden" : "block"
            }`}
          >
            <div className="w-full mx-auto ">
              <Button text="Edit Card" onClick={gotoEdit} />
            </div>

            <div className="flex justify-center">
              <img src={qrCdoeImg} alt="qrcodeimg" />
            </div>

            <div className="my-8 md:text-sm w-full   ">
              <Button text="View Card" onClick={gotoView} />
            </div>
          </div>
        </div>

        <div
          className={`flex justify-center mt-2 md:text-sm w-full sm:w-3/5  self-center sm:block text-center  ${
            props.sideButtonHidden ? "block text-sxm w-fit" : "hidden"
          }`}
        >
          <Button
            text="View Card"
            onClick={gotoView}
            style={" lg:text-[25px]  text-[14px] lg:py-4 lg:px-8 w-fit mx-auto"}
          />
        </div>
      </div>
    </div>
  );
};

export default Viewcard;
