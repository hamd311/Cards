import React from 'react'
import { getStorage, ref, uploadBytes,getDownloadURL} from "firebase/storage";
import { auth } from '../../firebase';
const UploadImage = (file,cover) => {
    const storage = getStorage();
   let ext = file.name.split(".").pop();
    console.log("file",ext)
    let imageRef = ref(storage,`cards/${cover}/${auth.currentUser.uid}.${ext}`);
    // 'file' comes from the Blob or File API
uploadBytes(imageRef, file).then((snapshot) => {
   
    getDownloadURL(ref(snapshot.ref)).then((url)=>{
        // console.log(url);
        return url;
    }).catch(err=>{
        console.log(err);
        let url ="";
        return url 

    })
  }).catch(err=>console.log(err))
}

export default UploadImage