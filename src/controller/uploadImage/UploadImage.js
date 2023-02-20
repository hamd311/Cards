import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { getStorage, ref, uploadBytes,getDownloadURL} from "firebase/storage";
import { auth } from '../../firebase';
const UploadImage =  async (file,cover) => {
      const id  = uuidv4();
    const storage = getStorage();
   let ext = file.name.split(".").pop();
    console.log("file",ext)
    let imageRef = ref(storage,`${id}.${ext}`);
    // 'file' comes from the Blob or File API

    let resp = await   uploadBytes(imageRef, file);
    let url =  await getDownloadURL(resp.ref);

    return url;
// return uploadBytes(imageRef, file).then((snapshot) => {
   
//    return getDownloadURL(ref(snapshot.ref)).then((url)=>{
//         console.log(url);
//         return url;
//     }).catch(err=>{
//         console.log(err);
//         let url ="";
//         return url 

//     })
//   }).catch(err=>console.log(err))
}

export default UploadImage