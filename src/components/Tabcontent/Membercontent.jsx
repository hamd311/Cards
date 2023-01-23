import React, { useState } from "react";
import Viewcard from "../Cards/Viewcard";
import bin from "../../assets/icons/bin.svg";
import Button from "../Button/Button";
import Inputgroup from "../../components/Input/Inputgroup";
import { Input } from "postcss";

const Membercontent = () => {
  const [peoples, setPeoples] = useState([]);

  const [invoite, setInvoite] = useState({ name: "", email: "" });
  const clickInvoiteMember = (event) => {
    event.preventDefault();
    setIsCardHide(false);
  };

  const clickSendButton = (event) => {
    event.preventDefault();
    setIsCardHide(true);

    setPeoples([...peoples, invoite]);
  };

  const hndleInputChange = (event) => {
    setInvoite({ ...invoite, [event.target.name]: event.target.value });
  };

  const handleRemove = (index) => {
    const oldeData = [...peoples];
    oldeData.splice(index, 1);

    setPeoples([...oldeData]);
  };

  const [isCardHide, setIsCardHide] = useState(true);
  return (
    <div className="flex h-full w-full flex-col md:flex-row">
      <div className="lg:w-2/6  w-full py-6 lg:border-r xl:border-r border-black lg:h-full hidden sm:block">
        <Viewcard />
      </div>
      <div className="lg:w-4/5 w-full p-6">
        <div className="lg:w-3/12  w-full">
          <div className="flex">
            <div className="block sm:hidden w-1/2 p-4">
              <Viewcard sideButtonHidden={true} />
            </div>

            <div className="w-1/2 sm:w-full w-full pr-5">
              <div className="font-extrabold	 text-black sm:hidden block text-xs">
                Members with access to edit this card.
              </div>
              {peoples.map((person, index) => {
                return (
                  <div
                    className="flex items-center justify-between w-full my-4"
                    key={index}
                  >
                    <span className="text-xl font-bold text-[#29B862] mx-6 ">
                      {person.name}
                    </span>
                    <img
                      src={bin}
                      alt="Bin"
                      className="cursor-pointer w-7 sm:w-auto"
                      onClick={() => handleRemove(index)}
                    />
                  </div>
                );
              })}

              {/* Invite member button  */}
              <div className="mx-6 mt-48 w-full ">
                <Button
                  text="Invite Member"
                  style={"mx-auto"}
                  onClick={clickInvoiteMember}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Invite member card */}
        <div
          class={`p-8 border border-black my-8 sm:w-3/5  w-full sm:text-base -text-xs  bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ${
            isCardHide ? "hidden" : ""
          }`}
        >
          <p class="hidden sm:block mb-3 font-normal text-gray-700 dark:text-gray-400">
            When you invite a member they will have acces to edit this card.
          </p>

          <div>
            <Inputgroup
              label={"Name"}
              value={invoite.name}
              placeholder={"Full Name"}
              name={"name"}
              id={"name"}
              type={"text"}
              onChange={hndleInputChange}
            />
            <Inputgroup
              label={"Emai or Phone Number"}
              placeholder={"Email"}
              name={"email"}
              id={"email"}
              type={"email"}
            />

            <div className="w-4/12 mx-auto my-8">
              <Button text="Send" onClick={clickSendButton} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membercontent;
