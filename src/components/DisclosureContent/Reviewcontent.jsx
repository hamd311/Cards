import React, { useState } from "react";
import Button from "../Button/Button";
import Inputgroup from "../Input/Inputgroup";
import LabledForm from "../Input/LabledForm";

const Reviewcontent = () => {
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
            value={formData.name}
            onChange={handelChange}
            name={"name"}
            id={"name"}
          />
          <div className="my-2">
            <LabledForm
              label={"Review"}
              value={formData.review}
              name={"review"}
              id={"review"}
              onChange={handelChange}
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
