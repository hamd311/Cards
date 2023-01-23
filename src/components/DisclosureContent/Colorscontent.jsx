import React, { useState } from "react";

const Colorscontent = () => {
  const [colorScheme, setColorScheme] = useState({
    bg: "#000000",
    fg: "#FFFFFF",
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
            onChange={handleColorChange}
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
            onInput={handleColorChange}
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
