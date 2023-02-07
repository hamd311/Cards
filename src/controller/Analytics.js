import { addDoc, collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../firebase";

export const getAnalytics = async (id) => {
  console.log("id 2: ", id);
    const visitCollection =  query(collection(db, "visits"), where("cardId", "==", id));
    const data = await getDocs(visitCollection);
    console.log("getAnalytics", data);

    let documents = [];
    data.docs.forEach((doc) => {
      documents.push({ ...doc.data(), id: doc.id });
    });
    console.log("getAnalytics", documents);
    return documents;
}
export const getAnalyticsDate = async (id,date) => {
  const visitCollection =  query(collection(db, "visits"), where("cardId", "==", id), where("date", "==", date));
  const data = await getDocs(visitCollection);
  console.log(data);

  let documents = [];
  data.docs.forEach((doc) => {
    documents.push({ ...doc.data(), id: doc.id });
  });
  console.log(documents);
  return documents;
}



export const addAnalytics = async (data) => {
  const visitCollection = collection(db, "visits");
  const result = await addDoc(visitCollection,data);
  console.log(result);
}