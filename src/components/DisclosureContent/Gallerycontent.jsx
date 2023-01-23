import React from "react";
import Input from "../Input/Input";
import Inputgroup from "../Input/Inputgroup";
import FileInput from "../Input/FileInput";
import Button from "../Button/Button";
import ButtonFileInput from "../Input/ButtonFileInput";
import Draggable from "react-draggable";

const Gallerycontent = () => {
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto">
        <div className="w-4/5 mx-auto">
          <Inputgroup label={"Galery Name"} value={"Our work"} />
        </div>

        <div className="flex border links-container rounded-xl w-full my-2 mx-auto">
          <div className="flex flex-col three-dots-container justify-center px-3 py-2 w-1/8">
            <div className="w-2 h-2  bg-black rounded-full my-1"></div>
            <div className="w-2 h-2  bg-black rounded-full my-1 "></div>
            <div className="w-2 h-2  bg-black rounded-full my-1 "></div>
          </div>
          <div className="flex w-full justify-around  items-center p-4 ">
            <div className="w-full">
              <Inputgroup
                label={"Video URL"}
                value={"Video URL"}
                id={"videoUrl"}
                name={"videoUrl"}
              />
            </div>
          </div>
        </div>

        <div className="flex border links-container rounded-xl w-full my-2 mx-auto">
          <div className="flex flex-col three-dots-container justify-center px-3 py-2 w-1/8">
            <div className="w-2 h-2  bg-black rounded-full my-1"></div>
            <div className="w-2 h-2  bg-black rounded-full my-1 "></div>
            <div className="w-2 h-2  bg-black rounded-full my-1 "></div>
          </div>
          <div className="flex w-full justify-around  items-center p-4  ">
            <div className="w-full grid grid-cols-3 gap-4 ">
              <div className="w-full h-full">
                <FileInput />
              </div>
              <div className="w-full h-full">
                <FileInput />
              </div>
              <div className="w-full h-full">
                <FileInput />
              </div>
              <div className="col-span-2 row-span-2 w-full h-full">
                <FileInput />
              </div>
              <div className="w-full h-full">
                <FileInput />
              </div>
              <div className="w-full h-full">
                <FileInput />
              </div>
              <div className="w-full h-full">
                <FileInput />
              </div>
              <div className="w-full h-full">
                <FileInput />
              </div>
              <div className="w-full h-full">
                <FileInput />
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit ml-auto">
          <ButtonFileInput
            text={"Add new"}
            css={" py-2 px-3 text-xs rounded-full"}
          />
        </div>

        <div className="w-fit mx-auto">
          <Button text={"Done"} outline={true} />
        </div>
      </div>
    </div>
  );
};

export default Gallerycontent;
