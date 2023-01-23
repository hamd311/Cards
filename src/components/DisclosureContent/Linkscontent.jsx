import React, { useState } from "react";
import ButtonFileInput from "../Input/ButtonFileInput";
import "./Socialcontent.css";
import { ReactSortable } from "react-sortablejs";

import defaultIcon from "../../assets/uploadfile.png";
const Linkscontent = (props) => {
  // Sortable list

  const [links, setLinks] = useState([
    { tile: "", url: "", icon: "" },
    { tile: "", url: "", icon: "" },
  ]);

  const populateList = () => {
    console.log("Setting the link to append");
    props.setLinks([...props.links, { tile: "", url: "", icon: "" }]);
  };

  const handelInputChange = (index, event) => {
    let data = [...props.links];
    data[index][event.target.name] = event.target.value;
    props.setLinks(data);
  };

  return (
    <div className="lg:ml-10 pt-4 mx-2">
      <ReactSortable list={props.links} setList={props.setLinks}>
        {props.links.map((link, index) => {
          return (
            <div key={index}>
              <div className="flex mt-5 border links-container rounded-xl lg:w-2/3 w-full">
                <div className="flex flex-col  three-dots-container   justify-center px-3  py-2  w-1/8">
                  <div className="w-2 h-2  bg-black rounded-full my-1"></div>
                  <div className="w-2 h-2  bg-black rounded-full my-1"></div>
                  <div className="w-2 h-2  bg-black rounded-full my-1"></div>
                </div>
                <div className="flex w-full justify-around items-center p-4">
                  <div className="flex flex-col items-center w-[33%]">
                    <img src={defaultIcon} h={73} w={73} alt={"Upload file"} />
                    <button className="change-link-btn"></button>

                    <ButtonFileInput
                      text={"Thumbnail"}
                      css={`change-link-btn rounded-lg px-3  py-1 pb-1 mt-2 cursor-pointer ml-2`}
                    />
                  </div>
                  <div className="flex flex-col w-[67%] p-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={link.tile}
                      id="tile"
                      name="tile"
                      placeholder={"Tile"}
                      onChange={(event) => handelInputChange(index, event)}
                    />
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      id="url"
                      name="url"
                      value={link.url}
                      placeholder={"URL"}
                      onChange={(event) => handelInputChange(index, event)}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ReactSortable>

      <div className="flex mt-5 justify-center w-full sm:w-2/3">
        <button
          className="add-icon-btn px-4 py-2 rounded-full"
          onClick={populateList}
        >
          Add Link
        </button>
      </div>
    </div>
  );
};

export default Linkscontent;
