import React from "react";

import Disclosurebutton from "../Button/Disclosurebutton";
import Colorscontent from "../DisclosureContent/Colorscontent";
import Themescontent from "../DisclosureContent/Themescontent";

const Appeareancecontent = () => {
  return (
    <div className="w-full min-h-full  max-h-fit p-4 flex flex-col">
      <div className="my-4 w-full ">
        <Disclosurebutton
          text="Themes"
          isOpen={true}
          component={<Themescontent />}
        />
      </div>

      <div className="my-4 w-full">
        <Disclosurebutton
          text="Colors"
          isOpen={true}
          component={<Colorscontent />}
        />
      </div>
    </div>
  );
};

export default Appeareancecontent;
