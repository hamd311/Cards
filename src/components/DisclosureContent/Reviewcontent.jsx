import React, { useState } from "react";
import Button from "../Button/Button";
import Inputgroup from "../Input/Inputgroup";
import LabledForm from "../Input/LabledForm";

const Reviewcontent = ({card,setCard}) => {
  const [formData, setFormData] = useState({
    name: "ScottWearing, Director of Operations, BKM OfFice ",
    review: "",
  });

  const handelChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name} \n Review: ${formData.review}`);
  };

  const handleAddButton = (event) => {
    alert("Added");
  };
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto">
        <form className="w-full" onSubmit={handleSubmit}>
          <Inputgroup
            label={"Name"}
            value={card?.reviews?.name}
            onChange={(e)=>{

              let temp = card.reviews;
              temp.name = e.target.value;
              setCard({
                ...card,
                reviews:temp,
              })
            }}
            name={"name"}
            id={"name"}
          />
          <div className="my-2">
            <LabledForm
              label={"Review"}
             
              name={"review"}
              id={"review"}
              value={card?.reviews?.review}
              onChange={(e)=>{
  
                let temp = card.reviews;
                temp.review = e.target.value;
                setCard({
                  ...card,
                  reviews:temp,
                })
              }}
            />
          </div>

          <div className="text-right">
            <Button
              text="Add a review"
              outline={true}
              sm={true}
              onClick={handleAddButton}
              type=""
            />
          </div>

          <div className="text-center">
            <Button text={"Done"} type={"submit"} outline={true} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviewcontent;
