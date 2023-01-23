import React from 'react'
import { toast } from 'react-toastify';
  
   const showToast =(message)=>{
    toast.error(`${message}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
   }

const toastErrors = (errCode) => {
    
    console.log(errCode)

    showToast(errCode);

    //   switch (errCode) {
    //     case "auth/weak-password":
    //         showToast("Password should be greater then six characters");
    //         break;
      
    //     default:
    //         break;
    //   }
      
 
}

export default toastErrors