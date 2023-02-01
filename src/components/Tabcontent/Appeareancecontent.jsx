import React from "react";

import Disclosurebutton from "../Button/Disclosurebutton";
import Colorscontent from "../DisclosureContent/Colorscontent";
import Themescontent from "../DisclosureContent/Themescontent";

const Appeareancecontent = ({card,setCard}) => {
  return (
    <div className="w-full min-h-full  max-h-fit p-4 flex flex-col">
      <div className="my-4 w-full ">
        <Disclosurebutton
          text="Themes"
          isOpen={true}
          card={card}
          setCard={setCard}
          component={<Themescontent 
            card={card}
            setCard={setCard}
          />}
        />
      </div>

      <div className="my-4 w-full">
        <Disclosurebutton
          text="Colors"
          isOpen={true}
          component={<Colorscontent 
          
            card={card}
            setCard={setCard}
          />}
        />
      </div>
    </div>
  );
};

export default Appeareancecontent;
