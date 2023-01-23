import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import Header from "../../../components/Header/Header";
import Inputgroup from "../../../components/Input/Inputgroup";
import Mainsidebar from "../../../components/sidebar/Mainsidebar";

const Account = () => {
  const [form, setForm] = useState({
    firstName: "Hugo",
    lastName: "Galindo",
    email: "vh_galo@hotmail.com",
    phoneNumber: "7476090334",
    newPassword: "",
  });

  const handelSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted");
  };
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="flex w-screen h-screen  xl:flex-row lg:flex-row flex-col font-inter">
      <div
        className={`lg:w-[15%]   h-full sm:block   sm:static fixed w-1/2 top-0 left-0  ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Mainsidebar active={2} />
      </div>
      <div className="md:w-[85%] w-full overflow-auto">
        <div className="h-[10%]">
          <Header heading="My Account" openMenu={openMenu} />
        </div>

        <div className="px-4 py-8 h-[90%]" onClick={closeMenu}>
          <form className="w-4/5 mx-auto lg:mx-0 " onSubmit={handelSubmit}>
            <Inputgroup
              label={"First Name"}
              value={form.firstName}
              placeholder={"First Name"}
              onChange={handleChange}
              name={"firstName"}
              id={"firstName"}
              type={"text"}
            />
            <Inputgroup
              label={"Last Name"}
              value={form.lastName}
              placeholder={"Last Name"}
              onChange={handleChange}
              name={"lastName"}
              id={"lasttName"}
              type={"text"}
            />
            <Inputgroup
              label={"Email"}
              value={form.email}
              placeholder={"Email"}
              onChange={handleChange}
              name={"email"}
              id={"email"}
              type={"email"}
            />
            <Inputgroup
              label={"Phone Number"}
              value={form.phoneNumber}
              placeholder={"Phone Number"}
              onChange={handleChange}
              name={"phoneNumber"}
              id={"phoneNumber"}
              type={"phone"}
            />
            <Inputgroup
              label={
                "Fill the password only if you wish to change the current one."
              }
              placeholder={"New Password"}
              onChange={handleChange}
              value={form.newPassword}
              name={"newPassword"}
              id={"newPassword"}
              type={"password"}
            />

            <div className="my-4 lg:w-3/12 xl:w-3/12 w-full md:w-612 min-w-fit">
              <Button
                text="Add Payment Method "
                customize="w-full"
                smRoundedFull={true}
              />
            </div>
            <div className="my-4 lg:w-3/12 xl:w-3/12 w-full md:w-612 min-w-fit ">
              <Button
                text="Save Changes  "
                customize="w-full"
                type="submit"
                smRoundedFull={true}
              />
            </div>

            <div className="my-4 lg:w-3/12 xl:w-3/12 w-full md:w-612 min-w-fit">
              <Button
                text="Delete Account"
                customize="bg-[#F53030] w-full"
                type="reset"
                smRoundedFull={true}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
