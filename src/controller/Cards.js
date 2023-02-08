import { addDoc, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore/lite";
import { db } from "../firebase";

export const addCardsData = async (data,id) => {
    const cardsCollection = doc(db, "cards",id.id.toString());
    const result = await setDoc(cardsCollection,data);
    console.log("addCardsData", id);
  }

 export const getAllCards = async () => {
    const cardsCollection = collection(db, "cards");
    const data = await getDocs(cardsCollection);
    console.log(data);

    let documents = [];
    data.docs.forEach((doc) => {
      documents.push({ ...doc.data(), id: doc.id });
    });
    console.log("getAllCards", documents);
    return documents;
  };

  
 export const getSingleCard = async (id) => {
  const docRef = doc(db, "cards", id.id.toString());
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  return docSnap.data();
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  return "";
}
};