import React from "react";
import { TbWorldUpload } from "react-icons/tb";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Inputgroup from "../Input/Inputgroup";
import Simpletextarea from "../Input/Simpletextarea";
import Draggable from "react-draggable";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";

const Servicescontent = ({card,setCard}) => {
  const [services, setServices] = useState([{ tile: "", details: "" }]);

  const populateList = () => {

    let temp = [...card.services];
    temp.push({ tile: "", details: "" });
    setCard({
      ...card,
      services:temp
    })
    setServices([...services, { tile: ``, details: `` }]);
  };

  const handelInputChange = (index, event) => {
    let data = [...services];
   data[index][event.target.name] = event.target.value;
    setServices(data);
  };

  return (
    <div>
      <div className="lg:w-3/5 mx-auto">
        <ReactSortable list={services} setList={setServices}>
          {services.map((service, index) => {
            return (
              <div
                className="flex border services-container rounded-xl lg:w-2/3 w-full my-2 "
                key={index}
              >
                <div className="flex flex-col three-dots-container justify-center px-3 py-2 w-1/8">
                  <div className="w-2 h-2  bg-black rounded-full my-1"></div>
                  <div className="w-2 h-2  bg-black rounded-full my-1 "></div>
                  <div className="w-2 h-2  bg-black rounded-full my-1 "></div>
                </div>
                <div className="flex w-full justify-around  items-center p-4 ">
                  <div className="w-full">
                    <Input
                      placeholder={"Tile"}
                      value={service.tile}
                      name={"tile"}
                      id={"tile"}
                      onChange={(event)=>{
                        handelInputChange(index, event);
                        let temp  = [...card.services];
                        temp[index].tile = event.target.value;
                        setCard({
                          ...card,
                          services:temp
                        })
                      }}
                    />
                    <Simpletextarea
                      placeholder={"Details"}
                      name={"details"}
                      id={"details"}
                      value={service.details}
                      onChange={(event) => {
                        let temp  = [...card.services];
                        temp[index].details = event.target.value;
                        setCard({
                          ...card,
                          services:temp
                        })
                        handelInputChange(index, event)
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </ReactSortable>

        {/*         

        <Draggable>
          <div className="flex border services-container rounded-xl lg:w-2/3 w-full my-2 ">
            <div className="flex flex-col three-dots-container justify-center px-3 py-2 w-1/8">
              <div className="w-2 h-2  bg-black rounded-full my-1"></div>
              <div className="w-2 h-2  bg-black rounded-full my-1 "></div>
              <div className="w-2 h-2  bg-black rounded-full my-1 "></div>
            </div>
            <div className="flex w-full justify-around  items-center p-4 ">
              <div className="w-full">
                <Input placeholder={"Products"} value={"Products"} />
                <Simpletextarea
                  placeholder={"Some text here"}
                  value={`- Work Stations \n- Private offices\n- Chairs`}
                />
              </div>
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div className="flex border services-container rounded-xl lg:w-2/3 w-full my-2 ">
            <div className="flex flex-col three-dots-container justify-center px-3 py-2 w-1/8">
              <div className="w-2 h-2  bg-black rounded-full my-1"></div>
              <div className="w-2 h-2  bg-black rounded-full my-1 "></div>
              <div className="w-2 h-2  bg-black rounded-full my-1 "></div>
            </div>
            <div className="flex w-full justify-around  items-center p-4 ">
              <div className="w-full">
                <Input placeholder={"Tile"} value={"Tile"} />
                <div className="my-1">
                  <Input placeholder={"Some text here"} value={`Detail`} />
                </div>
              </div>
            </div>
          </div>
        </Draggable> */}
        <div className="lg:w-2/3 w-full">
          <div className="w-4/12 ml-auto">
            <Button
              text={"Add new"}
              outline={true}
              sm={true}
              onClick={populateList}
            />
          </div>
        </div>

        <div className="w-5/12 mx-auto">
          <Button text={"Done"} outline={true} />
        </div>
      </div>
    </div>
  );
};

export default Servicescontent;
