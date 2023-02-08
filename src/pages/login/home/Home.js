import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Mainsidebar from "../../../components/sidebar/Mainsidebar";
import { format } from 'date-fns'

import addCard from "../../../assets/images/addcard.svg";
import Card from "../../../components/Cards/Card";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";
import Logout from "../../../components/logout/Logout";
import { collection, getDocs } from "firebase/firestore/lite";
import { addAnalytics } from "../../../controller/Analytics";
import { getAllCards } from "../../../controller/Cards";
const images = [
  "./images/card-1.png",
  "./images/card-2.png",
  "./images/card-3.png",
];





export const Home = () => {
  const [cardsData, setCardsData] = useState([]);
  const [searchCards, setSearchCards] = useState("");


  useEffect( () => {
   const fetchData = async () => {
      const documents =await getAllCards();
      setCardsData(documents);
    }
    fetchData();

  }, [

  ]);

      console.log(auth.currentUser);
  const navigate = useNavigate();
  const navigateToDashboard = (id, cardId, cardVisit) => {
    navigate(`/dashboard?id=${cardId}`);
    const date = format(new Date(), 'dd/MM/yyyy');
    
    const cardData = {
      cardId: cardId,
      cardVisit: cardVisit,
      date: date,
    };

    addAnalytics(cardData);

  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(()=>{
      if(!auth.currentUser){
        navigate('/login')
      }
  },[auth]);
  if(auth.currentUser)
  {
    return (
      <>
         <Logout   />
     
      <div className="flex w-screen h-screen font-inter">
        <div
          className={`lg:w-[15%]   h-full sm:block   sm:static fixed w-1/2 top-0 left-0  ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Mainsidebar active={1} />
        </div>
        <div className="lg:w-[85%] w-full ">
          <div className="h-[10%]">
            <Header heading="Cards" openMenu={openMenu} />
          </div>
          <div className="h-[90%]" onClick={closeMenu}>
            <div className="p-4">
              <div>
                <input
                  type={"text"}
                  placeholder={"Search Card"}

                  onChange = {(e) => {
                    setSearchCards(e.target.value);
                  }}
                  className="sm:w-4/5 w-full   border  border-[#494949] rounded-md p-2 placeholder:text-[#646464] placeholder:italic outline-none "
                />
              </div>
  
              <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:justify-none justify-center sm:grid-cols-2  gap-4 w-4/5 mx-auto sm:mx-none">
                <div className=" my-4 cursor-pointer ">
                  <img src={addCard} alt="Add card " />
                </div>
  
                {cardsData  .filter((el) => {
                  if (searchCards === "") {
                    return el;
                  } else {
                    return el.name.toLowerCase().includes(searchCards);
                  }
                }).map((item, i) => {
                  return (
                    <Card
                      key={i}
                      image={item.profileImage}
                      id={"C_" + (i + 1) + "    "}
                      name={item.name}
                      onClick={() => navigateToDashboard(i,item.id, true )}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }


};
