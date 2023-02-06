import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import qrCdoeImg from "../../assets/qrcode.svg"
import imgbg from "../../assets/images/mobilePhone.png"
const Viewcard = (props) => {
  const [id, setId] = useState();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    const id = Number(query.get("id"));

    setId(id);

    // setHeaderText(`${cardData[id].firstName} ${cardData[id].cardNumber}`);
  }, []);

  const navigate = useNavigate();

  const gotoEdit = () => {
    navigate(`/edit?id=${id}`);
  };

  const gotoView = () => {
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
        <div className="flex w-full items-center 
          justify-center
        "
       
        >

          <div 
            style={{
                backgroundImage:`url(${imgbg})`,
                 height:"90vh",
                 width:"90%",
                 backgroundSize: "contain",
                 backgroundRepeat:"no-repeat",
                 marginLeft:"10px"
            }}
          >

            <div
                style={{
                   borderRadius:"25px",
                   marginRight: "31px",
                   marginLeft: "7px",
                   color:props?.card?.fontColor,
                  overflow: 'hidden',

                   marginTop: "7px",
                  //  margin:"15px",
                   backgroundColor:props?.card?.bgColor
              }}
            >

              <p>{props?.card?.busniessName}</p>
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
              <img src={qrCdoeImg}  alt="qrcodeimg"  />
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
