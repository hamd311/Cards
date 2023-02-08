import React from "react";
import { useState } from "react";
import UploadImage from "../../controller/uploadImage/UploadImage";
import FileInput from "../Input/FileInput";
import Input from "../Input/Input";

const Personalinfocontent = (props) => {

    const {card,setCard}  = props;  
  return (
    <div className="w-full">
      <div className="lg:w-4/5 w-full p-4">
        <div className="lg:ml-12 w-full flex">
          {/* File input */}

          <div className="flex">
            <div>
              <p
                style={{
                  color: "#BEC3C5",
                }}
              >
                Cover Image
              </p>
              <FileInput 
                onChange = { async(file)=>{

                  console.log("file",file)
                let resp =   await UploadImage(file,"cover");
                console.log("resp",resp)
                if(resp !== ""){
                  setCard({
                    ...card,
                    coverImage:resp
                  })
                }
                }}
              />
            </div>
            <div className="mx-3">
              <p
                style={{
                  color: "#BEC3C5",
                }}
              >
                Logo/Profile
              </p>
              <FileInput 
              
              onChange = { async(file)=>{

                console.log("file",file)
              let resp =   await UploadImage(file,"logo");
              if(resp !== ""){
                setCard({
                  ...card,
                  profileImage:resp
                })
              }
              }}
              />
            </div>
          </div>
        </div>
        <div className="lg:ml-12  lg:w-3/5 w-full  mx-auto">
          <p className="input-label mt-2">Name</p>
          <Input
            placeholder="Hugo Galindo"
            name="name"
            id="name"
            value={card?.name}
            onChange={(e)=>{
                setCard({
                  ...card,
                  name:e.target.value
                })
            }}
          />
          <p className="input-label mt-2">Tile/Position</p>
          <Input
            placeholder="Account Manager"
            name="tile"
            id="tile"
            value={card?.tile}
            onChange={(e)=>{
              setCard({
                ...card,
                tile:e.target.value
              })
          }}
          />

          <p className="input-label mt-2">Business Name</p>
          <Input
            placeholder="Nunez Office Installations"
            name="busniessName"
            id="busniessName"
            value={card?.busniessName}
            onChange={(e)=>{
              setCard({
                ...card,
                busniessName:e.target.value
              })
          }}
          />
          <p className="input-label mt-2">Phone Number</p>
          <Input
            placeholder="7476090334"
            id="phoneNumber"
            name="phoneNumber"
            value={card?.phoneNumber}
            onChange={(e)=>{
              setCard({
                ...card,
                phoneNumber:e.target.value
              })
          }}
          />
          <p className="input-label mt-2">Email</p>
          <Input
            placeholder="Hugo@teamnoi.com"
            id="email"
            name="email"
            value={card?.email}
            onChange={(e)=>{
              setCard({
                ...card,
                email:e.target.value
              })
          }}
          />

          <p className="input-label mt-2">Home Page</p>
          <Input
            placeholder="www.Mydatacard.com/noi/c3"
            id="homePage"
            name="homePage"
            value={card?.homePage}
            onChange={(e)=>{
              setCard({
                ...card,
                homePage:e.target.value
              })
          }}
          />
        </div>
      </div>
    </div>
  );
};

export default Personalinfocontent;
