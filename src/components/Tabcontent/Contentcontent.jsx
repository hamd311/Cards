import React, { useState } from "react";
import Disclosurebutton from "../Button/Disclosurebutton";
import Aboutcontent from "../DisclosureContent/Aboutcontent";
import Gallerycontent from "../DisclosureContent/Gallerycontent";
import Leadgenerationcontent from "../DisclosureContent/Leadgenerationcontent";
import Reviewcontent from "../DisclosureContent/Reviewcontent";
import Servicescontent from "../DisclosureContent/Servicescontent";

const Contentcontent = () => {
  return (
    <div className="p-4 h-fit">
      <div className="my-4">
        <Disclosurebutton text="About " component={<Aboutcontent />} />
      </div>
      <div className="my-4">
        <Disclosurebutton text="Services " component={<Servicescontent />} />
      </div>

      <div className="my-4">
        <Disclosurebutton text="Gallery " component={<Gallerycontent />} />
      </div>
      <div className="my-4">
        <Disclosurebutton text="Reviews " component={<Reviewcontent />} />
      </div>
      <div className="my-4">
        <Disclosurebutton
          text="Lead Generation System "
          component={<Leadgenerationcontent />}
        />
      </div>
    </div>
  );
};

export default Contentcontent;
