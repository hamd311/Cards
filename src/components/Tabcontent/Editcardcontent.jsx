import React from "react";
import Viewcard from "../Cards/Viewcard";
import Tab from "../Tab/Tab";
import Appeareancecontent from "./Appeareancecontent";
import Contactinfoconent from "./Contactinfoconent";
import Contentcontent from "./Contentcontent";
import eyeicon from "../../assets/icons/eye.svg";
import { useState } from "react";
import { useEffect } from "react";
import { getSingleCard } from "../../controller/Cards";

import img1 from "../../assets/Group 39863.png"
import img2 from "../../assets/Group 39864.png"
import getTheme1Icons from "../../controller/uploadImage/getTheme1Icons";

const Editcardcontent = (id) => {
  const [coverImage,setCoverImg] =useState(img1);
  const [profileImage,setProfileImage] =useState(img2);
  const [socialQuickAccess,setSocialQuickAccess] = useState([]);
  const [theme1Icons,setThemem1Icons] = useState();
  
  const [gallaryImages,setGallaryImages] = useState([]);

  console.log("gallaryImagesgallaryImages",gallaryImages);

   
    const[card,setCard] = useState({
      theme:1,
      bgColor:"#000000",
      fontColor:"#ffffff",   
      coverImage: img1,
      profileImage: img2,
      name: "",
      tile: "",
      busniessName: "",
      phoneNumber: "",
      email: "",
      homePage: "",
      
      links:[{ tile: "Visit our website", url: "www.teamoni.com", icon: "" }],
      article:{
        title:"",
        content:""
      },
      services:[{ tile: "Ours services", details: "-installatiion",isOpen:true
    }],
      gallary:{
        name:"Our Work",
        video:"https://www.youtube.com/watch?v=-mJFZp",
        images:[],
      },
     reviews:{
      name:"ScottWearing, Director of Operations, BKM OfFice",
      review:""
     },
     leadGeneration:{
        isTrue:true,
        leadGeneration:"ksdjfajsd"
     },
    
      
      
    });

    useEffect(async()=>{
     let theme1Icons = await  getTheme1Icons();
    setThemem1Icons(theme1Icons[0].icons);
    },[])
        
    useEffect(async () => {

      const fetchData = async () => {
        const result = await getSingleCard(id);
        if(result == ""){
        setCard(
          
          {
          theme:1,
          bgColor:"#000000",
          fontColor:"#ffffff",   
          coverImage: "",
          profileImage: "",
          name: "",
          tile: "",
          busniessName: "",
          phoneNumber: "",
          email: "",
          homePage: "",
          socialQuickAccess:[],
          links:[{ tile: "Visit our website", url: "www.teamoni.com", icon: "" }],
          article:{
            title:"",
            content:""
          },
          services:[{ tile: "Ours services", details: "-installatiion",
          isOpen:false
        }],
          gallary:{
            name:"Our Work",
            video:"https://www.youtube.com/watch?v=-mJFZp",
            images:[],
          },
         reviews:{
          name:"ScottWearing, Director of Operations, BKM OfFice",
          review:""
         },
         leadGeneration:{
            isTrue:true,
            leadGeneration:"ksdjfajsd"
         },
        
          
          
        });
        }else{
          console.log("resultresult",result)
          setCard(result);
        }
      }

      fetchData();
    } , [])

   
  return (
    <div className="flex h-full w-full flex-col lg:flex-row">
      <button
        className="py-2 left-[33%] bottom-[2%] mx-auto my-auto px-4 fixed sm:hidden  rounded-full border text-sm font-bold text-black bg-[#E1E1E1] opacity-none flex justify-center items-center"
        onClick={() => {
          window.location.href = "/view";
        }}
      >
        <span>
          <img src={eyeicon} alt="preview" />
        </span>
        <span className="ml-4">preview</span>
      </button>

      <div className="lg:w-5/6 w-full h-fit min-h-full lg:border-r border-black">
        <Tab
          tabs={["Appeareance", "Contact info", "Content"]}
          tabcontent={[
            <Appeareancecontent 
            card={card}
            setCard={setCard}
            />,
            <Contactinfoconent 
            card={card}
            setCard={setCard}
            id ={id}
            coverImage={coverImage}
            setCoverImg={setCoverImg}
            socialQuickAccess={socialQuickAccess}
            setSocialQuickAccess={setSocialQuickAccess}

            profileImage ={profileImage}
            setProfileImage={setProfileImage}
            theme1Icons ={theme1Icons}
            
            />,
            <Contentcontent 
            card={card}
            setCard={setCard}
            gallaryImages={gallaryImages}
            setGallaryImages = {setGallaryImages}
            />,
          ]}
          activeStyle={"lg:text-[25px] text-[18px]"}
          inactiveStyle={"lg:text-[22px] text-[16px]"}
        />
      </div>
      <div className="lg:w-2/6 w-full h-full hidden sm:block ">
        <Viewcard 
             card={card}
             setCard={setCard}
             coverImage={coverImage}
             profileImage={profileImage}
             socialQuickAccess = {socialQuickAccess}
             gallaryImages={gallaryImages}
             setGallaryImages = {gallaryImages}
        />
      </div>
    </div>
  );
};

export default Editcardcontent;
