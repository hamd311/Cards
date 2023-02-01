import React, { useState } from "react";

const Colorscontent = ({card,setCard}) => {

  console.log("card",card)
  const [colorScheme, setColorScheme] = useState({
    bg: card?.bgColor || "#000000",
    fg: card?.fontColor || "#ffffff",
  });

  const handleColorChange = (event) => {
    setColorScheme({ ...colorScheme, [event.target.name]: event.target.value });
  };
  return (
    <div className="m-8 sm:bg-gray-100 flex justify-around h-full rounded p-0 sm:p-5">
      <div className="px-4 ">
        <div className="text-xl font-bold">Background</div>
        <div className="flex justify-center items-center">
          <input
            id="bg"
            name="bg"
            type="color"
            className="w-10 h-10"
            onChange={(e)=>{
              setCard({
                ...card,
                bgColor:e.target.value
              })
              setColorScheme({
                ...colorScheme,
                bg:e.target.value
              })
            }}
            value={colorScheme.bg}
          />
          <span className="font-bold  mx-2">
            {colorScheme.bg.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="px-4 ">
        <div className="text-xl font-bold">Font</div>
        <div className="flex justify-center items-center">
          <input
            id="fg"
            name="fg"
            type="color"
            className="w-10 h-10"
            onChange={(e)=>{
              setCard({
                ...card,
                fontColor:e.target.value
              })
              setColorScheme({
                ...colorScheme,
                fg:e.target.value
              })
            }}
            value={colorScheme.fg}
          />
          <span className="font-bold  mx-2">
            {colorScheme.fg.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Colorscontent;
