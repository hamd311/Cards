import React, { useState } from "react";
import Button from "../Button/Button";
import Inputgroup from "../Input/Inputgroup";
import Textarea from "../Input/Textarea";

const Aboutcontent = (props) => {
  const [formData, setFormData] = useState({
    tile: "",
    description: "",
  });

  const [weight, setWeight] = useState("font-normal");
  const [style, setStyle] = useState("not-italic");
  const [align, setAlign] = useState("text-left");

  //  Function that called on onClick to bold unbold the font in the form
  const toggleBold = () => {
    if (weight === "font-normal") {
      setWeight("font-bold");
    } else {
      setWeight("font-normal");
    }
  };

  //  Function that called on onClick to italic unitalic the font in the form
  const toggleStyle = () => {
    if (style === "not-italic") {
      setStyle("itaclic");
    } else {
      setStyle("not-italic");
    }
  };
  //  Function that called on onClick to change the alignment

  const toggleAlign = (align) => {
    setAlign(align);
  };

  const handelChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Tile: ${formData.tile}\n ${formData.description}`);
  };
  return (
    <div className="w-full">
      <div className="w-full lg:w-3/4 mx-auto">
        <form onSubmit={handleSubmit}>
          <Inputgroup
            label={"Tile"}
            value={formData.tile}
            placeholder={"About"}
            onChange={handelChange}
            name={"tile"}
            id={"tile"}
            type={"text"}
          />

          <Textarea
            value={formData.description}
            id={"description"}
            name={"description"}
            onChange={handelChange}
            formAttributes={{ weight, style, align }}
            formHandler={{ toggleBold, toggleAlign, toggleStyle }}
          />

          <div className="w-fit mx-auto">
            <Button text={"Done"} outline={true} type={"submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Aboutcontent;
