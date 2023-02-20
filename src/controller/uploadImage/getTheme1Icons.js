import { addDoc, collection, getDocs } from 'firebase/firestore/lite'
import React from 'react'
import { db } from '../../firebase'

const getTheme1Icons = async () => {
    let theme1={
        icons:[   {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2FCanlendly.png?alt=media&token=8d2c4225-3f7a-4c9f-93ea-5e0a1feab043",
        name:"canlendly",
        id:1},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2Femail.png?alt=media&token=fedbfbce-3c64-4c06-9952-6ea6cf16f7a7",
        name:"email",
        id:2},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2FGroup%2039867.png?alt=media&token=2d6c15f6-95f1-4e23-803c-895741ee296b",
        name:"instagram",
        id:3},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2Fmessanger.png?alt=media&token=d401a8b6-7302-417e-8584-4d43c12190fa",
        name:"messanger",
        id:4},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2Fpaypal.png?alt=media&token=3612c11a-07d9-433d-9621-bf152f848cd4",
        name:"paypal",
        id:5},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2FPinterest.png?alt=media&token=ca28ea8b-8443-4176-bca8-40ed5b411b53",
        name:"pinterest",
        id:6},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2Fsnapchat.png?alt=media&token=a5014cf4-68fc-4718-87cf-1f05a8873381",
        name:"snapchat",
        id:7},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2Fspotify.png?alt=media&token=3bd2f5f9-2d6a-47b0-aa30-c2f9d0f12958",
        name:"spotify",
        id:8},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2FTelegram.png?alt=media&token=b20dddb8-6827-490e-87bb-b6368b5afee7",
        name:"telegram",
        id:9},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2FGroup%2039867.png?alt=media&token=2d6c15f6-95f1-4e23-803c-895741ee296b",
        name:"tiktok",
        id:10},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2Ftwitter.png?alt=media&token=68128599-4335-4a8d-b46e-6d0197428a7d",
        name:"twitter",
        id:11},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2Fvimeo.png?alt=media&token=95a3cfde-dd5c-418c-b775-fe37505152fd",
        name:"vimeo",
        id:12},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2FGroup%2039867.png?alt=media&token=2d6c15f6-95f1-4e23-803c-895741ee296b",
        name:"whatsapp",
        id:13},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2Fyelp.png?alt=media&token=13590c7b-3972-43e3-b843-0fb49d1f0909",
        name:"yelp",
        id:14},
         {link:"https://firebasestorage.googleapis.com/v0/b/digicard-4cbb4.appspot.com/o/theme1%2Fyoutube.png?alt=media&token=47bdc078-8368-4aa1-a5bf-3ded8e34b3e7",
        name:"youtube",
        id:16},]
    }
     
    
   
    let ref  = collection(db,"theme1");

   

    const data = await getDocs(ref);
    let documents = [];
    data.docs.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
   
      return documents;


}

export default getTheme1Icons