import React, { useState } from "react";
import Disclosurebutton from "../Button/Disclosurebutton";
import Aboutcontent from "../DisclosureContent/Aboutcontent";
import Gallerycontent from "../DisclosureContent/Gallerycontent";
import Leadgenerationcontent from "../DisclosureContent/Leadgenerationcontent";
import Reviewcontent from "../DisclosureContent/Reviewcontent";
import Servicescontent from "../DisclosureContent/Servicescontent";

const Contentcontent = ({card,setCard, gallaryImages,setGallaryImages }) => {
  return (
    <div className="p-4 h-fit">
      <div className="my-4">
        <Disclosurebutton text="About " component={<Aboutcontent 
            card={card}
            setCard={setCard}
        />} />
      </div>
      <div className="my-4">
        <Disclosurebutton text="Services " component={<Servicescontent 
        
        card={card}
        setCard={setCard}
        />} />
      </div>

      <div className="my-4">
        <Disclosurebutton text="Gallery " component={<Gallerycontent 
            card={card}
            setCard={setCard}
            gallaryImages={gallaryImages}
            setGallaryImages={setGallaryImages} 
        />} />
      </div>
      <div className="my-4">
        <Disclosurebutton text="Reviews " component={<Reviewcontent 
        
        card={card}
        setCard={setCard}
        />} />
      </div>
      <div className="my-4">
        <Disclosurebutton
          text="Lead Generation System "
          component={<Leadgenerationcontent 
            card={card}
            setCard={setCard}
          />}
        />
      </div>
    </div>
  );
};

export default Contentcontent;
